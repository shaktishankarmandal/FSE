import { NgModule, OnInit } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ResetpasswordComponent } from "./body/resetpassword/resetpassword.component";
import { SigninComponent } from "./body/signin/signin.component";
import { SignupComponent } from "./body/signup/signup.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes = [
    {path: '', redirectTo:"signin", pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'resetpassword', component: ResetpasswordComponent},
    {path: '*', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule implements OnInit{

    constructor(){
        
    }
    ngOnInit():void {

    }
}