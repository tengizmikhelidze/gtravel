import { HttpClient } from '@angular/common/http';
import { EnvironmentConfigurationService } from '../../../../../core/src/lib/environment-manager';
import { BaseEntity, ResultList } from '@libs/models';
import { Observable } from 'rxjs';

export class BaseDataServiceService<T extends BaseEntity> {

  constructor(private httpClient: HttpClient,
              private environmentManager: EnvironmentConfigurationService) { }

  protected getList(url: string): Observable<ResultList<T>> {
    return this.httpClient.get<ResultList<T>>(this.environmentManager.readConfig().apiUrl + url)
  }

  protected getOne(url: string, slug: string): Observable<T>{
    return this.httpClient.get<T>(this.environmentManager.readConfig().apiUrl + url +'/' + slug)
  }

  protected travelScheduleBetween(url: string, startSlug: string, endSlug: string) {
    return this.httpClient.get<T>(this.environmentManager.readConfig().apiUrl + url +'/start/' + startSlug + '/end' + endSlug)
  }
}
