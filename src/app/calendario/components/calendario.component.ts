import { HttpClient } from '@angular/common/http';
import { CalendarioService } from './../services/calendario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from './../../app-routing.module';
import { Calendario } from './../calendario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  private id!: number;
  date!: Calendario[]; // Lista di date Calendario
  data!: string; // Questa è una data (singola)
  dati!: string; // Questi sono i dati
  codice!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calendarioService: CalendarioService,
    private http: HttpClient
  ) { }

  buttonData(): void{
    let urldata = "http://localhost:8080/api/date";
    this.calendarioService.getDateBySede(this.codice).subscribe((dati: Calendario[]) => {
      console.log("BUTTON DATA\n");
      console.log(dati);
      this.date = dati;
    });
  }

  ngOnInit(): void {
    this.calendarioService.getDate().subscribe((dati: Calendario[]) => {
      console.log(dati);
      this.date = dati;
    });
  }

}
