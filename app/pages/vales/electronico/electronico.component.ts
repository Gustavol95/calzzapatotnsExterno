import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

//import { registerElement } from "nativescript-angular/element-registry";
import {ValeService} from "../vale.service";
import {ClienteModel} from "../../../model/cliente.model";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../shared/validators/CustomValidators";
//registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "electronico",
    providers: [ValeService],
    templateUrl: "pages/vales/electronico/electronico.html",
    styleUrls: ["pages/vales/electronico/electronico.css"]
})
export class ElectronicoValeComponent implements OnInit {
    form: FormGroup;
    protected validationMessages: any = {
        telefonoCM: {
            required: "Teléfono del emisor del vale obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
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
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        },
        ineAutorizada: {
            required: "4 últimos dígitos obligatorios",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        },
        telefonoAutorizada: {
            required: "Telefono de persona autorizada para canje",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
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
                private _clienteModel : ClienteModel) {

    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Vale Electrónico";

        this.form = this._fb.group({
           // telefonoAutorizada: [null, [Validators.required, Validators.minLength(1)]],
            telefonoCM: [null, [Validators.required, Validators.minLength(1)]],
            cliente: [null, [Validators.required, Validators.minLength(1)]],
            personaAutorizada: [null, [Validators.required]],
            monto: [null, [Validators.required, Validators.minLength(1)]],
            ineAutorizada: [null, [Validators.required, Validators.minLength(1)]],
            correoAutorizada: [null, [Validators.required, Validators.minLength(1)]]

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
            console.log("Ahueboosoo2")

    }


}/**
 * Telefono 1
 * correo 2
 */
