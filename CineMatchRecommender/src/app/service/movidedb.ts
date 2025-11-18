import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movidedb {
  private API_TOKEN = 'f52455191bdf4f07b1e601ef89258db2';
  private API_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const headers = { Authorization: `Bearer ${this.API_TOKEN}` };
    return this.http.get(this.API_URL + '/api/', { headers: headers });
  }
}
