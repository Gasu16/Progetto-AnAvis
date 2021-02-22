import { AccettazioneemergenzeComponent } from './accettazioneemergenze/components/accettazioneemergenze.component';
import { VisualizzaprenotazioniComponent } from './visualizzaprenotazioni/components/visualizzaprenotazioni.component';
import { SceglirichiestaComponent } from './sceglirichiesta/components/sceglirichiesta.component';
import { EmergenzaComponent } from './emergenza/components/emergenza.component';
import { CalendarioComponent } from './calendario/components/calendario.component';
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { Home } from './home/home';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
import { SedeComponent } from './sede/components/sede.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compileDirectiveFromMetadata } from '@angular/compiler';

export const routes: Routes = [
//  {path: '', redirectTo: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sedi', component: SedeComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'date', component: CalendarioComponent},
  {path: 'addemergenza', component: EmergenzaComponent},
  {path: 'scegliemergenza', component: SceglirichiestaComponent},
  {path: 'visualizzaprenotazioni', component: VisualizzaprenotazioniComponent},
  {path: 'accettazioneemergenze', component: AccettazioneemergenzeComponent}
  //{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
