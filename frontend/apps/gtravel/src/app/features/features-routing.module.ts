import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../../../../../libs/shared/components/src/lib/components/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>
      import('./main/main.module').then((m)=>m.MainModule)
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'regions',
    loadChildren: ()=>
      import('./regions/regions.module').then((m)=>m.RegionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
