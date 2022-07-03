import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './component/hotels.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { HotelModalComponent } from './hotel-modal/hotel-modal.component';


@NgModule({
  declarations: [
    HotelsComponent,
    HotelModalComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    RatingModule,
    FormsModule
  ]
})
export class HotelsModule { }
