import { ActionReducerMap } from "@ngrx/store";
import { AccountSummaryModel } from "../model/account-summary-model";
import SignInModel from "../model/sign-in-model";
import * as fromSignInReducer from "./reducer/sign-in-reducer";
import * as fromAccountSummaryReducer from "./reducer/account-summary-reducer";
import * as fromSignUpReducer from "./reducer/sign-up-reducer";
import SignUpModel from "../model/sign-up-model";

export interface AppState{
    signIn: SignInModel,
    signUp: SignUpModel,
    accountSummary: AccountSummaryModel
}

export const AppReducer: ActionReducerMap<AppState> = {
    signIn: fromSignInReducer.SignInReducer,
    signUp: fromSignUpReducer.SignInReducer,
    accountSummary : fromAccountSummaryReducer.AccountSummaryReducer,
}