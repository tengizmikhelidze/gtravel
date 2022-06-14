import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './component/dishes.component';
import { SharedComponentsModule } from '@frontend/shared/components';


@NgModule({
  declarations: [
    DishesComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    SharedComponentsModule
  ]
})
export class DishesModule { }
