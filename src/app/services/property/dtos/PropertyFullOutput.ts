import {PropertyType} from "../../enums/PropertyType";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";
import {RelationType} from "../../enums/RelationType";
import {EnumerateFullOutput} from "../../enumerate/dtos/EnumerateFullOutput";

export class PropertyFullOutput {
  id: number;
  name: string;
  displayName: string;
  isNullable: boolean;
  type: PropertyType | undefined;
  entityId: number;
  entity: EntityFullOutput;
  isRelationalProperty: boolean;
  relationalEntityId: number | undefined;
  relationalEntity: EntityFullOutput | undefined;
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
