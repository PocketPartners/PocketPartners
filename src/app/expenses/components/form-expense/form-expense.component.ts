import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpensesEntity } from '../../model/expenses.entity';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import {PaymentEntity} from "../../../payments/model/payment-entity";
import {PaymentService} from "../../../payments/services/payment.service";
import {GroupMembersService} from "../../../group/services/group-members.service";
import {ExpensesService} from "../../services/expenses.service";
import {GroupOperationsService} from "../../../group/services/group-operations.service";
import {GroupEntity} from "../../../group/model/group.entity";
import {OperationEntity} from "../../../group/model/operation-entity";

@Component({
  selector: 'app-form-expense',
  templateUrl: './form-expense.component.html',
  styleUrl: './form-expense.component.css'
})
export class FormExpenseComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  @Input() user: PartnerEntity = new PartnerEntity();
  @Input() joinedGroups: any;
  private Expense = new ExpensesEntity();
  @Output() onAddExpense: EventEmitter<ExpensesEntity> = new EventEmitter<ExpensesEntity>();
  constructor(private _formBuilder: FormBuilder, private router: Router,private paymentService: PaymentService, private groupMembersService: GroupMembersService, private expenseService: ExpensesService, private groupOperationService: GroupOperationsService) { }

  onSubmit() {
    this.Expense.name = this.firstFormGroup.value.firstCtrl as string;
    this.Expense.amount = this.thirdFormGroup.value.firstCtrl as unknown as number;
    this.Expense.userId = this.user.id;
    this.Expense.groupId = this.fourthFormGroup.value.firstCtrl as unknown as number;
    this.onAddExpense.emit(this.Expense);

    const groupId = this.Expense.groupId;
    this.groupMembersService.getAllMembersByIdGroup(groupId).subscribe((members: any[]) => {
      this.expenseService.getExpensesByGroupId(groupId).subscribe((expenses: any) => {
        const paymentAmount = this.Expense.amount / members.length;
        const expenseId = expenses.length;
        const groupOperation = new OperationEntity();

        members.forEach((member: any) => {
          const payment = new PaymentEntity();

          payment.description = this.firstFormGroup.value.firstCtrl as string;
          payment.amount = paymentAmount;
          payment.status = 0;
          payment.userId = member.userId;
          payment.expenseId = expenseId;

          this.paymentService.create(payment).subscribe();
          this.paymentService.getPaymentByUserId(member.userId).subscribe((payments: any) => {
            const paymentId = payments.length;

            groupOperation.expenseId = expenseId;
            groupOperation.paymentsId = paymentId;
            groupOperation.groupId = this.fourthFormGroup.value.firstCtrl as unknown as number;
            this.groupOperationService.create(groupOperation).subscribe();
          });
        });
      });
    });

    // redirect to expenses list
    this.router.navigate(['/expenses']);
  }

}
