import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.html',
  styleUrls: ['./person-detail.css']
})
export class PersonDetailComponent implements OnInit {
  person: any = null;
  loading = false;
  imageBase = 'https://image.tmdb.org/t/p/w300';

  constructor(private route: ActivatedRoute, private people: PeopleService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.load(id);
  }

  load(id: number) {
    this.loading = true;
    this.people.getDetails(id).subscribe({ next: (res) => { this.person = res; this.loading = false; }, error: () => (this.loading = false) });
  }
}
