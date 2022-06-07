import {PropertyType} from "../../enums/PropertyType";

export class UpdatePropertyInput {
  id: number;
  name: string;
  isNullable: boolean;
  displayName: string;
  type: PropertyType;
  entityId: number;
  isRelationalProperty: boolean;
  relationalEntityId: number;
  toolTip: string;
  required: boolean;
  indexed: boolean;
  maxLength: number;
  unique: boolean;
}
