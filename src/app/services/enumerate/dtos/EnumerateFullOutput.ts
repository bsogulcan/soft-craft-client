import {ProjectDto} from "../../projects/dtos/ProjectDto";

export class EnumerateFullOutput {
  id: number;
  projectId: number;
  project: ProjectDto;
  name: string;
  displayName: string;
}
