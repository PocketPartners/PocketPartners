import { Component, OnInit } from '@angular/core';
import { GroupEntity } from "../../../group/model/group.entity";
import { GroupService } from "../../../group/services/group.service";
import { PaymentEntity } from "../../model/payment-entity";
import { ContactEntity } from "../../../contacts/model/contact.entity";
import { GroupOperationsService } from "../../../group/services/group-operations.service";
import { PaymentService } from "../../services/payment.service";
import { ContactService } from "../../../contacts/services/contact.service";
import { OperationEntity } from "../../../group/model/operation-entity";

@Component({
  selector: 'app-pages',
  templateUrl: './outgoing.component.html',
  styleUrl: './outgoing.component.css'
})
export class OutgoingComponent implements OnInit {
  public groups: GroupEntity[] = [];
  public groupPayments: { [key: number]: PaymentEntity[] } = {};
  public users: { [key: number]: ContactEntity } = {};
  dataLoaded: Promise<boolean> = new Promise((resolve) => resolve(false));

  constructor(private groupService: GroupService, private groupOperations: GroupOperationsService, private paymentService: PaymentService, private userService: ContactService) { }

  getAllGroups() {
    this.groupService.getAll()
      .subscribe((groups: any) => {
        this.groups = groups;
        this.groups.forEach(group => {
          this.getAllGroupOperationsByGroupId(group.id);
        });
      });
  }

  getAllGroupOperationsByGroupId(groupId: number) {
    this.groupOperations.getAllGroupOperationsByGroupId(groupId)
      .subscribe((operations: OperationEntity[]) => {
        operations.forEach(operation => {
          this.getPaymentById(groupId, operation.paymentsId);
        });
      });
  }

  getPaymentById(groupId: number, paymentId: number) {
    this.paymentService.getPaymentById(paymentId)
      .subscribe((payment: PaymentEntity) => {
        if (!this.groupPayments[groupId]) {
          this.groupPayments[groupId] = [];
        }
        this.groupPayments[groupId].push(payment);
        this.getUserById(payment.userId);
      });
  }

  getUserById(userId: number) {
    if (!this.users[userId]) {
      this.userService.getUserById(userId)
        .subscribe((user: ContactEntity) => {
          console.log("User: ", user);
          this.users[userId] = user;
          this.dataLoaded.finally(() => {
            this.dataLoaded = new Promise((resolve) => resolve(true));
          });
        });
    }
  }

  ngOnInit() {
    this.getAllGroups();
  }
}
