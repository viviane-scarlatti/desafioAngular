import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserIdComponent } from './user-id/user-id.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { BuscaComponent } from './busca/busca.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listagem', component: UserListComponent },
  { path: 'buscaid', component: UserIdComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'buscaTarefas', component: BuscaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
