import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  private baseUrl = "http://localhost:8080/api/registrazione";

  constructor(private http: HttpClient) { }
  gotoRegistrazione(): void{
    this.http.get(`${this.baseUrl}`);
  }
}
