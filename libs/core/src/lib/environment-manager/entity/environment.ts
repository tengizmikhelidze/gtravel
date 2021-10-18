export interface Environment {
  apiUrl? : string;
  tokenExpireInSeconds? : number;
  baseHref?: string,
  version?: string,
  logoutCallbackUrl?: string
}

export interface LocalEnvironmentSettings {
  fullyMockedMode?: boolean,
  mockUrl?: string;
  production?: boolean;
  mock?: boolean;
}

export type MergedEnvironment = Environment & LocalEnvironmentSettings & {[key : string] : any}
