import {PropertyType} from "../../enums/PropertyType";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";

export class CreatePropertyInput {
  name: string;
  isNullable: boolean;
  displayName: string;
  type: PropertyType
  entityId: number;
  isRelationalProperty: boolean;
  relationalEntityId: number;
  toolTip: string;
  required: boolean;
  indexed: boolean;
  maxLength: number;
  unique: boolean;
}
