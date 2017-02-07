import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {DatePicker} from "ui/date-picker";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {DatepickerComponent} from "../modals/datepicker/date-picker";
import {MapaComponent} from "../modals/mapa/mapa.component";
import {UserModel} from "../../model/user.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import moment = require("moment");

@Component({
    selector: "my-app",
    providers: [],
    templateUrl: "pages/micuenta/micuenta.html",
    styleUrls: ["pages/micuenta/css/micuenta.css"]
})
export class MicuentaComponent implements OnInit {
    public user: any = {name: ' '};
    form: FormGroup;
    protected _fb: FormBuilder;
    valor_inicial: string = "1";

    constructor(private router: Router, private usr: UserModel, private page: Page, private vcRef: ViewContainerRef, private _modalService: ModalDialogService, fb: FormBuilder) {
        this._fb = fb;
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
        this.form = this._fb.group({
            name: [null, [Validators.required, Validators.maxLength(128)]],
            fecha: [null, [Validators.required, Validators.maxLength(255)]]
        });
        this.usr.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
                this.form.reset(this.user);
                console.log("Usuario => ", JSON.stringify(this.user));
            }
        });

    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    modalPicker() {
        console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(DatepickerComponent, options)
            .then((dateresult: Date) => {
            let fecha = new Date(dateresult);
            console.log("Fecha 123",fecha);
            console.log("Fecha => ",moment(fecha, "MM-DD-YYYY"));
                this.form.get('fecha').setValue(moment(dateresult, "MM-DD-YYYY"));
            });
    }

    guardar() {
        console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(MapaComponent, options)
            .then((dateresult: Date) => {
                console.log("date result " + dateresult);
            });
    }

    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: 0, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

}