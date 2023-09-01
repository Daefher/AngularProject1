import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonList } from '../../interfaces/pokemon-list';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonInfo } from 'src/app/interfaces/pokemon-info';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemon_api = "https://pokeapi.co/api/v2/pokemon?limit=100";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.pokemon_api)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getPokemon(url:string): Observable<PokemonInfo>{    
    return this.http.get<PokemonInfo>(url)
      .pipe(
        catchError(this.errorHandler)
      )

  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => Error(errorMessage));
  }

}
