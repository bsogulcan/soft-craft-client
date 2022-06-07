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
}
