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
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { LoginComponent } from './login/components/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    EmergenzaComponent,
    DonatoreComponent,
    SedeComponent,
    HomeComponent,
    RegistrazioneComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'sedi', component: SedeComponent},
        {path: 'registrazione', component: RegistrazioneComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
