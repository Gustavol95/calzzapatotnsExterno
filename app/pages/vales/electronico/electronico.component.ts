import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {ModalDialogOptions, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

//import { registerElement } from "nativescript-angular/element-registry";
import {ValeService} from "../vale.service";
import {ClienteModel} from "../../../model/cliente.model";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../shared/validators/CustomValidators";
import {SubclientesComponent} from "../../modals/subclientes/subclientes.component";
import moment = require("moment");
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var dialogs = require("ui/dialogs");

//registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "electronico",
    providers: [ValeService],
    templateUrl: "pages/vales/electronico/electronico.html",
    styleUrls: ["pages/vales/electronico/electronico.css"]
})
export class ElectronicoValeComponent implements OnInit {
    form: FormGroup;
    telefonoCM="";
    cliente="";
    monto="";
    personaAutorizada="";
    ineAutorizada="";
    telefonoAutorizada="";
    isLoading:boolean= false;
    nombreCliente="";
    idCliente:any;

    protected validationMessages: any = {
        telefonoCM: {
            required: "Teléfono del emisor del vale obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito",
            celular: "Celular de 10 dígitos obligatorio"
        },
        cliente: {
            required: "Nombre de cliente obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        },
        personaAutorizada: {
            required: "Nombre de quien canjeará vale obligatorio",
            maxLength: "El tamaño máximo del email es de 255 dígitos",
            minLength: "El tamaño mínimo del email es de 1 dígito",
            email: "El correo no válido."
        },
        monto: {
            required: "Debe especificar un monto de crédito",
            maxLength: "El tamaño máximo del numero es de 9 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito",
            pattern: "Solo números"
        },
        ineAutorizada: {
            required: "4 últimos dígitos obligatorios",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito",
            pattern:"4 últimos numeros obligatorios"
        },
        telefonoAutorizada: {
            required: "Telefono de persona autorizada para canje",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito",
            celular: "Celular de 10 dígitos obligatorio"
        },
        correoAutorizada: {
            required: "Correo de persona autorizada para cange obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        }
    }

    constructor(private routerExtensions: RouterExtensions,
                private page: Page,
                private _fb: FormBuilder,
                private _valeService: ValeService,
                private _clienteModel : ClienteModel,
                private _modalService: ModalDialogService,
                private vcRef: ViewContainerRef) {

    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Vale Electrónico";

        this.form = this._fb.group({
            telefonoAutorizada: [null, [Validators.required, Validators.minLength(1),CustomValidators.celular]],
            telefonoCM: [null, [Validators.required, Validators.minLength(1),CustomValidators.celular]],
            cliente: [this.nombreCliente, [Validators.required, Validators.minLength(1)]],
            personaAutorizada: [null, [Validators.required]],
            monto: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(9),Validators.pattern('[0-9]+')]],
            ineAutorizada: [null, [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9]')]]/*,
            correoAutorizada: [null, [Validators.required, Validators.minLength(1)]]*/

        });
    }

    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: -10, y: -25},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });

    }

    public solicitar(){
       this.isLoading=true;
        if(this.form.value.cliente==this.nombreCliente){
            console.log("son iguales");

        }else {
            console.log("No son iguales");
            this.idCliente=null;
        }
        let datos = {
            subcliente_id:this.idCliente,
            movil:this.form.value.telefonoCM+"",/*6671222612*/
            importe:this.form.value.monto+"",
            tipo_medio: "1",
            referencia_destino:this.form.value.telefonoAutorizada+"",
            ife: this.form.value.ineAutorizada+"",
            nombre_receptor:this.form.value.personaAutorizada+""
        };
        console.log("Se envía "+JSON.stringify(datos));

            this._valeService.valeElectronico(datos)
                .subscribe(content =>{
                    let route = this.routerExtensions;
                    console.log("Ahi te va", JSON.stringify(content));
                    this.isLoading=false;
                    dialogs.alert({
                        title: "Vale asignado",
                        message: "Asignado exitosamente.",
                        okButtonText: "Aceptar"
                    }).then(function () {
                        route.navigate(["/home/vales"],{transition: {
                            name: "fade",
                            duration: 200,
                            curve: "linear"
                        }});
                    });
                    },(error)=>{
                    dialogs.alert({
                        title: "Hubo un problema",
                        message: "No se pudo asignar el vale debido a problemas en el servidor.",
                        okButtonText: "Aceptar"
                    }).then(function () {
                    });
                        this.isLoading=false;
                    }

                );

    }
    modalPicker() {
        this.onTap('label2');
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };

        this._modalService.showModal(SubclientesComponent, options)
            .then((result) => {
            console.log(JSON.stringify(result.id));
                //Aqui saca el texto para el form y el codigo que le enviaras el servicioWEB
                console.log("Este valor :" +result.nombre);
                this.idCliente=result.id;
                this.form.get('cliente').setValue(result.nombre);
                this.nombreCliente=result.nombre;


            });
    }



}/**
 * Telefono 1
 * correo 2
 */
