import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MovieDetail } from '../../model/movie-detail.interface';
import { MovieVideo } from '../../model/movie-video.interface';
import { MovieService } from '../../service/movie-service';

interface MovieVideoUi extends MovieVideo {
  embedUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail-page.html',
  styleUrl: './movie-detail-page.css',
})
export class MovieDetailPage implements OnInit {
  movie: MovieDetail | null = null;
  videos: MovieVideoUi[] = [];

  ngOnInit(): void {}
}
