import { Injectable } from "@angular/core";
import {Auth} from '@angular/fire/auth'

@Injectable({
    providedIn:'root'
})
export class FireAuthService{
    constructor(
        private auth: Auth
    ){

    }
}