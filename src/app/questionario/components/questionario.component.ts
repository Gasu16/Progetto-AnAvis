import { SedeComponent } from './../../sede/components/sede.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  private id!: number;
  public quizView!: string;
  risposta1!: string;
  risposta2!: string;
  risposta3!: string;
  risposta4!: string;
  risposta5!: string;
  sedeComponent!: SedeComponent;
  risultato_quiz!: string;
  
  constructor() { }




  ngOnInit(): void {

  }

}
