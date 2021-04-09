import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { getPokemons, State } from '../../state/pokemon.reducer';
import * as PokemonActions from '../../state/pokemon.actions'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  counter: number = 0;
  pokemons: Pokemon[] = [];
  pokemons2: Pokemon[] = [];
  displayCode: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.getPokemonsBy20();
    this.getPokemonsFromStore();
  }

  getPokemonsFromStore() {
    this.store.select(getPokemons).subscribe(
      pokemons => {
        if (pokemons) {
          this.pokemons2 = pokemons
          console.log('Pokemons:', this.pokemons2)
        }
      }
    )
  }

  getPokemonsBy20() {
    this.pokemonService.getPokemonsBy20(this.counter).subscribe({
      next: (pokemons: any) => {
        this.pokemons = [...this.pokemons, ...pokemons.results];
        this.counter += 20;
      },
      error: err => this.errorMessage = err
    });
  }

  // TODO: GET THE POKEMONS HERE
  checkChanged(): void {
    this.store.dispatch(PokemonActions.setModalView())
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
