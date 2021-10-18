import { Inject, Injectable } from '@angular/core';
import { MergedEnvironment } from '../entity/environment';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigurationService {
  private mergedEnvironment: MergedEnvironment;
  private $mergedEnvironment = new ReplaySubject<MergedEnvironment>();
  mergedEnvironment$ = this.$mergedEnvironment.pipe(distinctUntilChanged());

  constructor(private httpClient: HttpClient,
              @Inject('env') private environment: MergedEnvironment) {
  }

  setConfig(): Promise<MergedEnvironment>{
    return this.httpClient
      .get<MergedEnvironment>('./environment-config.json', {headers: new HttpHeaders({
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        })})
      .toPromise()
      .then((config)=>{
        this.mergedEnvironment = config;
        for(const key in this.environment){
          if(this.environment[key] !== undefined){
            this.mergedEnvironment[key] = this.environment[key];
          }
        }
        this.$mergedEnvironment.next(this.mergedEnvironment);
        return this.mergedEnvironment;
      })
  }

  readConfig(): MergedEnvironment{
    return this.mergedEnvironment;
  }
}
