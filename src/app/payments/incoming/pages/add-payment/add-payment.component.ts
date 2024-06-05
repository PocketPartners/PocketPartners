import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../../../services/payment.service";
import {PartnerService} from "../../../../pockets/services/Partner.service";
import {PartnerEntity} from "../../../../pockets/model/partnerEntity";
import {PaymentEntity} from "../../../model/payment-entity";

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent implements OnInit {
  private userId: number = 0;
  constructor(private partnerService: PartnerService, private paymentService: PaymentService) { }
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

  onSubmit(payment: PaymentEntity) {
    this.paymentService.create(payment).subscribe((payment: any) => {
      console.log(payment);
    });
  }
}
