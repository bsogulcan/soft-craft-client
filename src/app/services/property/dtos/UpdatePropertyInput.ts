import {PropertyType} from "../../enums/PropertyType";
import {RelationType} from "../../enums/RelationType";

export class UpdatePropertyInput {
  id: number;
  name: string;
  isNullable: boolean;
  displayName: string;
  type: PropertyType;
  entityId: number;
  isRelationalProperty: boolean;
  relationalEntityId: number;
  relationType: RelationType;
  toolTip: string;
  required: boolean;
  indexed: boolean;
  maxLength: number;
  unique: boolean;
}
