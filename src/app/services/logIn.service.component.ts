import { Subject } from "rxjs";

export class LogInServiceComponent{
    logInEventAction = new Subject<boolean>();
}