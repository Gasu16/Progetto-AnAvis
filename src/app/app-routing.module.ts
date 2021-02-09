import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { Home } from './home/home';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
import { SedeComponent } from './sede/components/sede.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
//  {path: '', redirectTo: '', component: HomeComponent},
  {path: 'sedi', component: SedeComponent},
  {path: 'registrazione', component: RegistrazioneComponent}
  //{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
