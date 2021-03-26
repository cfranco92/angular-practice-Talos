import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  constructor() {
  }

  ngOnInit(): void {
    this.pokemon.image = `${environment.POKEMON_IMAGE_URL}${this.pokemon.url.split('/')[6]}.png`;
  }

  selectPokemon() {
    alert(`${this.pokemon.name} was selected`);
  }
}
