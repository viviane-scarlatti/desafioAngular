import { Component, OnInit } from '@angular/core';
import { ListawebService } from '../service/listaweb.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  private idBusca: number;
  private _msgErro: string = null;
  private _user: User=null;

  constructor(private userSrv: ListawebService) { }

  ngOnInit() {
  }

  private pesquisar(){
    if (this.idBusca <= 0){
      this._msgErro = "Digite um número válido";
      this._user = null;
    }
    else {
      this._msgErro = null;
      this.userSrv.recuperaUserPeloID(this.idBusca).subscribe((res: User) => {
        this._user = res;
        console.log(this._user);
      });

    }
  }
}
