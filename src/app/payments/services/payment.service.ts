import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {PaymentEntity} from "../model/payment-entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService<PaymentEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/payments';
  }

  getPaymentById(paymentId: any) {
    return this.http.get<any>(`${this.resourcePath()}/${paymentId}`, this.httpOptions)
  }
}
