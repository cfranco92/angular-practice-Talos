import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon() {
    alert(`${this.pokemon.name} was selected`);
  }
}
