import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './component/cities.component';

export const routeCitySlugParamKey = 'citySlug'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':citySlug',
        component: CitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
