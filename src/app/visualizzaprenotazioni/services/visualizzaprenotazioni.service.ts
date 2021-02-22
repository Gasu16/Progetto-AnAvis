import { Prenotazione } from './../../prenotazione/prenotazione';
import { Calendario } from './../../calendario/calendario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizzaprenotazioniService {
  private citta_data = "http://localhost:8080/api/prenotazioni/";
  private baseUrl = "http://localhost:8080/api/prenotazioniAggiunte";
  constructor(private http: HttpClient) { }

  inviaPrenotazioni(citta: string, data: string){
    return this.http.post<Prenotazione[]>(`${this.baseUrl}`+`?citta=`+citta+`&data=`+data, {citta: citta, data: data});
  }

  getPrenotazioniByCittaAndData(citta: string, data: string){
    return this.http.get<Prenotazione[]>(`${this.citta_data}`+citta+`/`+data);
  }
}
