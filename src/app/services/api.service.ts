import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getLoadMore(arg0: number, limit: number, arg2: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getAllPokemon() {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`
    );
  }

  get20Pokemons(offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
  }

  getNextPokemon(limit: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
    );
  }

  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }
  getPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemonID(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
