import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  counter: number = 0;
  pokemons: Pokemon[] = [];
  displayCode: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getPokemonsBy20();
  }

  getPokemonsFromStore() {
    this.store.select('pokemons').subscribe(
      pokemons => {
        if (pokemons) {
          this.displayCode = pokemons.showProductCode
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
    this.store.dispatch({
      type: '[Product] Togggle Product Code'
    })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
