import {TenantType} from "../../enums/TenantType";
import {ProjectDto} from "../../projects/dtos/ProjectDto";
import {PrimaryKeyType} from "../../enums/PrimaryKeyType";

export class EntityFullOutput {
  id: number;
  primaryKeyType: PrimaryKeyType;
  name: string;
  displayName: string;
  isFullAudited: boolean;
  tenantType: TenantType;
  projectId: number;
  project: ProjectDto;
  isDefaultAbpEntity: boolean;
}
