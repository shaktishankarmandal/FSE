import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountSummaryModel } from "../model/account-summary-model";;

@Injectable({
    providedIn: 'root'
})

export class AccountSummaryService {

    constructor(private httpClient: HttpClient){}
    fetchAccountSummary(userData: any) {
        return this.httpClient.get<AccountSummaryModel>('https://jsonplaceholder.typicode.com/posts?_limit=10');
    }
}