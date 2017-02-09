import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class ClienteModel {


    constructor(private db :DbService ) {
    }

    public insert(cliente: any) {
        this.db.getDatabase().execSQL("INSERT INTO cliente (id,codigo,paterno,materno,nombre,rfc,plaza_id,tipocredito_id,cp,asentamiento_id) VALUES(?,?,?,?,?,?,?,?,?,?)", [cliente.id, cliente.codigo, cliente.paterno, cliente.materno, cliente.nombre, cliente.rfc,cliente.plaza_id,cliente.tipocredito_id,cliente.cp,cliente.asentamiento_id]);
    }

    public fetch() {
        return this.db.getDatabase().get("SELECT * FROM cliente");
    }

    public truncate(){
        this.db.getDatabase().execSQL("DELETE FROM cliente");
    }


}