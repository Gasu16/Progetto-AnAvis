import { SedeComponent } from './../../sede/components/sede.component';
import { SceglirichiestaService } from './../services/sceglirichiesta.service';
import { HttpClient } from '@angular/common/http';
import { Emergenza } from './../../emergenza/emergenza';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sceglirichiesta',
  templateUrl: './sceglirichiesta.component.html',
  styleUrls: ['./sceglirichiesta.component.css']
})
export class SceglirichiestaComponent implements OnInit {

  id!: number;
  emergenze!: Emergenza[];
  codiceEmergenza!: string;
  citta!: string;
  gruppoSanguigno!: string;
  public scelta_emergenza_view!: string;
  sedeComponent!: SedeComponent;
  risposta1!: string;
  risposta2!: string;
  risposta3!: string;
  risposta4!: string;
  risposta5!: string;
  risultato_quiz!: string;

  constructor(
    private sceglirichiestaService: SceglirichiestaService,
    http: HttpClient
  ) { }


  gestisciQuiz(): string{
    
    console.log(this.risposta1);
    console.log(this.risposta2);
    console.log(this.risposta3);
    console.log(this.risposta4);
    console.log(this.risposta5);
//    this.risultato_quiz = (this.risposta1 && this.risposta2 && this.risposta3 && this.risposta4 && this.risposta5);
    if(
      (this.risposta1 === "true") ||
      (this.risposta2 === "true") ||
      (this.risposta3 === "true") ||
      (this.risposta4 === "true") ||
      (this.risposta5 === "true")
    ){
      console.log("TEST fallito");
      return this.risultato_quiz;
    }
    console.log("Risultato quiz: " + this.risultato_quiz);

    this.scelta_emergenza_view = '1';
    console.log("Questionario finito");
    return this.risultato_quiz;
  }


  elencaEmergenze(): void{
    this.sceglirichiestaService.scegliEmergenze(this.citta).subscribe((data: Emergenza[]) => {
      console.log(data);
      this.emergenze = data;
    });
    this.scelta_emergenza_view = '2';
  }

  inviaEmergenza(): void{
    this.sceglirichiestaService.postEmergenza(this.id).subscribe(
      res => {location.reload},
      err => {alert("Errore in inviaEmergenza() in sceglirichiesta.component.ts")}
    );
    console.log("Sto inviando i dati al server...\n");
  }

  ngOnInit(): void {
    this.scelta_emergenza_view = '0';
    //this.elencaEmergenze();
  }

}
