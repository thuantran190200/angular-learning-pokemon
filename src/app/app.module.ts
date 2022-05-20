import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './component/header/header.component';

import { PokeDetailComponent } from './component/poke-detail/poke-detail.component';
import { MainComponent } from './component/main/main.component';
import { HttpClientModule} from '@angular/common/http';
import { ListPokemonsComponent } from './component/list-pokemons/list-pokemons.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonComponent } from './component/pokemon/pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    PokeDetailComponent,
    MainComponent,
    ListPokemonsComponent,
    PokemonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
