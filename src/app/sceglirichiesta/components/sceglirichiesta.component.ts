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

  emergenze!: Emergenza[];
  codiceEmergenza!: string;
  citta!: string;
  gruppoSanguigno!: string;
  public scelta_emergenza_view!: string;

  constructor(
    private sceglirichiestaService: SceglirichiestaService,
    http: HttpClient
  ) { }


  elencaEmergenze(): void{
    this.sceglirichiestaService.scegliEmergenze(this.citta).subscribe((data: Emergenza[]) => {
      console.log(data);
      this.emergenze = data;
    });
    this.scelta_emergenza_view = '1';
  }


  ngOnInit(): void {
    this.scelta_emergenza_view = '0';
    //this.elencaEmergenze();
  }

}
