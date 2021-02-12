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

  private id!: number;
  sedi!: Sede[];
  codice!: string;
  data!: string;
//  dateCal!: CalendarioComponent;
  date!: Calendario[]; // Lista di date Calendario
  view = '1';
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
      this.view='2';
    });

  }

  inviaData(): void{
    console.log("Ecco la data: ");
    console.log(this.data);
    let urlpostdate = "http://localhost:8080/api/deldata?data=";
    this.calendarioService.postDate(this.data).subscribe(
            
      res => {location.reload},
      err => {alert("Errore in inviaData() in sede.component.ts")}
      //console.log("Sto inviando i dati al server...\n");
      //console.log(d);
    );
    console.log("Sto inviando i dati al server...");
  }


  ngOnInit(): void {
    // Questo avviene quando clicchiamo SEDI dal menù in alto
    this.sedeService.getSedi().subscribe((data: Sede[]) => {
      console.log(data);
      this.sedi = data;
    });
  }


}
