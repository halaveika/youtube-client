import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import {
  URL_SEARCH, URL_VIDEOS, URL_YOUTUBE, YOUTUBE_API_TOKEN,
} from '@app/shared/constansts';
import { Observable } from 'rxjs';

export class YoutubeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      url: (req.url === URL_SEARCH)
        ? req.url.replace(URL_SEARCH, URL_YOUTUBE + URL_SEARCH)
        : req.url.replace(URL_VIDEOS, URL_YOUTUBE + URL_VIDEOS),
      params: req.params.append('key', YOUTUBE_API_TOKEN),
    });
    return next.handle(cloned);
  }
}
