import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateProjectDto} from "./dtos/CreateProjectDto";
import {CrudAppService} from "../CrudAppService";
import {ProjectDto} from "./dtos/ProjectDto";
import {UpdateProjectDto} from "./dtos/UpdateProjectDto";
import {GenerateProjectInput} from "./dtos/GenerateProjectInput";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudAppService<ProjectDto, undefined, CreateProjectDto, UpdateProjectDto> {
  constructor(private httpClient: HttpClient) {
    super("/api/app/project", httpClient);
  }

  generate(generateInput: GenerateProjectInput) {
    return this.httpClient.post(environment.apiBaseUrl + '/api/app/project/generate', generateInput);
  }

  downloadProjectZip(projectId: number, projectName: string) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };

    return this.httpClient.get<Blob>(environment.apiBaseUrl + '/api/DownloadProject/GetProjectZipFile?projectId=' + projectId + '&projectName=' + projectName, httpOptions);
  }
}
