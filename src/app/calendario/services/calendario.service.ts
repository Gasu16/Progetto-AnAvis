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
  constructor(private http: HttpClient) { }

  getDate(): Observable<Calendario[]>{
    return this.http.get<Calendario[]>(`${this.baseUrl}`);
  }

  getDateBySede(codice: string): Observable<Calendario[]>{
    return this.http.get<Calendario[]>(`${this.baseUrl}`+codice);
  }

  postDate(id: number, data: string, codice: string): Observable<Calendario[]>{
    return this.http.post<Calendario[]>(`${this.adate}`+id+`&data=`+data+`&codice=`+codice , {id: id, data: data,  codice: codice});
  }
}
