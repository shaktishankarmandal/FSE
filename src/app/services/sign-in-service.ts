import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import SignInModel from "../model/sign-in-model";

@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private httpClient: HttpClient){}
    signIn(userData: SignInModel) {
        return this.httpClient.post<SignInModel>('https://localhost:5001/Authenticate/signin',userData, {
            headers: {
                'Accept': 'Application/json, text/plain',   
                'content-type': 'application/json'
            },
            withCredentials: false
        });
    }
}