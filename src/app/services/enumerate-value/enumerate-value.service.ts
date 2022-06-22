import {Injectable} from '@angular/core';
import {CrudAppService} from "../CrudAppService";
import {EnumerateFullOutput} from "../enumerate/dtos/EnumerateFullOutput";
import {GetEnumerateListInput} from "../enumerate/dtos/GetEnumerateListInput";
import {CreateEnumerateInput} from "../enumerate/dtos/CreateEnumerateInput";
import {UpdateEnumerateInput} from "../enumerate/dtos/UpdateEnumerateInput";
import {HttpClient} from "@angular/common/http";
import {EnumerateValueFullOutput} from "./dtos/EnumerateValueFullOutput";
import {GetEnumerateValueListInput} from "./dtos/GetEnumerateValueListInput";
import {CreateEnumerateValueInput} from "./dtos/CreateEnumerateValueInput";
import {UpdateEnumerateValueInput} from "./dtos/UpdateEnumerateValueInput";

@Injectable({
  providedIn: 'root'
})
export class EnumerateValueService extends CrudAppService<EnumerateValueFullOutput, GetEnumerateValueListInput, CreateEnumerateValueInput, UpdateEnumerateValueInput> {

  constructor(private httpClient: HttpClient) {
    super("/api/app/enumerate-value", httpClient);
  }
}
