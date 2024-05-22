import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { GroupEntity } from '../../model/group.entity';

@Component({
  selector: 'app-page-group-details',
  templateUrl: './page-group-details.component.html',
  styleUrl: './page-group-details.component.css'
})
export class PageGroupDetailsComponent implements OnInit {
  idOfUser = 1;
  public id: number = 0;
  group: GroupEntity = new GroupEntity();
  public amountOfPayToYou: number = 0;
  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.url[1].path, 10);
    console.log(this.id);

    if (this.id) {
      this.groupService.getById(this.id).subscribe((group: any) => {
        this.group = group;
        console.log(this.group);
        this.calculateAmountToYou();
      });
    }
  }

  calculateAmountToYou() {
    let totalAmount = 0;
    this.group.paymentHistory.forEach((payment: any) => {
      if (payment.paidBy === this.idOfUser) {
        totalAmount += payment.amount;
      }
    });
    this.amountOfPayToYou = totalAmount;
    console.log(this.amountOfPayToYou);
  }
}
