import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { ExpensesEntity } from '../model/expenses.entity';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService extends BaseService<ExpensesEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/expenses';
  }

  // XD? Cuando hice esto
  getJoinedUserGroups(userId: number): Observable<any> {
    return this.http.get<any>(`${this.basePath}/groups/members/${userId}`, this.httpOptions);
  }

  getExpensesByGroupId(groupId: number): Observable<ExpensesEntity[]> {
    return this.http.get<ExpensesEntity[]>(`${this.resourcePath()}/groupId/${groupId}`, this.httpOptions);
  }

  getExpenses(): Observable<ExpensesEntity[]> {
    return this.http.get<ExpensesEntity[]>(this.resourcePath(), this.httpOptions);
  }

  getExpensesByUserId(userId: number): Observable<ExpensesEntity[]> {
    return this.http.get<ExpensesEntity[]>(`${this.resourcePath()}/userId/${userId}`, this.httpOptions);
  }

}


