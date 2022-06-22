import {Injectable} from '@angular/core';
import {CrudAppService} from "../CrudAppService";
import {PropertyFullOutput} from "./dtos/PropertyFullOutput";
import {GetPropertyListInput} from "./dtos/GetPropertyListInput";
import {CreatePropertyInput} from "./dtos/CreatePropertyInput";
import {UpdatePropertyInput} from "./dtos/UpdatePropertyInput";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends CrudAppService<PropertyFullOutput, GetPropertyListInput, CreatePropertyInput, UpdatePropertyInput> {

  constructor(private httpClient: HttpClient) {
    super("/api/app/property", httpClient);
  }
}
