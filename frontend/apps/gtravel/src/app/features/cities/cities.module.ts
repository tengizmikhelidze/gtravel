import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './component/cities.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { PipesHelperModule } from '../../../../../../libs/shared/tools/pipes/directives.module';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    SharedComponentsModule,
    PipesHelperModule,
    CarouselModule,
    RatingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class CitiesModule { }
