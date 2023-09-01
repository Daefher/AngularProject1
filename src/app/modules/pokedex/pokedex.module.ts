import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ThemeModule } from '../theme/theme.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    PokedexComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ThemeModule
  ]
})

export class PokedexModule { }
