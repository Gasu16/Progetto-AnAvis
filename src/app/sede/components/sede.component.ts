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
  sedeS!: SedeService;
  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private sedeService: SedeService,
    private http: HttpClient
  ) { }

  buttonClick(): void{
    //alert("lmaooooo");
    let url = "http://localhost:8080/api/sedi"
    let urladd = "http://localhost:8080/api/delsede?codice="
/*    this.http.post(urladd+this.codice, this.codice).subscribe(
      res => {location.reload},
      err => {alert("Errore nella richiesta POST [sede.component.ts]")}
    );*/
    this.http.get(url+"/"+this.codice).subscribe(
      res => {location.reload},
      err => {alert("Errore nella richiesta GET [sede.component.ts]")}
    );
  }

  ngOnInit(): void {
    this.sedeService.getSedi().subscribe((data: Sede[]) => {
      console.log(data);
      this.sedi = data;
    });
  }


}
