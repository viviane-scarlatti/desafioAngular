import { User } from  './../Model/User';
import { ListawebService } from '../service/listaweb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  // injetando o serviço no objeto do componente
  constructor(private ListawebService: ListawebService) { }

  // criando variavel do tipo Lista de User
  users = User[""];
  ngOnInit() {
    this.findAll();
  }

  // criando metódo que invoca o serviço
  findAll(){
    this.ListawebService.getAll().subscribe((userOut: User[]) => {
      this.users = userOut;
    })
  }

}
