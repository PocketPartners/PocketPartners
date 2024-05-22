import { GroupEntity } from '../model/group.entity';
import { BaseService } from '../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
}
