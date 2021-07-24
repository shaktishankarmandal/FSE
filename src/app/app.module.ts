import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './body/signin/signin.component';
import { SignupComponent } from './body/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing-module';
import { ResetpasswordComponent } from './body/resetpassword/resetpassword.component';
import { HeaderServiceComponent } from './services/header.service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponentTemplateComponent } from './errortemplate/error-component-template/error-component-template.component';
import { FormGeneratorComponent } from './shared/form/form.component';
import { SideNavBarComponent } from './body/sidenavbar/sidenavbar.component';
import { AccountsummaryComponent } from './body/accountsummary/accountsummary.component';
import { ApplyloanComponent } from './body/applyloan/applyloan.component';
import { UpdatecustomerComponent } from './body/updatecustomer/updatecustomer.component';
import { LogInServiceComponent } from './services/logIn.service.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignInEffects } from './store/effects/sign-in-effects';
import { SignInReducer } from './store/reducer/sign-in-reducer';
import { AppReducer } from './store/app-reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    NotfoundComponent,
    ResetpasswordComponent,
    ErrorComponentTemplateComponent,
    AccountsummaryComponent,
    ApplyloanComponent,
    UpdatecustomerComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([SignInEffects])
  ],
  providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
 
  constructor(private headerService: HeaderServiceComponent){}
  ngOnInit():void
  {
    
  }
}
