import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {GroupEntity} from "../model/group.entity";

@Injectable({
  providedIn: 'root'
})
export class GroupOperationsService extends BaseService<GroupEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/groupOperations';
  }
  getExpensesByGroupId(id: number) {
    return this.http.get<GroupEntity>(`${this.resourcePath()}/groupId/${id}`, this.httpOptions);
  }
}
