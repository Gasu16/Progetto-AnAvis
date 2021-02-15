import { HttpClient } from '@angular/common/http';
import { PrenotazioneService } from './../../prenotazione/services/prenotazione.service';
import { Emergenza } from './../emergenza';
import { EmergenzaService } from './../services/emergenza.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergenza',
  templateUrl: './emergenza.component.html',
  styleUrls: ['./emergenza.component.css']
})
export class EmergenzaComponent implements OnInit {

  emergenze!: Emergenza[];
  codiceEmergenza!: string;
  citta!: string;
  gruppoSanguigno!: string;


  constructor(
    private emergenzaService: EmergenzaService,
    http: HttpClient
    ) { }

  inviaRichiesta(): void{ 

    this.emergenzaService.inoltraRichiestaEmergenza(this.codiceEmergenza, this.citta, this.gruppoSanguigno).subscribe((data: Emergenza[]) => {
      console.log(data);
      this.emergenze = data;
    });
    
  }


  ngOnInit(): void {
    this.emergenzaService.getEmergenze().subscribe((data: Emergenza[]) => {
      console.log(data);
      this.emergenze = data;
    });
  }

}
