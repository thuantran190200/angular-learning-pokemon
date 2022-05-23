import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './component/poke-detail/poke-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'listpokemons',
    loadChildren: () =>
      import('./listpokemons/listpokemons.module').then(
        (m) => m.ListpokemonsModule
      ),
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },

  { path: 'pokemon/:id', component: PokeDetailComponent },
  {
    path: 'feature',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./listpokemons/listpokemons.module').then(
        (m) => m.ListpokemonsModule
      ),
  },
  { path: 'feature', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
