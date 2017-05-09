import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class ValeService {

    constructor(private http: HttpService) {
    }

    index(cliente_id) {
        return this.http.get("clientes/"+cliente_id+"/vales").map(response => response.json());
    }





    /* POST - Asignar vale Electronico
       A MANDAR
       movilEmisor  ->  Telefono del Cliente Mayorista (Usar para pruebas: )
       importe  -> Monto del vale (SIEMPREEEE $1 porque chaleco)
       tipoMedio  -> 1 para telefono y 2 para correo (Ahorita calar siempre 1)
       referenciaDestino  ->  el contenido, dependiendo de la decision
       idOficialDestino -> ultimos 4 dígitos de ine
       nombreReceptor  -> Nombre de persona autorizada
      vales/electronicos
     */
    valeElectronico(datos){
        return this.http.post("vales/electronicos",datos);
    }

}
