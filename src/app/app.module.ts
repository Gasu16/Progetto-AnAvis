import { RouterModule } from '@angular/router';
import { SedeComponent } from './sede/components/sede.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/components/prenotazione.component';
import { EmergenzaComponent } from './emergenza/components/emergenza.component';
import { DonatoreComponent } from './donatore/components/donatore.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    EmergenzaComponent,
    DonatoreComponent,
    SedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'sedi', component: SedeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
