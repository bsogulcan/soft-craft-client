import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private endPoint: string;

  constructor(private httpClient: HttpClient) {
    this.endPoint = '/api/app/project';
  }

  get() {
    return this.httpClient.get(environment.apiBaseUrl + this.endPoint);
  }


}
