import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const API_KEY = 'f52455191bdf4f07b1e601ef89258db2';

  if (req.url.includes('api.themoviedb.org')) {
    const clonedRequest = req.clone({
      setParams: {
        api_key: API_KEY,
        language: 'es-ES'
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
