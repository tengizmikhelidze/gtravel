import { Injectable } from '@angular/core';
import { Hotel, ResultList } from '@libs/models';
import { BaseDataServiceService } from '../data/base-data-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';

@Injectable({
  providedIn: 'root'
})
export class HotelsService extends BaseDataServiceService<Hotel>{
  constructor(httpClient: HttpClient,
              environmentManager: EnvironmentConfigurationService) {
    super(httpClient, environmentManager);
  }
  getAll(): Observable<ResultList<Hotel>> {
    return this.getList('hotels')
  }
  getOneWithSlug(slug: string) : Observable<Hotel>{
    return this.getOne('hotel', slug)
  }
}
