import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects"
import { SignInAction, SignInActionTypes } from "../action/sign-in-action-types";
import { GetSignInAction, GetSignInActionFailure, GetSignInActionSuccess } from "../action/sign-in-action";
import { SignInService } from "src/app/services/sign-in-service";
import SignInModel from "src/app/model/sign-in-model";
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators'
import { Observable, of, pipe } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class SignInEffects {

    getSignIn$: Observable<Action> = createEffect((): any => this.action$.pipe
        (
            ofType<GetSignInAction>(SignInActionTypes.SIGN_IN),
            switchMap( (signInAction: GetSignInAction) => 
                {
                    return this.sigInService.signIn(signInAction.payLoad)
                    .pipe(
                        mergeMap( response =>
                        {
                            console.log("Returning action", new GetSignInActionSuccess(response));
                            return of(new GetSignInActionSuccess(response));
                        }),                        
                        catchError( error =>{
                            console.log("Returning action error", new GetSignInActionFailure(error))
                            return of(new GetSignInActionFailure(error))
                        })                        
                    )
                }  
            )
        )
    );
   

    constructor(public action$ : Actions, private sigInService: SignInService){}
  
}