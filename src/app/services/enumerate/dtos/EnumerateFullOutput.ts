import {ProjectDto} from "../../projects/dtos/ProjectDto";
import {EnumerateValueFullOutput} from "../../enumerate-value/dtos/EnumerateValueFullOutput";

export class EnumerateFullOutput {
  id: number;
  projectId: number;
  project: ProjectDto;
  name: string;
  displayName: string;
  enumerateValues: EnumerateValueFullOutput[];
}
