import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {PartnerEntity} from "../model/partnerEntity";

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseService<PartnerEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/home';
  }
}
