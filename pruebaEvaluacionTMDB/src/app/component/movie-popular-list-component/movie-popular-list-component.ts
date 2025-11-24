import { Component, OnInit } from '@angular/core';

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

@Component({
  selector: 'app-movie-popular-list-component',
  imports: [],
  templateUrl: './movie-popular-list-component.html',
  styleUrl: './movie-popular-list-component.css',
})
export class MoviePopularListComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
