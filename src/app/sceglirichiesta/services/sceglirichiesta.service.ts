import { Observable } from 'rxjs';
import { Emergenza } from './../../emergenza/emergenza';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SceglirichiestaService {
  private baseUrl = "http://localhost:8080/api/scegliemergenza/";


  constructor(private http: HttpClient) { }

  scegliEmergenze(citta: string): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`+citta);
  }
}
