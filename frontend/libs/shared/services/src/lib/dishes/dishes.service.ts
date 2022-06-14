import { Injectable } from '@angular/core';
import { City, Dish, Region, ResultList } from '@libs/models';
import { BaseDataServiceService } from '../data/base-data-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';

@Injectable({
  providedIn: 'root'
})
export class DishesService extends BaseDataServiceService<Dish>{
  constructor(httpClient: HttpClient,
              environmentManager: EnvironmentConfigurationService) {
    super(httpClient, environmentManager);
  }
  getAll(): Observable<ResultList<Dish>> {
    return this.getList('dishes')
  }
  getOneWithSlug(slug: string) : Observable<Dish>{
    return this.getOne('dishes', slug)
  }
}
