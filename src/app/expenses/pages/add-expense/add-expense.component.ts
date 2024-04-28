import { Component, OnInit } from '@angular/core';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import { PartnerService } from '../../../pockets/services/Partner.service';
import { ExpensesEntity } from '../../model/expenses.entity';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit {
  private userId: number = 0;
  constructor(private partnerService: PartnerService, private expenseService: ExpensesService) { }
  public user: PartnerEntity = new PartnerEntity();
  ngOnInit(): void {
    this.partnerService.getAll().subscribe((partner: any) => {
      partner.forEach((element: any) => {
        if (element.id == this.userId) {
          this.user = element;
          console.log(this.user);
        }
      });
    });
  }

  onSubmit(expense: ExpensesEntity) {
    this.expenseService.create(expense).subscribe((expense: any) => {
      console.log(expense);
    });
  }
}
