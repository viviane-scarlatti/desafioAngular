import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListawebService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  recuperaUserPeloID(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  recuperaListaDeTarefas(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
  recuperaTarefaPeloId(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
