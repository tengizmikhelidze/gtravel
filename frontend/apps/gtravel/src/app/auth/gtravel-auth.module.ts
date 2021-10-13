import { NgModule } from '@angular/core';
import { AuthModule } from '@frontend/shared/auth';
import { GtravelAuthConfigService } from './services/gtravel-auth-config.service';


@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot(GtravelAuthConfigService)
  ]
})
export class GtravelAuthModule { }
