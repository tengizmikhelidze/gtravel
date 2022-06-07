import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './component/region.component';

export const routeRegionSlugParamKey = 'regionSlug'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':regionSlug',
        component: RegionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
