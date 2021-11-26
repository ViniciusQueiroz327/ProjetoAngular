import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoComponent } from './pages/exibicao/exibicao.component';
import { HomeComponent } from './pages/home/home.component';
import { MarcaComponent } from './pages/marca/marca.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'exibicao', component: ExibicaoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'marca', component: MarcaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
