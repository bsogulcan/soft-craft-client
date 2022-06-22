import {HttpClient} from "@angular/common/http";
import {Inject} from "@angular/core";
import {environment} from "../../environments/environment";
import {ResponseTypeList} from "./ResponseTypeList";

export class CrudAppService<FullOutputType, GetListInput, CreateInputType, UpdateInputType> {
  endPoint: string;
  http: HttpClient;

  constructor(endPoint: string, @Inject(HttpClient) http: HttpClient) {
    this.endPoint = endPoint;
    this.http = http;
  }

  getAll(input?: GetListInput | any) {
    let queryString = '?';
    if (input) {
      let propertyNames = Object.getOwnPropertyNames(input);
      propertyNames.forEach((property: any) => {
        if (input[property]) {
          queryString += property + '=' + input[property];
        }
      });
    }

    console.log(queryString);
    return this.http.get<ResponseTypeList<FullOutputType>>(environment.apiBaseUrl + this.endPoint + queryString);
  }

  get(id: any) {
    return this.http.get<FullOutputType>(environment.apiBaseUrl + this.endPoint + '/' + id);
  }

  create(input: CreateInputType) {
    return this.http.post<FullOutputType>(environment.apiBaseUrl + this.endPoint, input);
  }

  update(id: any, input: UpdateInputType) {
    return this.http.put<FullOutputType>(environment.apiBaseUrl + this.endPoint + '/' + id, input);
  }

  delete(id: any) {
    return this.http.delete(environment.apiBaseUrl + this.endPoint + '/' + id);
  }
}
