import { QuestionarioComponent } from './../../questionario/components/questionario.component';
import { CalendarioService } from './../../calendario/services/calendario.service';
import { Calendario } from './../../calendario/calendario';
import { CalendarioComponent } from './../../calendario/components/calendario.component';
import { HttpClient } from '@angular/common/http';
import { SedeService } from './../services/sede.service';
import { Sede } from './../sede';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  ind!: number;
  id!: number;
  sedi!: Sede[];
  codice!: string;
  data!: string;
  codiceFiscale!: string;
//  dateCal!: CalendarioComponent;
  date!: Calendario[]; // Lista di date Calendario
  public view!: string;

  
  risposta1!: string;
  risposta2!: string;
  risposta3!: string;
  risposta4!: string;
  risposta5!: string;
  risultato_quiz!: string;
  varb!: boolean;
  //public view = '0';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private sedeService: SedeService,
    private calendarioService: CalendarioService,
    private http: HttpClient
  ) { }

/*  onItemChange(value: string){
    value = this.data;
    console.log(value);
  }*/

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

    this.changeView('1');
    console.log("Questionario finito");
    return this.risultato_quiz;
  }

  buttonClick(): void{

    // Questo è quello che succede quando premiamo il bottone SCEGLI SEDE
    let url = "http://localhost:8080/api/sedi"
    let urladd = "http://localhost:8080/api/delsede?codice="
    let urlgetdata = "http://localhost:8080/api/date" 
    console.log("Ecco il codice: ");
    console.log(this.codice);
    this.calendarioService.getDateBySede(this.codice).subscribe((data: Calendario[]) => {
      console.log("BUTTON DATA\n");
      console.log(data);
      this.date = data;
      this.ind = this.id;
      this.changeView('2');
    });

  }

  inviaData(): void{
    let newId = this.id;
    let newData = this.data;
    let newCodice = this.codice;
    let i = 0;
    while(this.id != this.date[i].id){
      i++;
    }
    newId = this.date[i].id;
    newData = this.date[i].data;
    newCodice = this.date[i].codice;

/*

    while(i < this.date.length){
      if(this.id == this.date[i].id){
        // Abbiamo trovato il nostro ID
        console.log("Siamo nell IF");
        newId = this.date[i].id;
        newData = this.date[i].data;
        newCodice = this.date[i].codice;
      }
      i++;
    }
*/
/*
    if((this.id-1)>this.date.length){
      console.log("siamo entrati nell'IF");
      newId = this.date[this.id-1-this.date.length].id;
      newData = this.date[this.id-1-this.date.length].data;
      newCodice = this.date[this.id-1-this.date.length].codice;
    }
    else{
      console.log("siamo entrati nell'else");
      newId = this.date[this.id-1].id;
      newData = this.date[this.id-1].data;
      newCodice = this.date[this.id-1].codice;
    }
*/
    //console.log(this.date[this.id-1].id);
    console.log(this.date);
    console.log("Ecco la data: ");
    console.log(this.data);
    let urlpostdate = "http://localhost:8080/api/deldata?id=";
    this.calendarioService.postDate(newId, newData, newCodice).subscribe(
            
      res => {location.reload},
      err => {alert("Errore in inviaData() in sede.component.ts")}
      //console.log("Sto inviando i dati al server...\n");
      //console.log(d);
    );
    console.log("Sto inviando i dati al server...");
  }


  // Cambiamo la view in base al valore che passiamo come parametro
  changeView(n: string): void{
    this.view=n;
  }


  ngOnInit(): void {
    // Questo avviene quando clicchiamo SEDI dal menù in alto
    this.view='0';
    this.sedeService.getSedi().subscribe((data: Sede[]) => {
      console.log(data);
      this.sedi = data;
    });
  }


}
