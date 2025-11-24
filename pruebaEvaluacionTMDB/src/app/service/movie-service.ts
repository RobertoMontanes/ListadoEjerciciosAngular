import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularListResponse } from '../model/movie-popular-list.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly endpoint = 'https://api.themoviedb.org/3/movie/popular';

  constructor(private http: HttpClient) {}

  public getMovieList(page = 1, language = 'es-ES'): Observable<MoviePopularListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('language', language)
      .set('region', 'ES');

    return this.http.get<MoviePopularListResponse>(this.endpoint, { params });
  }
}
