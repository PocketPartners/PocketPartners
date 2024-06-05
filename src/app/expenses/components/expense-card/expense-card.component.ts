import { Component, Input } from '@angular/core';
import { ExpensesEntity } from '../../model/expenses.entity';
import {ContactService} from "../../../contacts/services/contact.service";

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {
  @Input() expense: ExpensesEntity = new ExpensesEntity();
  user: any;

  constructor(private userService: ContactService) { }

  ngOnInit() {
    this.userService.getUserById(this.expense.userId).subscribe(user => {
      this.user = user;
    });
  }
}
