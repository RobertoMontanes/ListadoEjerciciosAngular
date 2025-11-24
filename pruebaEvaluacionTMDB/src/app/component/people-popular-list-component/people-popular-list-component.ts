import { Component, OnInit } from '@angular/core';
import { PersonList } from '../../model/person-popular-list.interface';

const BASE_URL = 'https://api.themoviedb.org/3/person/popular';

@Component({
  selector: 'app-people-popular-list-component',
  imports: [],
  templateUrl: './people-popular-list-component.html',
  styleUrl: './people-popular-list-component.css',
})
export class PeoplePopularListComponent implements OnInit {
  

  ngOnInit() {
    
  }
}
