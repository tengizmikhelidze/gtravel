import { Injectable } from '@angular/core';
import { Region, ResultList } from '@libs/models';
import { BaseDataServiceService } from '../data/base-data-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends BaseDataServiceService<Region>{
  constructor(httpClient: HttpClient,
              environmentManager: EnvironmentConfigurationService) {
    super(httpClient, environmentManager);
  }
  getAll(): Observable<ResultList<Region>> {
    return this.getList('regions')
  }
}
