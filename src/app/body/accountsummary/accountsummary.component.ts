import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  numbers: number[];
  constructor() {
    this.numbers = Array(10).fill(0).map((x, i)=> i )
   }

  ngOnInit(): void {
  }

}
