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
  // counter: number = 0;
  constructor(private http: HttpClient) { }

  getPokemonsBy20(counter: number): Observable<Pokemon[]> {
    const pokemonsUrl = `${environment.API}pokemon?offset=${counter}&limit=20`
    // this.counter++;
    return this.http.get<Pokemon[]>(pokemonsUrl)
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }
}
