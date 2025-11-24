import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenresService } from '../../services/genres.service';
import { DiscoverService } from '../../services/discover.service';
import { Genre } from '../../models/genre.interface';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie-discover',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-discover.html',
  styleUrls: ['./movie-discover.css'],
})
export class MovieDiscoverComponent implements OnInit {
  mediaType: 'movie' | 'tv' = 'movie';
  genres: Genre[] = [];
  selectedGenreId: number | null = null;
  results: Movie[] = [];
  loading = false;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private genresService: GenresService, private discoverService: DiscoverService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  onMediaTypeChange(): void {
    this.selectedGenreId = null;
    this.results = [];
    this.loadGenres();
  }

  loadGenres(): void {
    this.loading = true;
    const service =
      this.mediaType === 'movie'
        ? this.genresService.getMovieGenres()
        : this.genresService.getTvGenres();

    service.subscribe({
      next: (response) => {
        this.genres = response.genres;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando géneros:', error);
        this.loading = false;
      },
    });
  }

  onGenreChange(): void {
    if (this.selectedGenreId) {
      this.loadResults();
    }
  }

  loadResults(): void {
    if (!this.selectedGenreId) return;

    this.loading = true;
    const service =
      this.mediaType === 'movie'
        ? this.discoverService.discoverMovies(this.selectedGenreId)
        : this.discoverService.discoverTv(this.selectedGenreId);

    service.subscribe({
      next: (response) => {
        this.results = response.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando resultados:', error);
        this.loading = false;
      },
    });
  }

  getTitle(item: Movie): string {
    return item.title || item.name || 'Sin título';
  }
}
