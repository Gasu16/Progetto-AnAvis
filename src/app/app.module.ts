import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/components/prenotazione.component';
import { EmergenzaComponent } from './emergenza/components/emergenza.component';
import { DonatoreComponent } from './donatore/components/donatore.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    EmergenzaComponent,
    DonatoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
