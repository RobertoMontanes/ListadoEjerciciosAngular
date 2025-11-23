import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  query = '';
  type: 'movie' | 'tv' = 'movie';
  results: any[] = [];
  loading = false;
  imageBase = 'https://image.tmdb.org/t/p/w300';

  constructor(private searchService: SearchService) {}

  doSearch() {
    if (!this.query.trim()) return;
    this.loading = true;
    const obs = this.type === 'movie' ? this.searchService.searchMovie(this.query) : this.searchService.searchTv(this.query);
    obs.subscribe({ next: (res) => { this.results = res.results || []; this.loading = false; }, error: () => (this.loading = false) });
  }
}
