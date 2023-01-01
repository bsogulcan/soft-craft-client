import {TenantType} from "../../enums/TenantType";
import {PrimaryKeyType} from "../../enums/PrimaryKeyType";

export class CreateEntityInput {
  primaryKeyType: PrimaryKeyType;
  name: string;
  displayName: string;
  isFullAudited: boolean = true;
  tenantType: TenantType;
  projectId: number;
}
