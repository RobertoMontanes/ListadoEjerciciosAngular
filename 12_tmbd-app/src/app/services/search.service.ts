import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovie(query: string, page = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/movie`, { params: { query, page: page.toString() } });
  }

  searchTv(query: string, page = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/tv`, { params: { query, page: page.toString() } });
  }
}
