import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { YOUTUBE_API_TOKEN } from '@app/shared/constans';
import { Observable } from 'rxjs';

export class YoutubeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      params: req.params.append('key', YOUTUBE_API_TOKEN)
    })
    return next.handle(cloned);
  }
}
