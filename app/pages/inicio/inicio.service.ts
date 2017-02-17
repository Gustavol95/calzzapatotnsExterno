import {HttpService} from "../../custom-http/http-service";
import {Injectable} from "@angular/core";
/**
 * Created by iedeveloper on 16/02/17.
 */
@Injectable()
export class InicioService {

    constructor(private http: HttpService) {
    }

    getClienteInfo(id) {
        return this.http.get("clientes/"+id+"/saldo").map(response => response.json());
    }

    //Ver que es sincronizacion
}