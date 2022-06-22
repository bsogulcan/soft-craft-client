import {TenantType} from "../../enums/TenantType";
import {PrimaryKeyType} from "../../enums/PrimaryKeyType";

export class UpdateEntityInput {
  id: number;
  primaryKeyType: PrimaryKeyType;
  name: string;
  displayName: string;
  isFullAudited: boolean;
  tenantType: TenantType;
  projectId: number;

}
