export class TypeScriptComponentResultDto {
  componentTsStringify: string;
  componentHtmlStringify: string;
  componentCssStringify: string;
}

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
  typeScriptComponentResult: TypeScriptComponentResultDto;
  typeScriptCreateComponentResult: TypeScriptComponentResultDto;
  typeScriptEditComponentResult: TypeScriptComponentResultDto;
}

export class DtoResultDto {
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

