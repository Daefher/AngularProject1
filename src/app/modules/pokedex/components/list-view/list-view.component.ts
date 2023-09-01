import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokedex/pokemon.service';
import { PokemonList } from '../../../../interfaces/pokemon-list';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PageEvent } from '@angular/material/paginator';
import { PokemonInfo } from 'src/app/interfaces/pokemon-info';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  orderByForm: any;
  pokemonList: PokemonList;
  allPokemon: Pokemon[];
  selectedResult: Pokemon[];
  panelOpenState = false;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 30];
  pageEvent: PageEvent;
  pokemonInfo: PokemonInfo;
  length: number;

  constructor(
    private pokemonService: PokemonService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((data: PokemonList) => {
      this.pokemonList = data;
      this.allPokemon = this.pokemonList.results;
      this.selectedResult = this.allPokemon.slice(0, this.pageSize);
      this.length = this.allPokemon.length;
    });
  }

  getData(event?: PageEvent) {
    if (event) {
      this.selectedResult = this.allPokemon.slice(event.pageIndex * event.pageSize,
        event.pageIndex * event.pageSize + event.pageSize);
      return event;
    } else {
      return null;
    }
  }

  fetchPanelData(url: string) {
    const id = this.returnId(url);
    if (localStorage.getItem(id) === null) {
      this.pokemonService.getPokemon(url).subscribe((data: PokemonInfo) => {
        this.pokemonInfo = data;
        console.log(this.pokemonInfo);
      }
      );
    } else {
      this.pokemonInfo = JSON.parse(localStorage.getItem(id));
    }
  }

  returnId(url: string): string {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    return match[1];
  }

  saveToLocalStorage(url: string) {
    const id = this.returnId(url);    
    localStorage.setItem(id, JSON.stringify(this.pokemonInfo));
    this._snackBar.open("Pokemon agregado a tus favoritos","Aceptar");

  }

}
