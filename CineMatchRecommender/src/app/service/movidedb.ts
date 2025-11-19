import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../interface/moviedb.interface';

@Injectable({
  providedIn: 'root',
})
export class Movidedb {
  private API_TOKEN = 'f52455191bdf4f07b1e601ef89258db2';
  private API_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
  
  getPopularMovies(): Observable<MovieResponse> {
    const headers = { Authorization: `Bearer ${this.API_TOKEN}` };
    return this.http.get<MovieResponse>(this.API_URL + '/api/', { headers: headers });
  }
  
  
  }


