import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreServicesModule } from '@frontend/core';
import { GtravelAuthModule } from './auth/gtravel-auth.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

const InternalModules = [
  HttpClientModule,
  AppRoutingModule,
  CoreServicesModule,
  GtravelAuthModule,
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...InternalModules
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
