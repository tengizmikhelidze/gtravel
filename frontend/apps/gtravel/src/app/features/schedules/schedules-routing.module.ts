import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './component/schedules.component';

export const routeRegionSlugParamKey = 'regionSlug'

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
