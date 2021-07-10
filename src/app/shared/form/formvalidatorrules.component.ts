import { AbstractControl, FormControl, ValidatorFn, Validators } from "@angular/forms";

 export class FormValidatorRules {
    emailRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.email, Validators.minLength(10)];
    passwordRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&-+=()]).{8}/)];
    confPasswordRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&-+=()]).{8}/), this.passwordMismatchValidator];
    rules = new Map<string, ValidatorFn | ValidatorFn[] | null>();
    
    constructor()
    {
        this.rules.set("userEmail", this.emailRule);
        this.rules.set("userPassword", this.passwordRule);
        this.rules.set("confPassword", this.confPasswordRule);
    }

    passwordMismatchValidator(confPasswordCrtl: AbstractControl) : {[key: string]: boolean} | null
    {       
        if(confPasswordCrtl.parent === null)
        {
            return null;
        }

        var password = confPasswordCrtl.parent.get('userPassword');
        var confPassword = confPasswordCrtl.parent.get('confPassword');

        if(password && confPassword)
        {
            if(password.value !== confPassword.value)
            {
                return {
                    'isPasswordMismatched' :  true                 
                }
            }
        }
        return null;        
    }
}