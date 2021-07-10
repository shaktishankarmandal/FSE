import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  invalidEmail: string = "Please enter a valid email";
  invalidPassword: string = "Please enter valid password";
  mismatchPassword: string = "password/Confirm password does not match"
  isFormSubmitted: boolean = false;
  resetPasswordForm: FormGroup = new FormGroup({});
  
  constructor(private formGroup: FormGeneratorComponent) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formGroup.CreateFormGroup({fieldsName: ['userEmail', 'userPassword', 'confPassword']});
    this.isFormSubmitted = false;
  }

  OnResetPassword = ():void =>
  {
    this.isFormSubmitted = true;
    if(this.resetPasswordForm.valid)
    {
      console.log("reseting password", this.resetPasswordForm);
    }
  }

  OnMouseEnter = ():void =>{
    console.log("formConteol", this.resetPasswordForm);
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.resetPasswordForm.get(fieldControlName);   
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
