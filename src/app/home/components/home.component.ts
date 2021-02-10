import { HttpClient } from '@angular/common/http';
import { SedeService } from './../../sede/services/sede.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private sedeService: SedeService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

}
