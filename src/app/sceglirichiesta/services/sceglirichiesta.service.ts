import { Observable } from 'rxjs';
import { Emergenza } from './../../emergenza/emergenza';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SceglirichiestaService {
  private baseUrl = "http://localhost:8080/api/scegliemergenza/";
  private baseUrl2 = "http://localhost:8080/api/postEmergenza?id=";
  private baseUrl3 = "http://localhost:8080/api/accettazioniemergenze/";

  constructor(private http: HttpClient) { }

  scegliEmergenze(citta: string, gruppoSanguigno: string): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`+citta+`/`+gruppoSanguigno);
  }

  postEmergenza(id: number, citta: string, gruppoSanguigno: string): Observable<Emergenza[]>{
    return this.http.post<Emergenza[]>(`${this.baseUrl2}`+id+`&citta=`+citta+`&gruppoSanguigno=`+gruppoSanguigno, id);
  }

  getAccettazioniEmergenze(id: number): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl3}`+id);
  }
}
