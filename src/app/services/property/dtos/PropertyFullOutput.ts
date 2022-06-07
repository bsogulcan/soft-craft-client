import {PropertyType} from "../../enums/PropertyType";
import {EntityFullOutput} from "../../entity/dtos/EntityFullOutput";

export class PropertyFullOutput {
  id: number;
  name: string;
  displayName: string;
  isNullable: boolean;
  type: PropertyType
  entityId: number;
  entity: EntityFullOutput;
  isRelationalProperty: boolean;
  relationalEntityId: number;
  relationalEntity: EntityFullOutput | undefined;
}
