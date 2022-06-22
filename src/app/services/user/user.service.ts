import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint: string;

  constructor(private httpClient: HttpClient) {
    this.endPoint = '/api/identity/users';
  }

  getUserById(id: string) {
    return this.httpClient.get(environment.apiBaseUrl + this.endPoint + '/' + id);
  }

}
