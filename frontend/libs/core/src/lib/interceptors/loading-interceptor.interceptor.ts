import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { LoadingService } from '../../../../shared/components/src/lib/services/loading.service';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptorInterceptor implements HttpInterceptor {

  activeRequests: number = 0;
  constructor(private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.activeRequests === 0) {
      this.loadingService.startLoading()
    }

    this.activeRequests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading();
        }
      }),
      catchError(error=>{
        this.loadingService.stopLoading();
        return throwError(error);
      })
    )
  }
}
