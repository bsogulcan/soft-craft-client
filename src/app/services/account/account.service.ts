import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endPoint: string;

  constructor(private httpClient: HttpClient) {
    this.endPoint = '/api/account/my-profile';
  }

  myProfile() {
    return this.httpClient.get(environment.apiBaseUrl + this.endPoint);
  }
}
