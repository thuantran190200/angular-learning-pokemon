import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css'],
})
export class ListPokemonsComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;
  quantity = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  quantityPokemon: number = 20;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.apiService
      .getPokemons(20, (this.page - 1) * 20)
      .subscribe((res: any) => {
        this.pokemons = res.results;
        this.totalPokemons = res.count;
      });
  }
}
