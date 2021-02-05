import { DonatoreService } from './../services/donatore.service';
import { Donatore } from './../donatore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donatore',
  templateUrl: './donatore.component.html',
  styleUrls: ['./donatore.component.css']
})
export class DonatoreComponent implements OnInit {

  donatori!: Donatore[];

  constructor(private donatoreService: DonatoreService) { }

  ngOnInit(): void {
    this.donatoreService.getDonatori().subscribe((data: Donatore[]) => {
      console.log(data);
      this.donatori = data;
    });
  }

}
