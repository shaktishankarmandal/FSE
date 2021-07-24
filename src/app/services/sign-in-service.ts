import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import SignInModel from "../model/sign-in-model";

@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private httpClient: HttpClient){}
    signIn(userData: SignInModel) {
        return this.httpClient.get<SignInModel>('https://jsonplaceholder.typicode.com/posts?_limit=10');
    }
}