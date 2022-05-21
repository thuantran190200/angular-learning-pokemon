import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.apiService.getAllPokemon().subscribe((res: any) => {
      this.pokemons = res.results;
      console.log(res);
    });
  }

  limit = 20;

  loadMore() {
    console.log('ok');
    this.apiService
      .getPokemons((this.limit = this.limit + 10), (this.page - 1) * 20)
      .subscribe((res: any) => {
        this.pokemons = res.results;
        this.totalPokemons = res.count;
        console.log(res);
      });
  }
}
