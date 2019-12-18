import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { BuscaComponent } from './busca/busca.component';
import { UserIdComponent } from './user-id/user-id.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    HomeComponent,
    RodapeComponent,
    UserListComponent,
    TarefasComponent,
    BuscaComponent,
    UserIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
