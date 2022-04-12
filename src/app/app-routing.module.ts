import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/jogador/jogador.component';

const routes: Routes = [
  
  {path: "contato", component: ContatoComponent},
  {path:"jogador", component: JogadorComponent},
  {path:"", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
