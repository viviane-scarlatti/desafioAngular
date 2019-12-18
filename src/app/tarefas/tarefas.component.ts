import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Model/Tarefa';
import { ListawebService } from '../service/listaweb.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  // declarando lista de tarefas
  public listaDeTarefas: Tarefa[];

  // injetando o serviço no objeto do componente 
  constructor(private ListawebService: ListawebService) { }

  ngOnInit() {

    this.ListawebService.recuperaListaDeTarefas().subscribe((res:Tarefa[]) => {
      this.listaDeTarefas = res;
    });
  }

}
