import { Prenotazione } from '../../prenotazione/prenotazione';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private baseUrl = "http://localhost:8080/api/prenotazioni";

  constructor(private http: HttpClient) { }

  getPrenotazioni(): Observable<Prenotazione[]>{
    return this.http.get<Prenotazione[]>(`${this.baseUrl}`);
  }
}
