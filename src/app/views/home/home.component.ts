import { Component, OnInit } from '@angular/core';
import { Jogos } from 'src/app/models/jogos';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private JogosService: JogosService) { }

  listaJogos = [] as Jogos[]

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos() {
    this.JogosService.getJogos().subscribe( (jogosRecebidos: Jogos[]) => {
      this.listaJogos = jogosRecebidos;
      console.log(this.listaJogos);
    })
  }
  
}

