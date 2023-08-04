import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) {
      request = request.clone({ url: `https://localhost:44356/api/${request.url}` });
    }

    return next.handle(request);
  }
}
