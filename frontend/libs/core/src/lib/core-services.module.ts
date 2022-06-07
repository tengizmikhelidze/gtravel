import { NgModule } from '@angular/core';
import { EnvironmentManagerModule } from './environment-manager/environment-manager.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorInterceptor } from './interceptors/loading-interceptor.interceptor';
import { LoadingService } from '../../../shared/components/src/lib/services/loading.service';

@NgModule({
  imports: [
    EnvironmentManagerModule
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorInterceptor,
      multi: true
    },
  ]
})
export class CoreServicesModule {}
