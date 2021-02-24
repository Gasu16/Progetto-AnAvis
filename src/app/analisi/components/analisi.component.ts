import { Analisi } from './../analisi';
import { AnalisiService } from './../services/analisi.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisi',
  templateUrl: './analisi.component.html',
  styleUrls: ['./analisi.component.css']
})
export class AnalisiComponent implements OnInit {

  analisi!: Analisi[];
  id!: number;
  codiceFiscale!: string;
  emoglobina!: string;
	globuli_bianchi!: string;
	globuli_rossi!: string;
	piastrine!: string;

  public view_analisi!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private analisiService: AnalisiService, 
    private http: HttpClient
  ) { }

  getAnalisi(): void{
    this.analisiService.getAnalisi().subscribe((dati: Analisi[]) => {
      console.log(dati);
      this.analisi = dati;
    });
  }

  postAnalisi(): void{
    this.analisiService.inviaAnalisi(this.codiceFiscale, this.emoglobina, this.globuli_bianchi, this.globuli_rossi, this.piastrine).subscribe(
      res => {location.reload},
      err => {alert("Errore in postAnalisi() in analisi.component.ts")}  
    );
    console.log("Sto inviando i dati al server...");
  }

  ngOnInit(): void {
    this.view_analisi = '1';
  }

}
