import { Injectable } from '@angular/core';
import { City, Region, ResultList } from '@libs/models';
import { BaseDataServiceService } from '../data/base-data-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';
import { TravelSchedule } from '../../../../models/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService extends BaseDataServiceService<TravelSchedule>{
  constructor(httpClient: HttpClient,
              environmentManager: EnvironmentConfigurationService) {
    super(httpClient, environmentManager);
  }
  getAll(): Observable<ResultList<TravelSchedule>> {
    return this.getList('travel-schedules')
  }
  getOneWithSlug(slug: string) : Observable<TravelSchedule>{
    return this.getOne('travel-schedules', slug)
  }
  getStartAndEndDestination(start: string, end: string): Observable<TravelSchedule>{
    return this.travelScheduleBetween('travel-schedules', start, end)
  }
}
