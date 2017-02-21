/**
 * Created by iedeveloper on 17/02/17.
 */
import {Component, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
@Component({
    selector: "detalle-cliente",
    providers: [],
    templateUrl: "pages/cliente/detalle/cliente-detalle.html",
    styleUrls: ["pages/cliente/detalle/cliente-detalle.css"]
})

export class ClienteDetalleComponent extends OnInit {
    public selectedIndex: number;
    ngOnInit(): void {
    }



}