import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpensesEntity } from '../../model/expenses.entity';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import {PaymentEntity} from "../../../payments/model/payment-entity";
import {PaymentService} from "../../../payments/services/payment.service";
import {GroupService} from "../../../group/services/group.service";
import {GroupMembersService} from "../../../group/services/group-members.service";

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
  constructor(private _formBuilder: FormBuilder, private router: Router,private paymentService: PaymentService, private groupMembersService: GroupMembersService) { }

  onSubmit() {
    this.Expense.name = this.firstFormGroup.value.firstCtrl as string;
    this.Expense.amount = this.thirdFormGroup.value.firstCtrl as unknown as number;
    this.Expense.userId = this.user.id;
    this.Expense.groupId = this.fourthFormGroup.value.firstCtrl as unknown as number;
    this.onAddExpense.emit(this.Expense);

    const groupId = this.Expense.groupId;
    this.groupMembersService.getAllMembersByIdGroup(groupId).subscribe((group: any) => {
      const members = group.members;
      const paymentAmount = this.Expense.amount / members.length;

      members.forEach((member: any) => {
        const payment = new PaymentEntity();
        payment.amount = paymentAmount;
        payment.status = 0;
        payment.userId = member.userId;
        payment.expenseId = this.Expense.id; // Esto debe actualizarse con el ID real del Expense

        this.paymentService.create(payment).subscribe();
      });
    });

    // redirect to expenses list
    this.router.navigate(['/expenses']);
  }

}
