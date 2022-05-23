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
  limit = 20;
  offset = 0;
  prePage = 10;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemons();
    // this.get20Pokemons();
  }

  getPokemons() {
    this.apiService.getAllPokemon().subscribe((res: any) => {
      this.pokemons = res.results;
      console.log(res);
    });
  }

  get20Pokemons() {
    this.apiService.get20Pokemons(this.limit).subscribe((res: any) => {
      this.pokemons = res.results;
      console.log(res);
    });
  }

  loadMore() {
    console.log('ok');
    this.prePage = this.prePage + 10;
    // this.limit = this.limit + 10;
    // this.offset = this.offset + 10;

    // this.apiService
    //   .getPokemons(this.limit, this.offset)
    //   .subscribe((res: any) => {
    //     this.pokemons = res.results;
    //     this.totalPokemons = res.count;
    //   });
    // this.apiService
    //   .getPokemons((this.limit = this.limit + 10), (this.page - 1) * 20)
    //   .subscribe((res: any) => {
    //     this.pokemons = res.results;
    //     this.totalPokemons = res.count;
    //     console.log(res);
    //   });
  }
}
