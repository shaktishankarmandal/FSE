import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  OnRegister() : void {
    console.log("YOu have click on register");
    this.isFormSubmitted = true;
  }

  onChangeDocType(event: any){
    console.log("printing event", event);
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
