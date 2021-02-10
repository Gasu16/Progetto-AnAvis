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
  data!: string;

  //view = '1';
  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private sedeService: SedeService,
    private http: HttpClient
  ) { }

  
  buttonClick(): void{
    // Questo è quello che succede quando premiamo il bottone SCEGLI SEDE
    let url = "http://localhost:8080/api/sedi"
    let urladd = "http://localhost:8080/api/delsede?codice="
    let urlgetdata = "http://localhost:8080/api/date" 

    // Ci ritorna in pagina la sede che abbiamo scelto in base al codice
    // Praticamente leggiamo la risposta alla richiesta http GET che abbiamo mandato a spring
    // E con this.sedi = data poi la stampiamo nel file sede.component.html
    // Precisamente dove c'è il ciclo for: *ngFor = "let sede of sedi"
    this.sedeService.getSediparam(this.codice).subscribe((data: Sede[]) => {
      console.log("GET SEDI PARAM\n");
      console.log(data);
      this.sedi = data;

      // Serve a navigare in un'altra pagina passandogli il link
//      this.router.navigateByUrl("sedi/"+data);
    });

    // Qui mandiamo una richiesta http GET per conoscere le date
    this.http.get(urlgetdata).subscribe(
      res => {location.reload},
      err => {alert("Errore nel get date [sede.component.ts]")}
    );
    //this.view = '2';
    
  }


  ngOnInit(): void {
    // Questo avviene quando clicchiamo SEDI dal menù in alto
    this.sedeService.getSedi().subscribe((data: Sede[]) => {
      console.log(data);
      this.sedi = data;
    });
  }


}
