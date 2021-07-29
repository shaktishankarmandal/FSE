import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import SignUpModel from "../model/sign-up-model";

@Injectable({
    providedIn: 'root'
})

export class SignUpService {

    constructor(private httpClient: HttpClient){}
    createAccount(userData: SignUpModel) {
        console.log("I am in the service", userData);
        return this.httpClient.post<SignUpModel>('https://localhost:5001/Authenticate/CreateAccount',userData, {
            headers: {
                'Accept': 'Application/json, text/plain',
                'content-type': 'application/json'
            },
            withCredentials: false
        });
    }
}