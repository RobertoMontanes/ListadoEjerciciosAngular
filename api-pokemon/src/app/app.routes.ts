import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';
import { Component } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    component: PokemonListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
