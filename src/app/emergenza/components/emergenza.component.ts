import { HttpClient } from '@angular/common/http';
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
  donatoriRichiesti!: number;
  public emergenza_view!: string;


  constructor(
    private emergenzaService: EmergenzaService,
    http: HttpClient
  ) { }

  inviaRichiesta(): void{ 

    this.emergenzaService.inoltraRichiestaEmergenza(this.codiceEmergenza, this.citta, this.gruppoSanguigno).subscribe(
      res => {location.reload},
      err => {alert("Errore in inviaRichiesta() in emergenza.component.ts")}
    );
    
  }

  ngOnInit(): void {
    this.emergenza_view = '0';
    this.emergenzaService.getEmergenze().subscribe((data: Emergenza[]) => {
      console.log("EMERGENZA");
      console.log(data);
      this.emergenze = data;
    });
  }

}