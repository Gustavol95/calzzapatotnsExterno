/**
 * Created by iedeveloper on 01/02/17.
 */


import {Component, OnInit} from "@angular/core";
@Component({
    selector: "inicio-inc",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"]
})

export class InicioComponent implements OnInit {
    ngOnInit(): void {
        console.log("Hola entró");
    }


}