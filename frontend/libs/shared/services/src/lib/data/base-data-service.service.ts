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
}
