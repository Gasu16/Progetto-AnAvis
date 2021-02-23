import { Prenotazione } from './../../prenotazione/prenotazione';
import { Visualizzaprenotazioni } from './../visualizzaprenotazioni';
import { Calendario } from './../../calendario/calendario';
import { VisualizzaprenotazioniService } from './../services/visualizzaprenotazioni.service';
import { HttpClient } from '@angular/common/http';
import { CalendarioService } from './../../calendario/services/calendario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizzaprenotazioni',
  templateUrl: './visualizzaprenotazioni.component.html',
  styleUrls: ['./visualizzaprenotazioni.component.css']
})
export class VisualizzaprenotazioniComponent implements OnInit {

  id!: number;
  codice!: number;
  prenotazioni!: Prenotazione[];
  data!: string;
  citta!: string;
  codiceFiscale!: string;
  visualizzaPrenotazioni!: Visualizzaprenotazioni[];
  public view_prenotazioni!: string;

  calendari!: Calendario[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calendarioService: CalendarioService,
    private visualizzaprenotazioniService: VisualizzaprenotazioniService,
    private http: HttpClient
  ) { }
  
  inoltraDatiPrenotazioni(): void{
    this.visualizzaprenotazioniService.inviaPrenotazioni(this.citta, this.data).subscribe(
      res => {location.reload},
      err => {alert("Errore in inoltraDatiPrenotazioni() in visualizzaprenotazioni.component.ts")}
    )
    console.log("Sto richiedendo le prenotazioni dal server...");
    this.getPrenotazioneCittaData();
    this.view_prenotazioni = '2';
  }

  getPrenotazioneCittaData(): void{
    this.visualizzaprenotazioniService.getPrenotazioniByCittaAndData(this.citta, this.data).subscribe((dati: Prenotazione[]) => {
      console.log(dati);
      this.prenotazioni = dati;
    });
    console.log("SONO STATO INVOCATO");
  }

  ngOnInit(): void {
    this.view_prenotazioni = '1';
  }

}
