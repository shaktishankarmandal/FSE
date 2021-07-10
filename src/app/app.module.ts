import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ErrorComponentTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeaderServiceComponent, FormGeneratorComponent],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
 
  constructor(private headerService: HeaderServiceComponent){}
  ngOnInit():void
  {
    
  }
}
