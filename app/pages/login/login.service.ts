import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {User} from "./user.class";
import {Config} from "../../shared/config";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class LoginService {

    constructor(private http: HttpService) {
    }

    login(user: User) {
        console.log("Va a hacer login");
        return this.http.login("login", {email: user.email,password: user.password}).map(response => response.json());
    }

    sincronizacion(){

    }
}
