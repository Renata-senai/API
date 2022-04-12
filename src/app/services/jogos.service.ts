import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogos } from '../models/jogos';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  url = "http://localhost:3000/jogos"

  constructor(private httpCliente: HttpClient) { }

  getJogos(): Observable<Jogos[]>{
    return this. httpCliente.get<Jogos[]>(this.url)
  }
}
