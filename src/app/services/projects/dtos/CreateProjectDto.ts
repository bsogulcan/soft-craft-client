export class CreateProjectDto {
  name: string;
  uniqueName: string;
  multiTenant: boolean;
  webAddress: string;
  port: number = 0;
  logType: number;
}
