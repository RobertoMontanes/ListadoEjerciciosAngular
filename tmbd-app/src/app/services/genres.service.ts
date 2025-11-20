import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenresResponse } from '../models/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovieGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.baseUrl}/genre/movie/list`);
  }

  getTvGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.baseUrl}/genre/tv/list`);
  }
}
