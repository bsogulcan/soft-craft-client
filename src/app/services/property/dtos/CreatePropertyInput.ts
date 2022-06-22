import {PropertyType} from "../../enums/PropertyType";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";
import {RelationType} from "../../enums/RelationType";
import {EnumerateFullOutput} from "../../enumerate/dtos/EnumerateFullOutput";

export class CreatePropertyInput {
  name: string;
  isNullable: boolean;
  displayName: string;
  type: PropertyType | undefined;
  entityId: number;
  isRelationalProperty: boolean;
  relationalEntityId: number | undefined;
  relationType: RelationType;
  toolTip: string;
  required: boolean;
  indexed: boolean;
  maxLength: number;
  unique: boolean;
  isEnumProperty: boolean;
  enumerateId: number | undefined;
  enumerate: EnumerateFullOutput;
}
