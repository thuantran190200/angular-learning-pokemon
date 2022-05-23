import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: any;
  pokemonDetail: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.apiService.getPokemon(this.pokemon.name).subscribe((res) => {
      this.pokemonDetail = res;
    });
  }
}
