import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// import 'src/app/shared/form/FormExtension.component';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

  invalidEmail: string = "Please enter a valid email";
  invalidPassword: string = "Please enter valid password";
  invalidLoanType: string = "";
  InvalidLoanAmount: string = "";
  invalidApplyDate: string = "";
  invalidIssueDate: string = "";
  invalidInterestRate: string = "";
  invalidLoanDuration: string = "";
  InvalidcourseFee: string = "";
  Invalidcourse: string = "";
  invalidFatherName: string = "";
  invalidOccupation: string = "";
  invalidExp: string = "";
  invalidCurrentExp: string = "";
  invalidRationCardNo: string = ""; 
  InvalidAnnualIncome: string = "";
  InvalidCompanyName: string = "";
  invalidDesignation: string = "";
  invalidEmpExp: string = "";
  InvalidEmpCurExp: string = "";

  isFormSubmitted: boolean = false;
  signInEvent : Observable<Event> = new Observable
  signInForm: FormGroup = new FormGroup({});
  
  constructor() { }

  ngOnInit(): void {
  }


  IsAValidField(fieldControlName: string)
  {    
    var control = this.signInForm.get(fieldControlName);
    if(control !== undefined && control !== null)
    {
      if(control.touched === false && this.isFormSubmitted === true)
      {        
          return true;
      }

      if(control.touched)
      {
        var isValidated = !control.valid && control.touched;         
        return isValidated;
      }
    }
    return false;
  }

  DisplayErrorClass(field: string)
  {
    return({
      'has-error' : this.IsAValidField(field)
    });
  }

  OnApplyLoan()
  {

  }

}
