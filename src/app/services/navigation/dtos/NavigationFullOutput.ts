import {ProjectDto} from "../../projects/dtos/ProjectDto";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";
import {NavigationPartOutput} from "./NavigationPartOutput";

export class NavigationFullOutput {
  id: number;
  caption: string;
  index: number;
  visible: boolean;
  parentNavigationId: number | null;
  parentNavigation: NavigationPartOutput;
  icon: string;
  projectId: number | null;
  project: ProjectDto;
  entityId: number | null;
  entity: EntityFullOutput;
  navigations: NavigationFullOutput[];
}
