import { Action } from "@ngrx/store";
import SignUpModel from "src/app/model/sign-up-model";
import { SignUpActionTypes } from "./sign-up-action-type";


export class SignUpStartAction implements Action {
    readonly type = SignUpActionTypes.SIGN_UP;
    constructor(public payLoad: SignUpModel){}
}

export class SignUpSuccessAction implements Action {
    readonly type = SignUpActionTypes.SIGN_UP_SUCCESS;
    constructor(public payLoad: SignUpModel){}

}

export class SignUpFailureAction implements Action {
    readonly type = SignUpActionTypes.SIGN_UP_FAIL;
    constructor(public payLoad: SignUpModel){}
}