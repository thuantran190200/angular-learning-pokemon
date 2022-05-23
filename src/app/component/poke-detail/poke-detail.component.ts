import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
})
export class PokeDetailComponent implements OnInit {
  @Input() pokemon!: any;
  pokemonDetail: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
  getData() {
    this.apiService.getPokemon(this.pokemon.name).subscribe((res) => {
      this.pokemonDetail = res;
    });
  }
}
