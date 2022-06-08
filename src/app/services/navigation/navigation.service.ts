import {Injectable} from '@angular/core';
import {CrudAppService} from "../CrudAppService";
import {NavigationFullOutput} from "./dtos/NavigationFullOutput";
import {GetNavigationListInput} from "./dtos/GetNavigationListInput";
import {CreateNavigationInput} from "./dtos/CreateNavigationInput";
import {UpdateNavigationInput} from "./dtos/UpdateNavigationInput";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends CrudAppService<NavigationFullOutput, GetNavigationListInput, CreateNavigationInput, UpdateNavigationInput> {

  constructor(private httpClient: HttpClient) {
    super('/api/app/navigation', httpClient);
  }
}
