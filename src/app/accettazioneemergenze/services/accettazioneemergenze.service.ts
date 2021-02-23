import { Emergenza } from './../../emergenza/emergenza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccettazioneemergenzeService {

  private baseUrl = "http://localhost:8080/api/accettazioniemergenze/";
  
  constructor(private http: HttpClient) { }

  getAccettazioniEmergenze(): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`);
  }

  getAccettazioniEmergenzeByID(id: number): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`+id);
  }

  getAccettazioniEmergenzeByCitta(citta: string): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`+citta);
  }
}
