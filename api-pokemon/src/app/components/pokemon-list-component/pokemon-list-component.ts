import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent implements OnInit {
  PokemonList: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}
}
