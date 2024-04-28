import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { ExpensesEntity } from '../model/expenses.entity';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService extends BaseService<ExpensesEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/expenses';
  }
}
