import {PropertyType} from "../../enums/PropertyType";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";
import {RelationType} from "../../enums/RelationType";

export class CreatePropertyInput {
  name: string;
  isNullable: boolean;
  displayName: string;
  type: PropertyType
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
