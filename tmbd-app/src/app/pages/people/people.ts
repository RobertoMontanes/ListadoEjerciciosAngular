import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './people.html',
  styleUrls: ['./people.css']
})
export class PeopleComponent implements OnInit {
  results: any[] = [];
  loading = false;
  imageBase = 'https://image.tmdb.org/t/p/w200';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.peopleService.listPopular().subscribe({ next: (res) => { this.results = res.results || []; this.loading = false; }, error: () => (this.loading = false) });
  }
}
