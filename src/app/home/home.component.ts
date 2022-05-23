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
  limit = 10;
  offset = 0;
  prePage = 10;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.getPokemons();
    this.get20Pokemons(this.limit, 0);
    // this.loadMore();
  }

  getPokemons() {
    this.apiService.getAllPokemon().subscribe((res: any) => {
      this.pokemons = res.results;
      console.log(res);
    });
  }

  get20Pokemons(limit: number, offset: number) {
    this.apiService.getPokemons(limit, offset).subscribe((res: any) => {
      this.pokemons = [...this.pokemons, ...res.results];
      console.log(res);
    });
  }

  getpoke() {}

  loadMore() {
    console.log('ok');
    this.get20Pokemons(this.limit, (this.offset = this.offset + 10));
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
