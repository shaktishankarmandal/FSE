import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import 'src/app/shared/form/FormExtension.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  invalidEmail: string = "Please enter a valid email";
  invalidPassword: string = "Please enter valid password";
  isFormSubmitted: boolean = false;
  signInEvent : Observable<Event> = new Observable
  signInForm: FormGroup = new FormGroup({});

  constructor(private formGroup: FormGeneratorComponent) { }

  ngOnInit(): void {
    this.signInForm = this.formGroup.CreateFormGroup({fieldsName: ['userEmail', 'userPassword']});   
    this.isFormSubmitted = false;
  }

  OnSignIn = ():void =>{
    this.isFormSubmitted = true;
    if(this.signInForm.valid)
    {     
      this.signInForm.resetFields(['userPassword']);
      this.isFormSubmitted = false;
    } 
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.signInForm.get(fieldControlName);   
    console.log("Password value", control?.value);
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

  ValidateErrors(form: FormGroup) {
      Object.keys(form).forEach(element => {
          let field = form.get(element);
          if(field instanceof FormControl)
          {
            field.markAsTouched({onlySelf: true});
          }
          else if(field instanceof FormGroup)
          {
            this.ValidateErrors(field);
          }
      });
  }
}
