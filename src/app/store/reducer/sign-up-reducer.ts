import { Action } from '@ngrx/store';
import SignUpModel from 'src/app/model/sign-up-model';
import { SignUpAction, SignUpActionTypes } from '../action/sign-up-action-type';

const initialState: SignUpModel = {
    id: "",
    name: "",
    userName: "",
    userMobile: 0,
    userDOB: new Date(),
    userAddress: "",
    userState: "",
    userCountry: "",
    userCitizenship: "",
    userCitizenStatus: "",
    userGender: "",
    userDocProof: "",
    userDocNo: "",
    userAccountType: "",
    userBranchNamne: "",
    userDepositAmount: "",
    userRegDate: new Date(),
    userRefAccHolderName: "",
    userAccHolderAddress: "",
    userGuardianType: "",
    userGuardianName: "",
    userMaritalStatus: "",
}

export function SignInReducer(state: SignUpModel = initialState, action: Action){
    const signUpAction = action as SignUpAction;
    switch(signUpAction.type)
    {
        case SignUpActionTypes.SIGN_UP:
            {
                return {
                    ...state,                   
                };
            }
        case SignUpActionTypes.SIGN_UP_SUCCESS:
            {
                return{
                    ...state,  
                    id: signUpAction.payLoad.id,                                 
                    isUserLoggedIn: signUpAction.payLoad.isUserLoggedIn,
                    passWord: ""
                }
            }
        case SignUpActionTypes.SIGN_UP_FAIL:
            {
                return{
                    ...state,                   
                    isUserLoggedIn: signUpAction.payLoad.isUserLoggedIn
                }
            }
        default:
            {
                return state;
            }
    }
}