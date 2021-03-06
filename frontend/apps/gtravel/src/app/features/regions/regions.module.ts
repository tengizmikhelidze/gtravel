import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionComponent } from './component/region.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { PipesHelperModule } from '../../../../../../libs/shared/tools/pipes/directives.module';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegionComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    SharedComponentsModule,
    PipesHelperModule,
    CarouselModule,
    RatingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class RegionsModule { }
