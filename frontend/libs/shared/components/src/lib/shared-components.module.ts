import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputsComponent } from './components/custom-inputs/custom-inputs.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeorgiaMapComponent } from './components/georgia-map/georgia-map.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoadingComponent } from './components/loading/loading.component';

const Components = [
  CustomInputsComponent,
  HeaderComponent,
  GeorgiaMapComponent,
  CalendarComponent
]

const ExternalModules = [
  FontAwesomeModule
]

const Providers = [
]

@NgModule({
  imports: [
    CommonModule
    , ...ExternalModules
  ],
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  providers: [
  ]
})
export class SharedComponentsModule {}
