import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  listPopular(page = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person/popular`, { params: { page: page.toString() } });
  }

  getDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person/${id}`);
  }
}
