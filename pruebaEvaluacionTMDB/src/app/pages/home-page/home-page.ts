import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SelectOption = '2' | '4' | 'all';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  options: SelectOption[] = ['2', '4', 'all'];
  peopleSelection: SelectOption = '4';
  movieSelection: SelectOption = '4';

  
}
