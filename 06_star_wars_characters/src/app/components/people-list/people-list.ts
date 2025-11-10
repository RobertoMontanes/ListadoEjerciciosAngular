import { Component, OnInit, signal } from '@angular/core';
import { PeopleService } from '../../services/people';
import { Person } from '../../interfaces/people-list-response.interface';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.html'
})
export class PeopleListComponent implements OnInit {
  people = signal<Person[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe({
      next: (response) => {
        this.people.set(response.results);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error:', error);
        this.error.set('Error al cargar los personajes');
        this.loading.set(false);
      }
    });
  }
}














