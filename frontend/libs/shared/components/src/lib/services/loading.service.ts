import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class LoadingService {
  private $showLoading : Subject<boolean> = new Subject<boolean>();
  public showLoading$ : Observable<boolean> = this.$showLoading.asObservable();

  startLoading(){
    this.$showLoading.next(true);
  }

  stopLoading(){
    this.$showLoading.next(false);
  }
}
