import {EnumerateFullOutput} from "../../enumerate/dtos/EnumerateFullOutput";

export class EnumerateValueFullOutput {
  id: number;
  enumerateId: number;
  name: string;
  displayName: string;
  value: number;
  enumerate: EnumerateFullOutput;
}
