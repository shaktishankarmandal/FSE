import { Subject } from "rxjs";

export class HeaderServiceComponent{
    headerEventAction = new Subject<string>();
}