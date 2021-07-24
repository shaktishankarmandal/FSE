import { Action } from "@ngrx/store";
import { AccountSummaryModel } from "src/app/model/account-summary-model";
import { AccountSummaryAction, AccountSummaryActionTypes } from "../action/account-summary-actiontype";


const initialState: AccountSummaryModel ={
    name:"",
    amount: "",
    customerId: "",
    phonenumber:0,
    email: "",
    accountType: [],
    loans: []
}

export function AccountSummaryReducer(state: AccountSummaryModel = initialState, action: Action){

    const accountSummaryAction = action as AccountSummaryAction;
    switch(accountSummaryAction.type)
    {   
        case AccountSummaryActionTypes.ACCCOUNT_SUMMARY_START:
            {
                return{
                    ...state
                }
            }  
        case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_START:
            {
                return{
                    ...state
                }
            }
        case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_SUCCESS:
            {
                return{
                    ...state
                }
            }
            case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_FAILED:
            {
                return{
                    ...state
                }
            }
        default:
            {
                return state;
            }
    }
}