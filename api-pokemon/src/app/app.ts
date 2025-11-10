import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from "./components/pokemon-list-component/pokemon-list-component";
import { PokemonItemComponent } from './components/pokemon-item-component/pokemon-item-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonListComponent, PokemonItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-pokemon');
}
