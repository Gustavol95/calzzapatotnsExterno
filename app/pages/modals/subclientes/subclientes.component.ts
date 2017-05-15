import {Component, OnInit} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular";
import {ClienteService} from "../../cliente/cliente.service";
import {Observable} from "rxjs/Observable";

/**
 * Created by iedeveloper on 12/05/17.
 */

@Component({
    providers: [ClienteService],
    moduleId: module.id,
    templateUrl: "./subclientes.html",
    styleUrls: ["./subclientes.css"]

})

export class SubclientesComponent implements OnInit {

    public clientes:any[];
    public filtro:any[];
    public buscarText:string="";
    ngOnInit(): void {
    }

    constructor(private params: ModalDialogParams,private _clienteService: ClienteService) {
        this._clienteService.index().subscribe(clientes => {
            this.clientes = clientes;
            this.filtro=clientes;
        });
    }

    public selected(item) {
        this.params.closeCallback(item);
    }

    cerrar() {
        this.params.closeCallback(null);
    }

    triggerBusqueda(texto:string){
       return Observable.create(obs =>{
            this.buscar(texto);
            obs.next();
            obs.complete();
       }).debounceTime(3500)
           .subscribe();

    }

    buscar(buscar:string){
        console.log(buscar);
        if(buscar==""){
            this.filtro=this.clientes;
        }
        else{
            let temp=buscar.toLowerCase();
            this.filtro=this.clientes.filter(datos => datos.nombre.toLowerCase().includes(temp))
            console.log(" SACA EL FILTER LOCO"+JSON.stringify(this.clientes.filter(datos => datos.nombre.toLowerCase().includes(temp))));
        }

    }



}