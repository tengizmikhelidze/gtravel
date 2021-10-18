import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputsComponent } from './components/custom-inputs/custom-inputs.component';

const components = [
  CustomInputsComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule {}
