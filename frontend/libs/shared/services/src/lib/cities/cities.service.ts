import { Injectable } from '@angular/core';
import { City, Region, ResultList } from '@libs/models';
import { BaseDataServiceService } from '../data/base-data-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';

@Injectable({
  providedIn: 'root'
})
export class CitiesService extends BaseDataServiceService<City>{
  constructor(httpClient: HttpClient,
              environmentManager: EnvironmentConfigurationService) {
    super(httpClient, environmentManager);
  }
  getAll(): Observable<ResultList<City>> {
    return this.getList('cities')
  }
  getOneWithSlug(slug: string) : Observable<City>{
    return this.getOne('cities', slug)
  }
}
