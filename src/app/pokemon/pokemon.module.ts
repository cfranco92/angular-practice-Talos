import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import { ToastViewComponent } from './components/toast-view/toast-view.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponentComponent } from './components/modal-component/modal-component/modal-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonsComponent,
    ModalViewComponent,
    ToastViewComponent,
    ModalComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pokemons', {})
  ]
})
export class PokemonModule { }
