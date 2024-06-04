import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../shared/services/base.service";
import { PartnerEntity } from "../model/partnerEntity";
import { catchError, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseService<PartnerEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  // Method to get a partner by ID
  getPartnerById(id: number): Observable<PartnerEntity> {
    return this.http.get<PartnerEntity>(`${this.resourcePath()}/${id}`, this.httpOptions);
  }
}
