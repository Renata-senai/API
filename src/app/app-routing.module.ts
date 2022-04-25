import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { LoginComponent } from './views/login/login.component';
const routes: Routes = [  
  {path: "contato", component: ContatoComponent},
  {path:"jogador", component: JogadorComponent},
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
