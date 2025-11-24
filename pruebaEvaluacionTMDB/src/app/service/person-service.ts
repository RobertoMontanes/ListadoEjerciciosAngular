import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonPopularListResponse } from '../model/person-popular-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private API_URL = 'https://api.themoviedb.org/3/person/popular';

  constructor(private http: HttpClient) {}

  public getPersonList(): Observable<PersonPopularListResponse> {
    return this.http.get<PersonPopularListResponse>(this.API_URL);
  }
}
