import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import { ToastViewComponent } from './components/toast-view/toast-view.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonsComponent,
    ModalViewComponent,
    ToastViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
    MaterialModule
  ]
})
export class PokemonModule { }
