import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import 'src/app/shared/form/FormExtension.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { fromEvent, Observable } from 'rxjs';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import {Router} from '@angular/router';
import SignInModel from 'src/app/model/sign-in-model';
import { Store } from '@ngrx/store';
import { GetSignInAction } from 'src/app/store/action/sign-in-action';

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
  signInData: SignInModel = {
    userEmail:"", 
    passWord:"", 
    isUserLoggedIn: false, 
    signInError: ""};

  constructor(private formGroup: FormGeneratorComponent, 
    private logInService: LogInServiceComponent,
    private store : Store<SignInModel>,
    private _router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formGroup.CreateFormGroup({fieldsName: ['userEmail', 'userPassword']}); 
    this.store.select(item => item).subscribe(responseData => this.OnUserLoggedIn);
    this.isFormSubmitted = false;
  }

  OnUserLoggedIn(userData: SignInModel)
  {
      if(userData !== null)
      {
        this.isFormSubmitted = userData.isUserLoggedIn;

      }
  }

  OnSignIn = ():void =>{
    this.isFormSubmitted = true;
    if(this.signInForm.valid)
    {   
      this.signInData =  this.GetSignInData();
      this.signInForm.resetFields(['userEmail','userPassword']);  
      this.store.dispatch(new GetSignInAction(this.signInData));
      this.logInService.logInEventAction.next(this.isFormSubmitted);
      //this._router.navigateByUrl('/accountsummary');
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

  GetSignInData(): SignInModel {
    this.signInData = {userEmail: "", passWord: "", isUserLoggedIn: false, signInError: ""};
    if(this.signInForm.value)
    {
      this.signInData.passWord = this.signInForm.value.userPassword;
      this.signInData.userEmail = this.signInForm.value.userEmail
    }

    return this.signInData;
 } 
}

