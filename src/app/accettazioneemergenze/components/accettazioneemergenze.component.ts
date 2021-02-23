import { Emergenza } from './../../emergenza/emergenza';
import { AccettazioneemergenzeService } from './../services/accettazioneemergenze.service';
import { EmergenzaService } from './../../emergenza/services/emergenza.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accettazioneemergenze',
  templateUrl: './accettazioneemergenze.component.html',
  styleUrls: ['./accettazioneemergenze.component.css']
})
export class AccettazioneemergenzeComponent implements OnInit {

  emergenze!: Emergenza[];
  id!: number;
  citta!: string;
  gruppoSanguigno!: string;
  codiceEmergenza!: string;
  public view_emergenza!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private emergenzaService: EmergenzaService,
    private accettazioneEmergenzeService: AccettazioneemergenzeService,
    private http: HttpClient
  ) { }

  getAllEmergenze(): void{
    this.accettazioneEmergenzeService.getAccettazioniEmergenze().subscribe((dati: Emergenza[]) => {
      console.log(dati);
      this.emergenze = dati;      
    });
    this.view_emergenza = '3';
  }

  getEmergenzeByCitta(): void{
    this.accettazioneEmergenzeService.getAccettazioniEmergenzeByCitta(this.citta).subscribe((dati: Emergenza[]) => {
      console.log(dati);
      this.emergenze = dati;
    });
    this.view_emergenza = '3';
  }

  ngOnInit(): void {
    this.view_emergenza = '1';
  }

}
