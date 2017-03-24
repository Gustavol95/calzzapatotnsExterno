import {Component, OnInit} from "@angular/core";
import {CorteService} from "../corte.service";
import {UserModel} from "../../../model/user.model";
import {Page} from "ui/page";

/**
 * Created by iedeveloper on 23/03/17.
 */

@Component({
    selector: "saldoDisponible",
    providers: [CorteService,UserModel],
    templateUrl: "pages/corte/saldo-disponible/saldo-disponible.html",
    styleUrls: ["pages/corte/saldo-disponible/saldo-disponible.css"]
})

export class SaldoDisponibleComponent implements OnInit{

    ultimaActualizacion="";
    limiteCredito="0";
    saldo="0";
    creditoDisponible="0";
    estatus="";
    saldos:any;

    constructor(private corteService:CorteService,private _userModel:UserModel, private page:Page){

    }
    ngOnInit(): void {
        console.log("entra el  Saldo Disponible");
        this.page.actionBar.title="Saldo Disponible";
    }

    ngAfterViewInit() {
         this._userModel.fetch().then(usuario => {
            if (usuario) {

                console.log("Este es el bueno locoo2",usuario.email);
               this.corteService.getSaldos(usuario.email)
                    .map((info)=>{
                        this.saldos=info;
                        this.ultimaActualizacion=info.fecha;
                        this.limiteCredito=this.saldos.limite;
                        this.saldo=this.saldos.saldo;
                        this.creditoDisponible=this.saldos.disponible;

                    }).subscribe();
            }
        });
    }

}