/**
 * Created by iedeveloper on 01/02/17.
 */


import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {GridLayout} from "ui/layouts/grid-layout";
import {AnimationCurve} from "ui/enums";

@Component({
    selector: "inicio-inc",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"]
})

export class InicioComponent implements OnInit {

    extenderSaldo=true;

    constructor(private page:Page){

    }

    ngOnInit(): void {
        this.page.actionBar.title="Inicio";
    }

    onSaldoClicked(){
        let grid: GridLayout = <GridLayout> this.page.getViewById("gridSaldo");
        this.extenderSaldo=!this.extenderSaldo;
        //console.log(this.extenderSaldo);

        if(this.extenderSaldo==false){
            grid.visibility='visible';
            grid.animate({
                opacity: 1,
                duration: 300
            });
        }
        if(this.extenderSaldo==true){
            grid.animate({
                opacity: 0,
                duration: 200
            }).then( (d)=>{ grid.visibility='collapse';} )

        }
    }

}