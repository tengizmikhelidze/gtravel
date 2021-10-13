import { APP_INITIALIZER, NgModule } from '@angular/core';
import { environmentConfigurationInitializer } from './factory/environment-configuration-initializer';
import { EnvironmentConfigurationService } from './services/environment-configuration.service';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: environmentConfigurationInitializer,
      multi: true,
      deps: [EnvironmentConfigurationService]
    }
  ]
})
export class EnvironmentManagerModule { }
