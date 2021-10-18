import { EnvironmentConfigurationService } from '../services/environment-configuration.service';

export const environmentConfigurationInitializer = (configService: EnvironmentConfigurationService)=>{
  return()=>{
    return configService.setConfig();
  }
}
