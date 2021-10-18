import { AuthConfigService } from '../../../../../../libs/shared/auth/src/lib/services/auth-config.service';
import { AuthConfig } from '../../../../../../libs/shared/auth/src/lib/entity/auth-config';
import { EnvironmentConfigurationService } from '../../../../../../libs/core/src/lib/environment-manager';
import { Injectable } from '@angular/core';

@Injectable()
export class GtravelAuthConfigService extends AuthConfigService{
  constructor(private environmentService: EnvironmentConfigurationService) {
    super();
  }

  get(): AuthConfig | undefined {
    return this.environmentService.readConfig() ?
      {
        apiLoginUrl: `${this.environmentService.readConfig().apiUrl}/auth/login`,
        apiLogoutUrl: `${this.environmentService.readConfig().apiUrl}/auth/logout`,
      } : undefined
  }
}
