import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './component/dishes.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DishModalComponent } from './dish-modal/dish-modal.component';


@NgModule({
  declarations: [
    DishesComponent,
    DishModalComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    RatingModule,
    FormsModule
  ]
})
export class DishesModule { }
