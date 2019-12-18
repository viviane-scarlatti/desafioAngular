import { Component, OnInit } from '@angular/core';
import { ListawebService } from '../service/listaweb.service';
import { Tarefa } from '../Model/Tarefa';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  private idBusca: number;
  private _msgErro: string = null;
  private _tarefa: Tarefa = null;
  
  constructor(private listaSrv: ListawebService) { }

  ngOnInit() {
  }

  private pesquisar(){
    if (this.idBusca <= 0){
      this._msgErro = "Digite um número válido";
      this._tarefa = null;
    }
    else {
      this._msgErro = null;
      this.listaSrv.recuperaTarefaPeloId(this.idBusca).subscribe((res: Tarefa) => {
        this._tarefa= res;
        console.log(this._tarefa);
      });

    }
  }
}

