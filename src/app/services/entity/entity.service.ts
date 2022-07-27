import {CrudAppService} from "../CrudAppService";
import {EntityFullOutput} from "./dtos/EntityFullOutput";
import {CreateEntityInput} from "./dtos/CreateEntityInput";
import {UpdateEntityInput} from "./dtos/UpdateEntityInput";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {GetEntityListInput} from "./dtos/GetEntityListInput";
import {environment} from "../../../environments/environment";
import {EntityCodeResultDto} from "./dtos/EntityCodeResultDto";

@Injectable({
  providedIn: 'root'
})
export class EntityService extends CrudAppService<EntityFullOutput, GetEntityListInput, CreateEntityInput, UpdateEntityInput> {
  constructor(private httpClient: HttpClient) {
    super("/api/app/entity", httpClient);
  }

  getCodeResult(id: any) {
    return this.http.get<EntityCodeResultDto>(environment.apiBaseUrl + this.endPoint + '/' + id + '/code-result');
  }
}
