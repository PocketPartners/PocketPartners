import { Component, Input } from '@angular/core';
import { ExpensesEntity } from '../../model/expenses.entity';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {
  @Input() expense: ExpensesEntity = new ExpensesEntity();
  constructor() { }
}
