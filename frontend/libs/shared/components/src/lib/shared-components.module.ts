import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputsComponent } from './components/custom-inputs/custom-inputs.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeorgiaMapComponent } from './components/georgia-map/georgia-map.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {AutoCompleteModule} from 'primeng-lts/autocomplete';
import { FormsModule } from '@angular/forms';

const Components = [
  CustomInputsComponent,
  HeaderComponent,
  GeorgiaMapComponent,
  CalendarComponent,
  FooterComponent
]

const ExternalModules = [
  FontAwesomeModule,
  AutoCompleteModule
]

const Providers = [
]

@NgModule({
  imports: [
    CommonModule,
    ...ExternalModules, RouterModule, FormsModule
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
