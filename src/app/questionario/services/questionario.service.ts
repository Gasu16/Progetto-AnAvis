import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  private baseUrl = "http://localhost:8080/api/sendrisposte/"
  constructor(private http: HttpClient) { }
  
}
