import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderServiceComponent } from '../services/header.service.component';
import { LogInServiceComponent } from '../services/logIn.service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(private headerService: HeaderServiceComponent, private logInService: LogInServiceComponent) { 
    this.logInService.logInEventAction.subscribe(value => {
      if(value !== undefined)
      {
        this.isUserLoggedIn = true;
      }
    });
  }

  ngOnInit(): void {    
  }

  OnSignIn(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  };

  OnSignUp(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  }

  OnApplyLoan(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  }

  OnUpdateCustomer(eventData: string){
    this.headerService.headerEventAction.next(eventData);
  }

  OnLogOut(eventData: string){
    this.isUserLoggedIn = false;
    this.headerService.headerEventAction.next(eventData);
  }

}
