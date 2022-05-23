import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    PokemonModule,
  ],
})
export class HomeModule {}
