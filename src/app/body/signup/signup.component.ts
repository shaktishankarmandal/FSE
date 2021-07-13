import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  readonly fieldsName = [
  "name",
  "userName",
  "userEmail",
  "userPassword",
  "userMobile",
  "userDOB",
  "userAddress",
  "userState",
  "userCountry",
  "userCitizenship",
  "userCitizenStatus",
  "userGender",
  "userDocProof",
  "userDocNo",
  "userAccountType",
  "userBranchNamne",
  "userDepositAmount",
  "userRegDate",
  "userRefAccHolderName",
  "userAccHolderAccNo",
  "userAccHolderAddress",
  "userGuardianType",
  "userGuardianName",
  "userMaritalStatus"];

  invalidName:string = "Please enter a valid name";
  signUpFormGroup: FormGroup  = new FormGroup({});
  isFormSubmitted: boolean = false;
  constructor(private formGroup: FormGeneratorComponent) { }

  ngOnInit(): void {

    this.signUpFormGroup = this.formGroup.CreateFormGroup({fieldsName: this.fieldsName});
    this.SetDovumentTypeValidator();
    this.SetAccountTypeBasedOnAmount();
    this.CreatePaginationForm();    
  }

  CreatePaginationForm() {
    var formContainerElement = document.getElementById("form-container-id"); 
    var firstNextElement = document.getElementById("firstNextElement");
    var secondNextElement = document.getElementById("secondNextElement");
    var thirdNextElement = document.getElementById("thirdNextElement");
    var fourthNextElement = document.getElementById("fourthNextElement");
    var firstPrevElement = document.getElementById("firstPrevElement");
    var secondPrevElement = document.getElementById("secondPrevElement");
    var thirdPrevElement = document.getElementById("thirdPrevElement");

    firstNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      secondNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
      thirdNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-300%";
      });
      fourthNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-400%";
      });
      firstPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "0%";
      });
      secondPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      thirdPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
  }

  SetDovumentTypeValidator() {
    if(this.signUpFormGroup)
    {
      var documentTypeSelection = this.signUpFormGroup.get("userDocProof");
      if(documentTypeSelection)
      {
        documentTypeSelection.valueChanges.subscribe( selectedDocType => this.OnValueChange(selectedDocType))
      }
    }
  }

  OnAmountValueChange = (depositAmount: string):void =>
  {
      if(depositAmount !== null)
      {
        var accountTypeControl = this.signUpFormGroup.get("userAccountType"); 
        if(accountTypeControl !== null)
        {
          parseInt(depositAmount) === 5000 ? accountTypeControl.setValue("Saving") : accountTypeControl.setValue("Salary");
          accountTypeControl.updateValueAndValidity();
        }
      }
  }

  SetAccountTypeBasedOnAmount()
  {
    if(this.signUpFormGroup)
    {
      var depositAmountControl = this.signUpFormGroup.get("userDepositAmount");
      if(depositAmountControl)
      {
        depositAmountControl.valueChanges.subscribe( depositAmount => this.OnAmountValueChange(depositAmount))
      }
    }
  }

  OnValueChange = (selectedDocType: string): void =>{
    if(selectedDocType)
    {
       var documentNoControl = this.signUpFormGroup.get("userDocNo");    
       if(documentNoControl !== null)
       {
        selectedDocType === "PAN Card" ? 
         documentNoControl.setValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]) :
         documentNoControl.setValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/)]);
         documentNoControl.updateValueAndValidity();
       }
    }
  }

  // OnAmountValueChange = (depositAmount: string):void =>
  // {
  //     if(depositAmount !== null)
  //     {
  //       var accountTypeControl = this.signUpFormGroup.get("userAccountType"); 
  //       if(accountTypeControl !== null)
  //       {
  //         parseInt(depositAmount) === 5000 ? accountTypeControl.setValue("Saving") : accountTypeControl.setValue("Salary");
  //         accountTypeControl.updateValueAndValidity();
  //       }
  //     }
  // }

  OnRegister() : void {
    console.log("YOu have click on register");
    this.isFormSubmitted = true;
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.signUpFormGroup.get(fieldControlName);
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

}
