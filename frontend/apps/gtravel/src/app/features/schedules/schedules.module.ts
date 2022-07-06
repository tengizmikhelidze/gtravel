import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './component/schedules.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { PipesHelperModule } from '../../../../../../libs/shared/tools/pipes/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    SharedComponentsModule,
    AutoCompleteModule,
    FormsModule,
    PipesHelperModule,
    FontAwesomeModule
  ]
})
export class SchedulesModule { }
