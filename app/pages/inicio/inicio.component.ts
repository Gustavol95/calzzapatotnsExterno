import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {GridLayout} from "ui/layouts/grid-layout";
import {Router, NavigationExtras} from "@angular/router";
import {ClienteModel} from "../../model/cliente.model";
import {InicioService} from "./inicio.service";
import {UserModel} from "../../model/user.model";

@Component({
    selector: "inicio-inc",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"],
    providers:[InicioService]

})

export class InicioComponent implements OnInit {

    info : any;
    extenderSaldo=true;
    saldo="";
    pagoMinimo="";
    public user: any = {};

    constructor(private page:Page, private router:Router, private _clienteModel: ClienteModel, private _inicioService: InicioService,  private _userModel: UserModel){
        console.log("constructor");
    }

    ngOnInit(): void {
        this.page.actionBar.title="Inicio";
    }

    ngAfterViewInit() {
        this._clienteModel.fetch().then(usuario => {
            this._inicioService.getClienteInfo(usuario.id)
                .subscribe(info=>{
                    this.info=info[0];
                    console.log("info",JSON.stringify(info));
                    this.saldo="$"+info[0].saldo;
                    this.pagoMinimo="$"+info[0].pago_minimo;
                });
        });
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
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
                "info": JSON.stringify(this.info)
            }
        };
        this.router.navigate(['/home/corte'], navigationExtras);
    }


}