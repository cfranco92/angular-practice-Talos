import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  errorMessage: string = '';
  counter: number = 0;
  sub!: Subscription;
  pokemons: any = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsBy20();
  }

  getPokemonsBy20() {
    this.sub = this.pokemonService.getPokemonsBy20(this.counter).subscribe({
      next: (pokemons: any) => {
        this.pokemons = [...this.pokemons, ...pokemons.results];
        this.counter += 20;
        // this.filteredProducts = this.pokemons;
      },
      error: err => this.errorMessage = err
    });
  }
}
