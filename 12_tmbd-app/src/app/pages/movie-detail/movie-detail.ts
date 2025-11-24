import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: any = null;
  loading = false;
  imageBase = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute, private movies: MoviesService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.load(id);
  }

  load(id: number) {
    this.loading = true;
    this.movies.getDetails(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
