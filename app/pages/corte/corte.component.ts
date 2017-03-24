/**
 * Created by iedeveloper on 15/02/17.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular";
@Component({
    selector: "corte",
    providers: [],
    templateUrl: "pages/corte/corte.html",
    styleUrls: ["pages/corte/corte.css"]
})

export class CorteComponent implements OnInit{
    info: any;
    saldo="";
    pagoMinimo="";


    constructor(private page:Page,private activatedRoute: ActivatedRoute,private routerExtensions: RouterExtensions, private router:Router){
        activatedRoute.queryParams.subscribe(params => {
            this.info = JSON.parse(params["info"]);
            this.saldo="$"+this.info.saldo;
            this.pagoMinimo="$"+this.info.pago_minimo;
        });
    }

    ngOnInit(): void {
        this.page.actionBar.title="Corte y Saldo";
    }
    redireccion(args) {
        this.router.navigate(["/home/" + args]);
    }

    referenciabanc(){
        this.routerExtensions.navigate(["/home/referenciabancaria"]);
    }

    saldoDisponible(){
        this.routerExtensions.navigate(["/home/saldo-disponible"]);
        console.log("Tap saldo disponible");
    }
}