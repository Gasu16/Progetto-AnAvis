import { Calendario } from './../calendario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private baseUrl = "http://localhost:8080/api/date/";
  private adate = "http://localhost:8080/api/deldata?id=";
  private citta_data = "http://localhost:8080/api/prenotazioni/";
  constructor(private http: HttpClient) { }

  getDate(): Observable<Calendario[]>{
    return this.http.get<Calendario[]>(`${this.baseUrl}`);
  }

  getDateBySede(codice: string): Observable<Calendario[]>{
    return this.http.get<Calendario[]>(`${this.baseUrl}`+codice);
  }

  postDate(id: number, data: string, codice: string, citta: string, codiceFiscale: string): Observable<Calendario[]>{
    return this.http.post<Calendario[]>(`${this.adate}`+id+`&data=`+data+`&codice=`+codice+`&citta=`+citta+`&codiceFiscale=`+codiceFiscale , {id: id, data: data,  codice: codice, citta: citta, codiceFiscale: codiceFiscale});
  }

}
