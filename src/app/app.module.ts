import { RouterModule, Routes } from '@angular/router';
import { SedeComponent } from './sede/components/sede.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/components/prenotazione.component';
import { EmergenzaComponent } from './emergenza/components/emergenza.component';
import { DonatoreComponent } from './donatore/components/donatore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/components/home.component';

import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from './calendario/components/calendario.component';
import { QuestionarioComponent } from './questionario/components/questionario.component';
import { SceglirichiestaComponent } from './sceglirichiesta/components/sceglirichiesta.component';
import { VisualizzaprenotazioniComponent } from './visualizzaprenotazioni/components/visualizzaprenotazioni.component';
import { AccettazioneemergenzeComponent } from './accettazioneemergenze/components/accettazioneemergenze.component';
import { AnalisiComponent } from './analisi/components/analisi.component';


@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    EmergenzaComponent,
    DonatoreComponent,
    SedeComponent,
    HomeComponent,
    CalendarioComponent,
    QuestionarioComponent,
    SceglirichiestaComponent,
    VisualizzaprenotazioniComponent,
    AccettazioneemergenzeComponent,
    AnalisiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'sedi', component: SedeComponent},
        {path: 'date', component: CalendarioComponent},
        {path: 'addemergenza', component: EmergenzaComponent},
        {path: 'scegliemergenza', component: SceglirichiestaComponent},
        {path: 'visualizzaprenotazioni', component: VisualizzaprenotazioniComponent},
        {path: 'accettazioneemergenze', component: AccettazioneemergenzeComponent},
        {path: 'analisi', component: AnalisiComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
