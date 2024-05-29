import { GroupEntity } from '../model/group.entity';
import { BaseService } from '../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BaseService<GroupEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/groups';
  }

  getById(id: number) {
    return this.http.get<GroupEntity>(`${this.resourcePath()}/${id}`, this.httpOptions);
  }

  getPaymentDetails(): Observable<any[]> {
    return this.http.get<any>(this.resourcePath()).pipe(
      map((response: any) => {
        const paymentDetails: any[] = [];

        response.groups.forEach((groupData: any) => {
          groupData.paymentHistory.forEach((payment: any) => {
            payment.membersPaying.forEach((memberPaying: any) => { // Accede a membersPaying
              paymentDetails.push({
                month: new Date(payment.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric', day: 'numeric' }),
                description: payment.description,
                amount: payment.amount,
                user: groupData.members.find((member: any) => member.id === memberPaying.userId).name
              });
            });
          });
        });

        return paymentDetails;
      })
    );
  }
}
