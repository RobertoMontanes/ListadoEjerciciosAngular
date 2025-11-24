import { HttpInterceptorFn } from '@angular/common/http';

const TMDB_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTI0NTUxOTFiZGY0ZjA3YjFlNjAxZWY4OTI1OGRiMiIsIm5iZiI6MTc2MzM2NzU4Mi45MzEsInN1YiI6IjY5MWFkYTllYmQ0ZjI0N2UxYTE3NWNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GLP0OEmX7QvDPJENJnsNm093o1elbs88l6xZEVz-Nps';

export const apiKeyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes('themoviedb.org')) {
    return next(req);
  }

  const reqWithHeader = req.clone({
    setHeaders: {
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      accept: 'application/json',
    },
  });

  return next(reqWithHeader);
};
