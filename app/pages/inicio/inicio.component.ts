import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {GridLayout} from "ui/layouts/grid-layout";
import {Router, NavigationExtras} from "@angular/router";
import {ClienteModel} from "../../model/cliente.model";
import {VentaModel} from "../../model/venta.model";
import {InicioService} from "./inicio.service";
import {UserModel} from "../../model/user.model";
import moment = require("moment");
moment.locale('es');
@Component({
    selector: "inicio-inc",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"],
    providers:[InicioService]
})

export class InicioComponent implements OnInit {
    extenderSaldo=true;
    clienteSaldo={
        fecha: '',
        pago_minimo:0,
        saldo:0,
        disponible:0,
        limite:0
    };
    public user: any = {};

    constructor(private page:Page, private router:Router, private _clienteModel: ClienteModel, private _inicioService: InicioService,  private _userModel: UserModel,  private _ventaModel: VentaModel){
        console.log("constructor");
    }

    ngOnInit(): void {
        this.page.actionBar.title="Inicio";
    }

    ngAfterViewInit() {
        this._clienteModel.fetch().then(usuario => {
            this._inicioService.getClienteInfo(usuario.id)
                .subscribe(info=>{
                    this.clienteSaldo=info[0];
                    let momentObj = moment(this.clienteSaldo.fecha, 'YYYY-MM-DD');
                    this.clienteSaldo.fecha = momentObj.format('DD MMM YYYY');
                    this.clienteSaldo.pago_minimo = parseFloat(info[0].pago_minimo);
                    this.clienteSaldo.saldo = parseFloat(info[0].saldo);
                    this.clienteSaldo.disponible = parseFloat(info[0].disponible);
                    this.clienteSaldo.limite = parseFloat(info[0].limite);
                    console.log("info",JSON.stringify(this.clienteSaldo));
                });
        });
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user =usuario;
                console.log("Este es el bueno locoo",usuario.email);
            }
        });
    }

    onSaldoClicked(){
        let grid: GridLayout = <GridLayout> this.page.getViewById("gridSaldo");
        this.extenderSaldo=!this.extenderSaldo;
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

    redireccion(args) {
        this.router.navigate(["/home/" + args]);
    }

    corte(){
        console.log("Tap corte");
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.clienteSaldo)
            }
        };
        this.router.navigate(['/home/corte'], navigationExtras);
    }

}