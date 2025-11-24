import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MovieList } from '../../model/movie-popular-list.interface';
import { MovieService } from '../../service/movie-service';

@Component({
  selector: 'app-movie-popular-list',
  imports: [CommonModule],
  templateUrl: './movie-popular-list-component.html',
  styleUrl: './movie-popular-list-component.css',
})
export class MoviePopularListComponent implements OnInit {
  movies: MovieList[] = [];
  visibleMovies: MovieList[] = [];

  posterBaseUrl = 'https://image.tmdb.org/t/p/w300';

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {}
}
