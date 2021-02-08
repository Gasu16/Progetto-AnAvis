import { Sede } from './../sede';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private baseUrl = "http://localhost:8080/api/sedi";

  constructor(private http: HttpClient) { }

  getSedi(): Observable<Sede[]>{
    return this.http.get<Sede[]>(`${this.baseUrl}`);
  }
}