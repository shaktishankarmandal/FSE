import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
// import 'src/app/shared/form/FormExtension.component';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

  invalidEmail: string = "Please enter a valid email";
  invalidPassword: string = "Please enter valid password";
  invalidLoanType: string = "Please enter valid loan type";
  InvalidLoanAmount: string = "Please enter valid loan amount";
  invalidApplyDate: string = "Please enter valid apply date";
  invalidIssueDate: string = "Please enter valid issue date";
  invalidInterestRate: string = "Please enter valid interest rate";
  invalidLoanDuration: string = "Please enter valid duration";
  InvalidcourseFee: string = "Please enter valid course fee";
  Invalidcourse: string = "Please enter valid course";
  invalidFatherName: string = "Please enter valid father name";
  invalidOccupation: string = "Please enter valid occupation";
  invalidExp: string = "Please enter valid Experience";
  invalidCurrentExp: string = "Please enter valid current experience";
  invalidRationCardNo: string = "Please enter valid card no"; 
  InvalidAnnualIncome: string = "Please enter valid Income";
  InvalidCompanyName: string = "Please enter valid company";
  invalidDesignation: string = "Please enter valid designation";
  invalidEmpExp: string = "Please enter total experience";
  InvalidEmpCurExp: string = "Please enter current experience";

  isFormSubmitted: boolean = false;
  isPersonalLoan: boolean = false;
  applyLoanEvent : Observable<Event> = new Observable
  applyLoanForm: FormGroup = new FormGroup({});

  readonly fieldsName = [
    "loanType",
    "loanAmount",
    "loanApplyDate",
    "loanIssueDate",
    "rateOfInterest",
    "loanDuration",
    "courseFee",
    "course",
    "fatherName",
    "fatherOccupation",
    "fatherTotalExp",
    "fatherTotalCurrentExp",
    "rationCardNo",
    "annualIncome",
    "annualPersonalIncome",
    "companyName",
    "designation",
    "employeeTotaleExp",
    "expCurrentCompany"];
  
  constructor(private formGroup: FormGeneratorComponent) { }

  ngOnInit(): void {

    this.applyLoanForm = this.formGroup.CreateFormGroup({fieldsName: this.fieldsName});
    this.SetFiledsBasedOnLoanType();
  }

  SetFiledsBasedOnLoanType()
  {
    if(this.applyLoanForm)
    {
      // var loanType = this.applyLoanForm.get("loanType");
      // if(loanType)
      // {
      //   loanType.valueChanges.subscribe( selectetypedDocType => this.OnLoanTypeValueChange(selectetypedDocType))
      // }
    }
  }
  OnLoanTypeValueChange(selectedDocType: any): void {
         
    if(selectedDocType !== null && selectedDocType !== undefined)
    {
     selectedDocType === "Personal Loan" ? this.isPersonalLoan = true : this.isPersonalLoan = false;
    }
  }

  OnValueChange(selectedDocType: any): void {
  }


  IsAValidField(fieldControlName: string)
  {    
    var control = this.applyLoanForm.get(fieldControlName);
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
