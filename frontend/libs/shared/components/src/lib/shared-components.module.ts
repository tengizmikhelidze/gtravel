import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputsComponent } from './components/custom-inputs/custom-inputs.component';
import {HeaderComponent} from "./components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeorgiaMapComponent } from './components/georgia-map/georgia-map.component';

const Components = [
  CustomInputsComponent,
  HeaderComponent,
  GeorgiaMapComponent
]

const ExternalModules = [
  FontAwesomeModule
]

@NgModule({
  imports: [
    CommonModule
    , ...ExternalModules
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ]
})
export class SharedComponentsModule {}
