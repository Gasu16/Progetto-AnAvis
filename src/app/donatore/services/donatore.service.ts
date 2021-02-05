import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donatore } from '../donatore';

@Injectable({
  providedIn: 'root'
})
export class DonatoreService {

  private baseUrl = "http://localhost:8080/api/donatori";

  constructor(private http: HttpClient) { }

  getDonatori(): Observable<Donatore[]>{
    return this.http.get<Donatore[]>(`${this.baseUrl}`);
  }
  
}
