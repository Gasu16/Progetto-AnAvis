import { Analisi } from './../analisi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalisiService {

  private baseUrl = "http://localhost:8080/api/analisi";

  constructor(private http: HttpClient) { }

  getAnalisi(): Observable<Analisi[]>{
    return this.http.get<Analisi[]>(`${this.baseUrl}`);
  }

  inviaAnalisi(codiceFiscale: string, emoglobina: string ,globuli_bianchi: string, globuli_rossi: string, piastrine: string): Observable<Analisi[]>{
    return this.http.post<Analisi[]>(`${this.baseUrl}`+
    `?codiceFiscale=`+codiceFiscale+
    `&emoglobina=`+emoglobina+
    `&globuli_bianchi=`+globuli_bianchi+
    `&globuli_rossi=`+globuli_rossi+
    `&piastrine=`+piastrine,
    {codiceFiscale: codiceFiscale,
    emoglobina: emoglobina,
    globuli_bianchi: globuli_bianchi,
    globuli_rossi: globuli_rossi,
    piastrine: piastrine});
  }
}
