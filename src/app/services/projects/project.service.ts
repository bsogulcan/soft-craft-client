import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateProjectDto} from "./dtos/CreateProjectDto";
import {CrudAppService} from "../CrudAppService";
import {ProjectDto} from "./dtos/ProjectDto";
import {UpdateProjectDto} from "./dtos/UpdateProjectDto";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudAppService<ProjectDto, undefined, CreateProjectDto, UpdateProjectDto> {
  constructor(private httpClient: HttpClient) {
    super("/api/app/project", httpClient);
  }
}
