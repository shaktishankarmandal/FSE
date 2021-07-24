import { LoanModel } from "./loan-model";

export default interface SignInModel{
    id: string;
    userEmail: string;
    passWord: string;
    isUserLoggedIn: boolean;
    signInError: string;
}