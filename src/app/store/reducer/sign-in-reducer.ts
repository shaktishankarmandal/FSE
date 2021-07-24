import { Action } from '@ngrx/store';
import SignInModel from 'src/app/model/sign-in-model';
import { SignInAction, SignInActionTypes } from '../action/sign-in-action-types';

const initialState: SignInModel = {
    id: "",
    userEmail: "",
    passWord: "",
    isUserLoggedIn: false,
    signInError: ""
}

export function SignInReducer(state: SignInModel = initialState, action: Action){
    const signInAction = action as SignInAction;
    switch(signInAction.type)
    {
        case SignInActionTypes.SIGN_IN:
            {
                return {
                    ...state,                   
                };
            }
        case SignInActionTypes.SIGN_IN_SUCCESS:
            {
                return{
                    ...state,  
                    id: signInAction.payLoad.id,                                 
                    isUserLoggedIn: signInAction.payLoad.isUserLoggedIn,
                    passWord: ""
                }
            }
        case SignInActionTypes.SIGN_IN_FAIL:
            {
                return{
                    ...state,                   
                    isUserLoggedIn: signInAction.payLoad.isUserLoggedIn
                }
            }
        default:
            {
                return state;
            }
    }
}