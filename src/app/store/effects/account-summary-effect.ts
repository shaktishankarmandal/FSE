import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import { AccountSummaryService } from "src/app/services/account-summary-service";
import { FetchAccountSummaryActionStart, FetchAccountSummaryFailureAction, FetchAccountSummarySuccessAction } from "../action/account-summary-action";
import { AccountSummaryAction, AccountSummaryActionTypes } from "../action/account-summary-actiontype";

@Injectable()
export class AccountSummaryEffect {

    constructor(private actions: Actions, private service: AccountSummaryService){}

    fetchAccountSummary$ = createEffect(() => {
        return this.actions.pipe(
            ofType<FetchAccountSummaryActionStart>(AccountSummaryActionTypes.ACCCOUNT_SUMMARY_START),
            switchMap((action: AccountSummaryAction) =>{
                return this.service.fetchAccountSummary(action.payload)
                .pipe(
                    mergeMap(response => {
                        return of(new FetchAccountSummarySuccessAction(response))
                    }),
                    catchError(error => {
                        return of(new FetchAccountSummaryFailureAction(error))
                    })
                )
            })
        )
    })
}