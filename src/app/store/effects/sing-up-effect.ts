import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects"
import { SignInAction, SignInActionTypes } from "../action/sign-in-action-types";
import { GetSignInAction, GetSignInActionFailure, GetSignInActionSuccess } from "../action/sign-in-action";
import { SignInService } from "src/app/services/sign-in-service";
import SignInModel from "src/app/model/sign-in-model";
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators'
import { Observable, of, pipe } from "rxjs";
import { Action } from "@ngrx/store";
import { SignUpFailureAction, SignUpStartAction, SignUpSuccessAction } from "../action/sign-up-action";
import { SignUpActionTypes } from "../action/sign-up-action-type";
import { SignUpService } from "src/app/services/sign-up-service";

@Injectable()
export class SignUpEffects {

    getSignIn$: Observable<Action> = createEffect((): any => this.action$.pipe
        (
            ofType<SignUpStartAction>(SignUpActionTypes.SIGN_UP),
            switchMap( (signUpAction: SignUpStartAction) => 
                {
                    return this.sigUpService.createAccount(signUpAction.payLoad)
                    .pipe(
                        mergeMap( response =>
                        {                         
                            return of(new SignUpSuccessAction(response));
                        }),                        
                        catchError( error =>{
                          
                            return of(new SignUpFailureAction(error))
                        })                        
                    )
                }  
            )
        )
    );
    constructor(public action$ : Actions, private sigUpService: SignUpService){}
  
}