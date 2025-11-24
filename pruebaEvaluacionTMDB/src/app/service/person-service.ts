import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonPopularListResponse } from '../model/person-popular-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly endpoint = 'https://api.themoviedb.org/3/person/popular';

  constructor(private http: HttpClient) {}

  public getPersonList(page = 1, language = 'es-ES'): Observable<PersonPopularListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('language', language)
      .set('region', 'ES');

    return this.http.get<PersonPopularListResponse>(this.endpoint, { params });
  }
}
