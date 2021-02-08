import { SedeService } from './../services/sede.service';
import { Sede } from './../sede';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  sedi!: Sede[];

  constructor(
    private route: ActivatedRoute ,
    private sedeService: SedeService
  ) { }

  ngOnInit(): void {
    this.sedeService.getSedi().subscribe((data: Sede[]) => {
      console.log(data);
      this.sedi = data;
    });
  }

}
