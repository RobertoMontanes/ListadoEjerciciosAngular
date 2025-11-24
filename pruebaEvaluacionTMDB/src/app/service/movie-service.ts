import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularListResponse } from '../model/movie-popular-list.interface';
import { MovieDetail } from '../model/movie-detail.interface';
import { MovieVideosResponse } from '../model/movie-video.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private popular = 'https://api.themoviedb.org/3/movie/popular';
  private movie = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  public getMovieList(): Observable<MoviePopularListResponse> {
    return this.http.get<MoviePopularListResponse>(this.popular);
  }

  public getMovieDetail(movieId: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.movie}/${movieId}`);
  }

  public getMovieVideos(movieId: number): Observable<MovieVideosResponse> {
    return this.http.get<MovieVideosResponse>(`${this.movie}/${movieId}/videos`);
  }
}
