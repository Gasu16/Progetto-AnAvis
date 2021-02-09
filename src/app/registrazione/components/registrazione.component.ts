import { HttpClient } from '@angular/common/http';
import { RegistrazioneService } from './../services/registrazione.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private registrazioneService: RegistrazioneService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.registrazioneService.gotoRegistrazione();
  }

}
