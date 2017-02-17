import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class ClienteService {

    constructor(private http: HttpService) {
    }

    index() {
        return this.http.get("subclientes").map(response => response.json());
    }
}
