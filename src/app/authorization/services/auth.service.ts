import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { PartnerEntity } from '../../pockets/model/partnerEntity';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { ɵparseCookieValue } from '@angular/common'; // Import the missing function

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<PartnerEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://my-json-server.typicode.com/Diego22rct/poketpartners-db';
    this.resourceEndpoint = '/users';
  }

  getByEmail(email: string) {
    console.log(this.basePath + this.resourceEndpoint + '?email=' + email);
    return this.http.get<PartnerEntity>('?email=' + email, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  login(email: string, password: string) {
    console.log(this.basePath + this.resourceEndpoint + '?email=' + email + '&password=' + password);
    return this.http.get<PartnerEntity>('?email=' + email + '&password=' + password, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  logout() {
    ɵparseCookieValue('user', '');
  }

  register(partner: any) {
    return this.http.post(this.basePath + this.resourceEndpoint, partner, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}