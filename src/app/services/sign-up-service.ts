import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import SignUpModel from "../model/sign-up-model";

@Injectable({
    providedIn: 'root'
})

export class SignUpService {

    constructor(private httpClient: HttpClient){}
    createAccount(userData: SignUpModel) {
        return this.httpClient.get<SignUpModel>('https://jsonplaceholder.typicode.com/posts?_limit=10');
    }
}