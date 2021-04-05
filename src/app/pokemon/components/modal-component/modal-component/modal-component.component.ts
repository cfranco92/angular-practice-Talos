import { Component, InjectionToken, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  // MAT_DIALOG_DATA: InjectionToken<any>;
  name: string = '';
  url: string = '';
  image: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getPokemonName();
    console.log(this.url)
  }

  getPokemonName() {
    this.name = localStorage.getItem('pokemon1Name') || ''
    this.url = localStorage.getItem('pokemon1Url') || ''
    this.image = `${environment.POKEMON_IMAGE_URL}${this.url.split('/')[6]}.png`;
  }
}
