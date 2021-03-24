import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
