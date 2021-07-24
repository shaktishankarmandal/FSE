import { LoanModel } from "./loan-model";

export interface AccountSummaryModel {
    name:string,
    amount: string,
    customerId: string,
    phonenumber: number,
    email: string,
    accountType: AccountTypeModel[],
    loans: LoanModel[]

}

export interface AccountTypeModel {
    typeId: string,
    accountType: string,
    currentBalance: number,
    ledgerBalance: number
}