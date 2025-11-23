import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  list(category: 'popular' | 'top_rated' | 'upcoming', page = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/${category}`, {
      params: { page: page.toString() }
    });
  }

  getDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/${id}`);
  }
}
