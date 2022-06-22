import {Injectable} from '@angular/core';
import {CrudAppService} from "../CrudAppService";
import {HttpClient} from "@angular/common/http";
import {EnumerateFullOutput} from "./dtos/EnumerateFullOutput";
import {GetEnumerateListInput} from "./dtos/GetEnumerateListInput";
import {CreateEnumerateInput} from "./dtos/CreateEnumerateInput";
import {UpdateEnumerateInput} from "./dtos/UpdateEnumerateInput";

@Injectable({
  providedIn: 'root'
})
export class EnumerateService extends CrudAppService<EnumerateFullOutput, GetEnumerateListInput, CreateEnumerateInput, UpdateEnumerateInput> {

  constructor(private httpClient: HttpClient) {
    super("/api/app/enumerate", httpClient);
  }
}
