import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpokemonsComponent } from './listpokemons.component';

const routes: Routes = [{ path: '', component: ListpokemonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListpokemonsRoutingModule { }
