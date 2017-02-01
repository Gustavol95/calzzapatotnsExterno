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
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post("login",
            JSON.stringify({
                email: user.email,
                password: user.password,
                grant_type: "password"
            }),
            {headers: headers}
        )
            .map(response => response.json())
            .do(data => {
                console.log("dato => ", JSON.stringify(data));
                Config.token = data.token;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log("errores", JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
