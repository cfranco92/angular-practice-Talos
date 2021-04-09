import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { getPokemons, State } from '../../state/pokemon.reducer';
import * as PokemonActions from '../../state/pokemon.actions'
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent as PokemonModalComponent } from '../modal-component/modal-component/modal-component.component';

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
    private store: Store<State>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPokemonsBy20();
    this.getPokemonsFromStore();
  }

  selectPokemon(pokemon1Name: string, pokemon1Url: string) {
    const dialogRef = this.dialog.open(PokemonModalComponent, {
      width: '512px'
    });
    console.log(pokemon1Url)
    localStorage.setItem('pokemon1Name', pokemon1Name)
    localStorage.setItem('pokemon1Url', pokemon1Url)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
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
    this.pokemonService.getPokemonsBy20().subscribe({
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
