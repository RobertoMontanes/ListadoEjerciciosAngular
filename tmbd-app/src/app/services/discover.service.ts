import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscoverResponse } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  discoverMovies(genreId: number): Observable<DiscoverResponse> {
    return this.http.get<DiscoverResponse>(`${this.baseUrl}/discover/movie`, {
      params: {
        with_genres: genreId.toString()
      }
    });
  }

  discoverTv(genreId: number): Observable<DiscoverResponse> {
    return this.http.get<DiscoverResponse>(`${this.baseUrl}/discover/tv`, {
      params: {
        with_genres: genreId.toString()
      }
    });
  }
}
