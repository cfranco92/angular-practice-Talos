import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  counter: Number = 0;
  private pokemonAPI = `${environment.API}pokemon?offset=${this.counter}&limit=20`;

  constructor(private http: HttpClient) { }

  getPokemonsBy20(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonAPI)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        // catchError(this.handleError)
      );
  }
}
