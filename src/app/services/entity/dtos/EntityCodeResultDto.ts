export class EntityCodeResultDto {
  entityId: number;
  entityName: string;
  entityResult: string;
  dtoResult: DtoResultDto;
  repositoryResult: RepositoryResult;
  appServiceResult: AppServiceResult;
  configurationResult: string;
  typeScriptDtoResult: TypeScriptDtoResultDto;
  typeScriptServiceResult: string;
}

class DtoResultDto {
  fullOutput: string;
  partOutput: string;
  createInput: string;
  updateInput: string;
  getInput: string;
  deleteInput: string;
  dtosToDomainMapResult: string;
  domainToDtosMapResult: string;
}

export class RepositoryResult {
  iRepositoryResult: string;
  repositoryResult: string;
}

export class AppServiceResult {
  iAppServiceResult: string;
  appServiceResult: string;
  permissionNamesResult: string;
  authorizationResult: string;
}

export class TypeScriptDtoResultDto {
  fullOutput: string;
  partOutput: string;
  createInput: string;
  updateInput: string;
  getInput: string;
  deleteInput: string;
}

