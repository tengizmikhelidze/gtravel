import { Component } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';
import { SchedulesService } from '../../../../../../../libs/shared/services/src/lib/schedules/schedules.service';
import { TravelSchedule } from '../../../../../../../libs/shared/models/schedule.interface';
import { TransportType } from '@libs/models';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'schedules-component',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  readonly arrow = faArrowAltCircleRight
  loading: boolean = false;
  endDestination: TravelSchedule;
  endDestinationAutoComplete: TravelSchedule[] = [];
  endDestinationAutoCompleteFiltered: TravelSchedule[] = [];
  backgroundImg: string = this.getBackgroundImage()

  getBackgroundImage(transportType?: TransportType): string {
    if(transportType){
      if(transportType === TransportType.Airplane){
        return this.environmentManager.readConfig().baseHref + `./assets/images/transport/airplane.jpg`
      } else if(transportType === TransportType.Bus){
        return this.environmentManager.readConfig().baseHref + `./assets/images/transport/bus.jpg`
      } else if(transportType === TransportType.Train){
        return this.environmentManager.readConfig().baseHref + `./assets/images/transport/train.jpg`
      } else return this.environmentManager.readConfig().baseHref + `./assets/images/nature/tickets.jpg`
    } else return this.environmentManager.readConfig().baseHref + `./assets/images/nature/tickets.jpg`
  };

  constructor(private scheduleService: SchedulesService,
              private environmentManager: EnvironmentConfigurationService) {
    this.loading = true;
    this.scheduleService.getAll().subscribe(data=>{
      this.endDestinationAutoComplete = this.getEndDestinationsWithoutTbilisi(data.items);
      this.endDestinationAutoCompleteFiltered = this.endDestinationAutoComplete;
      this.loading = false;
    })
  }

  getEndDestinationsWithoutTbilisi(data: TravelSchedule[]): TravelSchedule[] {
    return data.filter(schedule=>schedule.endDestination !== 'თბილისი')
  }

  filterAutocomplete($event) {
    this.endDestinationAutoCompleteFiltered = this.endDestinationAutoComplete.filter(s=>s.endDestination.includes($event.query))
  }

  submitDestination() {
    this.backgroundImg = this.getBackgroundImage(this.endDestination.type)
  }
}
