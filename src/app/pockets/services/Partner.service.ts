import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {PartnerEntity} from "../model/partnerEntity";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseService<PartnerEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/chartData';
    this.resourceEndpoint = '/users';
  }

  getAllChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.resourcePath(), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
