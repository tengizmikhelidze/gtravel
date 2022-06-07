import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionComponent } from './component/region.component';


@NgModule({
  declarations: [
    RegionComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule
  ]
})
export class RegionsModule { }
