import { Component, OnInit } from '@angular/core';
import { HeaderServiceComponent } from '../services/header.service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderServiceComponent) { }

  ngOnInit(): void {
  }

  OnSignIn(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  };

  OnSignUp(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  }

}
