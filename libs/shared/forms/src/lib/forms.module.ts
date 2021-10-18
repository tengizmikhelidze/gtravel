import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicGroupComponent } from './components/dynamic-group/dynamic-group.component';
import { DynamicControlComponent } from './components/dynamic-control/dynamic-control.component';
import { ButtonModule } from 'primeng/button';

const inputComponents = [
  TextInputComponent
]

const dynamicComponents = [
  DynamicFormComponent,
  DynamicControlComponent,
  DynamicGroupComponent
]

const primengModules = [
  InputNumberModule,
  InputTextModule,
  ButtonModule
]

@NgModule({
  declarations: [
    ...inputComponents,
    ...dynamicComponents,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...primengModules
  ],
  exports: [
    ReactiveFormsModule,
    ...inputComponents,
    ...dynamicComponents,
  ],
})
export class FormsModule {}
