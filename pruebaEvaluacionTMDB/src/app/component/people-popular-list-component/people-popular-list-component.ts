import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PersonList } from '../../model/person-popular-list.interface';
import { PersonService } from '../../service/person-service';

@Component({
  selector: 'app-people-popular-list',
  imports: [CommonModule],
  templateUrl: './people-popular-list-component.html',
  styleUrl: './people-popular-list-component.css',
})
export class PeoplePopularListComponent implements OnInit {
  people: PersonList[] = [];
  visiblePeople: PersonList[] = [];

  profileBaseUrl = 'https://image.tmdb.org/t/p/w300';

  constructor(private readonly personService: PersonService) {}

  ngOnInit(): void {}
}
