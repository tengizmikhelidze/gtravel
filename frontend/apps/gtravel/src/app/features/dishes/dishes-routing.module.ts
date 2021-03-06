import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './component/dishes.component';
import { DishModalComponent } from './dish-modal/dish-modal.component';

export const routeDishSlugParamKey = 'dishSlug'

const routes: Routes = [
  {
    path: '',
    component: DishesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
