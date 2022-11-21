import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of,tap } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
  // store the response object
  cacheMap = new Map<string, HttpResponse<any>>();
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // not cachable
    if (!this.isReqeustCachable(request)) {
      return next.handle(request);
    } else {
      // request is cachable
      const url = request.url.toLowerCase();
      // if the request is cached
      if (this.cacheMap.has(url)) {
        return of(this.cacheMap.get(url) as HttpResponse<any>);
      } else {
        return next.handle(request).pipe(
          tap((event) => {
            if (event instanceof HttpResponse) {
              // set the map
              this.cacheMap.set(url, event);
            }
          })
        );
      }
    }
  }
  isReqeustCachable(req: HttpRequest<any>): boolean {
    // the reuest must the GET method
    if (req.method === 'GET') {
      // define all the cache partial URL
      const urls = [
        'api/planets',
        'api/people',
        'api/films',
        'api/species',
        'api/vehicles',
        'api/starships',
      ];
      // get the requets URL
      for (let i = 0; i < urls.length; i++) {
        if (req.url.toLowerCase().includes(urls[i].toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  }
}
