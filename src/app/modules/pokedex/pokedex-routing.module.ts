import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  {
    path: '', component: PokedexComponent,
      children: [
        { path: '', component:ListViewComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
