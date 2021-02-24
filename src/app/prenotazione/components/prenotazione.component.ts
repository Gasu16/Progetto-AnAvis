import { PrenotazioneService } from '../../prenotazione/services/prenotazione.service';
import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../prenotazione/prenotazione';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  prenotazioni!: Prenotazione[];

  constructor(private prenotazioneService: PrenotazioneService) { }


  ngOnInit(): void {
    this.prenotazioneService.getPrenotazioni().subscribe((data: Prenotazione[]) => {
      console.log(data);
      this.prenotazioni = data;
    });

  }

}
