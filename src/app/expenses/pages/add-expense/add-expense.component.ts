import { Component, OnInit } from '@angular/core';
import { PartnerEntity } from '../../../pockets/model/partnerEntity';
import { PartnerService } from '../../../pockets/services/Partner.service';
import { ExpensesEntity } from '../../model/expenses.entity';
import { ExpensesService } from '../../services/expenses.service';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit {
  private userId: any;
  joinedGroups: any;
  constructor(private partnerService: PartnerService, private expenseService: ExpensesService, private authenticationService: AuthenticationService) { }
  user: PartnerEntity = new PartnerEntity();
  ngOnInit(): void {
    this.userId = this.authenticationService.currentUserId.subscribe((userId: any) => {
      this.userId = userId;
      this.partnerService.getPartnerById(this.userId).subscribe((partner: any) => {
        this.user = partner;
        this.expenseService.getJoinedUserGroups(this.user.id).subscribe((groups: any) => {
          this.joinedGroups = groups;
        });
      });
    });
  }

  onSubmit(expense: ExpensesEntity) {
    // delete un necessary properties
    let expenseClean: any = { ...expense };
    delete expenseClean.createdAt;
    delete expenseClean.updatedAt;
    this.expenseService.create(expense).subscribe();
  }
}
