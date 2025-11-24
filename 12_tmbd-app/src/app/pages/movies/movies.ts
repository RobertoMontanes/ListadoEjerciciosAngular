import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent implements OnInit {
  category: 'popular' | 'top_rated' | 'upcoming' = 'popular';
  results: any[] = [];
  loading = false;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.load();
  }

  onCategoryChange(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.moviesService.list(this.category).subscribe({
      next: (res) => {
        this.results = res.results || [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getTitle(item: any) {
    return item.title || item.name || 'Sin título';
  }
}
