import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfigService } from './services/auth-config.service';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
})
export class AuthModule {
  static forRoot<T>(authConfigService: Type<T>): ModuleWithProviders<AuthModule>{
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthConfigService, useClass: authConfigService
        }
      ]
    }
  }
}
