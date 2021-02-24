import { Emergenza } from './../emergenza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergenzaService {

  private baseUrl = "http://localhost:8080/api/emergenze";
  private baseUrl1 = "http://localhost:8080/api/addemergenza?codiceEmergenza=";
  private baseUrl2 = "&citta=";
  private baseUrl3 = "&gruppoSanguigno=";

  constructor(private http: HttpClient) { }

  getEmergenze(): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`);
  }

  inoltraRichiestaEmergenza(codiceEmergenza: string, citta: string, gruppoSanguigno: string): Observable<Emergenza[]>{
    return this.http.post<Emergenza[]>(`${this.baseUrl1}`+codiceEmergenza+`${this.baseUrl2}`+citta+`${this.baseUrl3}`+gruppoSanguigno,  {codiceEmergenza: codiceEmergenza, citta: citta, gruppoSanguigno: gruppoSanguigno});
  }

}
