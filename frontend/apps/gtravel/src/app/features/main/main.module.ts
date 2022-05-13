import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';
import { SharedComponentsModule } from '@frontend/shared/components';
import { CarouselModule } from 'primeng/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const InternalModules = [
  MainRoutingModule,
  SharedComponentsModule,
];

const ExternalModules = [
  CarouselModule,
  FontAwesomeModule
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    ...ExternalModules,
    ...InternalModules
  ],
  bootstrap: [MainComponent],
})
export class MainModule {}
