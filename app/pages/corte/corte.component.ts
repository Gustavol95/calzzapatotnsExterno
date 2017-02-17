/**
 * Created by iedeveloper on 15/02/17.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
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
    ngOnInit(): void {
    }

    constructor(private activatedRoute: ActivatedRoute){
        activatedRoute.queryParams.subscribe(params => {
            this.info = JSON.parse(params["info"]);
            this.saldo="$"+this.info.saldo;
            this.pagoMinimo="$"+this.info.pago_minimo;

        });
    }



}