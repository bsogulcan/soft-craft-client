export class UpdateProjectDto {
  id: number;
  name: string;
  uniqueName: string;
  multiTenant: boolean;
  webAddress: string;
  port: number;
  logType: number;
}
