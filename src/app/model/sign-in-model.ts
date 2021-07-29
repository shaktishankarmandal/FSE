import { LoanModel } from "./loan-model";

export default interface SignInModel{
    userEmail: string;
    passWord: string;
    isUserLoggedIn: boolean;
    signInError: string;
}