import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpensesEntity } from '../../model/expenses.entity';
import { FormBuilder, Validators } from '@angular/forms';

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

  @Input() user: any;
  private Expense = new ExpensesEntity();
  @Output() onAddExpense: EventEmitter<ExpensesEntity> = new EventEmitter<ExpensesEntity>();
  constructor(private _formBuilder: FormBuilder) { }

  onSubmit() {
    this.Expense.id = Math.random().toString(36).substring(2);
    this.Expense.name = this.firstFormGroup.value.firstCtrl as string;
    this.Expense.date ? this.secondFormGroup.get('firstCtrl')?.value : new Date();
    this.Expense.amount = this.thirdFormGroup.value.firstCtrl as unknown as number;
    this.Expense.member = {
      id: this.user.id,
      name: this.user.name
    };
    let groupSelected = this.user.groups.find((group: { id: string | null | undefined; }) => group.id === this.fourthFormGroup.value.firstCtrl);
    this.Expense.group = groupSelected;
    this.onAddExpense.emit(this.Expense);
  }
}
