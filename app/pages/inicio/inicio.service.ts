import {HttpService} from "../../custom-http/http-service";
import {Injectable} from "@angular/core";
/**
 * Created by iedeveloper on 16/02/17.
 */
@Injectable()
export class InicioService {

    constructor(private http: HttpService) {
    }

    getClienteInfo(codigoCliente) {
        return this.http.get("saldosSoap/"+codigoCliente).map(response => response.json());
    }

    //Ver que es sincronizacion
}