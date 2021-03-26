import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  errorMessage = '';
  sub!: Subscription;
  pokemons: any = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsBy20();
    console.log('pokemons', this.pokemons)
  }

  getPokemonsBy20() {
    this.sub = this.pokemonService.getPokemonsBy20().subscribe({
      next: pokemons => {
        this.pokemons = pokemons;
        // this.filteredProducts = this.pokemons;
      },
      error: err => this.errorMessage = err
    });
  }
}
