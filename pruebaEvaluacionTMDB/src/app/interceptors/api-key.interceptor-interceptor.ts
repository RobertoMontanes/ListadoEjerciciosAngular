import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTI0NTUxOTFiZGY0ZjA3YjFlNjAxZWY4OTI1OGRiMiIsIm5iZiI6MTc2MzM2NzU4Mi45MzEsInN1YiI6IjY5MWFkYTllYmQ0ZjI0N2UxYTE3NWNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GLP0OEmX7QvDPJENJnsNm093o1elbs88l6xZEVz-Nps'
    ),
  });

  return next(reqWithHeader);
};
