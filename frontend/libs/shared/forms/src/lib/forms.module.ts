import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';

const inputComponents = [
  TextInputComponent
]

const primengModules = [
  InputNumberModule,
  InputTextModule
]

@NgModule({
  declarations: [
    ...inputComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...primengModules
  ],
  exports: [
    ReactiveFormsModule
  ],
  declarations: [
    TextInputComponent
  ]
})
export class FormsModule {}
