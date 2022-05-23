import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListpokemonsRoutingModule } from './listpokemons-routing.module';
import { ListpokemonsComponent } from './listpokemons.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [ListpokemonsComponent],
  imports: [
    CommonModule,
    ListpokemonsRoutingModule,
    NgxPaginationModule,
    PokemonModule,
  ],
})
export class ListpokemonsModule {}
