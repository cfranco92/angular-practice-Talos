import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonsUrl: string = '';
  constructor(private http: HttpClient) { }

  urlSet(counter: number) {
    this.pokemonsUrl = `${environment.API}pokemon?offset=${counter}&limit=20`
  }

  getPokemonsBy20(counter: number): Observable<Pokemon[]> {
    this.urlSet(counter)
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
