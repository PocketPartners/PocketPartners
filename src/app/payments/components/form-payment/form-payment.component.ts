import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PaymentEntity} from "../../model/payment-entity";
import {PartnerEntity} from "../../../pockets/model/partnerEntity";
import {ExpensesEntity} from "../../../expenses/model/expenses.entity";

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrl: './form-payment.component.css'
})
export class FormPaymentComponent {
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
  @Input() pendingPayments: any;
  private Payment = new PaymentEntity();
  @Output() onAddExpense: EventEmitter<ExpensesEntity> = new EventEmitter<ExpensesEntity>();
  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.Payment.id = Math.random()
    this.Payment.description = this.firstFormGroup.value.firstCtrl as string;
    this.Payment.amount = this.thirdFormGroup.value.firstCtrl as unknown as number;
    this.Payment.userId = this.user.id;

    // redirect to payments list
    this.router.navigate(['/outgoing']);
  }
}
