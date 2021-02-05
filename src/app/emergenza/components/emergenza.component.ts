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

  constructor(private emergenzaService: EmergenzaService) { }

  ngOnInit(): void {
    this.emergenzaService.getEmergenze().subscribe((data: Emergenza[]) => {
      console.log(data);
      this.emergenze = data;
    });
  }

}
