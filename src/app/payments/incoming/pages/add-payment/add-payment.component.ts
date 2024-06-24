import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../../../services/payment.service";
import {PartnerService} from "../../../../pockets/services/Partner.service";
import {PartnerEntity} from "../../../../pockets/model/partnerEntity";
import {PaymentEntity} from "../../../model/payment-entity";
import {ExpensesService} from "../../../../expenses/services/expenses.service";
import {AuthenticationService} from "../../../../iam/services/authentication.service";
import {GroupService} from "../../../../group/services/group.service";
import {ExpensesEntity} from "../../../../expenses/model/expenses.entity";
import {GroupOperationsService} from "../../../../group/services/group-operations.service";

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent implements OnInit {
  userId: number = 0;
  joinedGroups: any = [];
  pendingPayments: any = [];
  constructor(
    private partnerService: PartnerService,
    private paymentService: PaymentService,
    private authenticationService: AuthenticationService,
    private groupService: GroupService,
    private groupOperationService: GroupOperationsService,
  ) { }
  user: PartnerEntity = new PartnerEntity();

  ngOnInit(): void {
    this.authenticationService.currentUserId.subscribe((userId: any) => {
      this.userId = userId;
      this.partnerService.getPartnerById(userId).subscribe((partner: any) => {
        this.paymentService.getJoinedUserGroups(userId).subscribe((groups: any) => {
          groups.forEach((group: any) => {
            this.groupService.getById(group.groupId).subscribe((group: any) => {
              this.joinedGroups.push(group);
              console.log(this.joinedGroups);
            });
            this.groupOperationService.getAllGroupOperationsByGroupId(group.groupId).subscribe((groupOperation: any) => {
              this.paymentService.getPaymentByUserIdAndStatus(this.userId, groupOperation.status="PENDING").subscribe((payment: any) => {
                if(groupOperation.status == "PENDING") {
                    this.pendingPayments.push(payment);
                    console.log(this.pendingPayments);
                }
              });
            });
          });
        });
      });
    });
  }

  onSubmit(payment: PaymentEntity): void {
    // delete un necessary properties
    let paymentClean: any = { ...payment };
    paymentClean.userId = this.userId;
    delete paymentClean.createdAt;
    delete paymentClean.updatedAt;
    this.paymentService.create(paymentClean).subscribe();
  }
}
