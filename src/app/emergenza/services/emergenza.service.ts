import { Emergenza } from './../emergenza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergenzaService {

  private baseUrl = "http://localhost:8080/api/emergenze";
  
  constructor(private http: HttpClient) { }

  getEmergenze(): Observable<Emergenza[]>{
    return this.http.get<Emergenza[]>(`${this.baseUrl}`);
  }

}
