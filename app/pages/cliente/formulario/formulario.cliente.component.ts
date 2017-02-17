import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {ClienteService} from "../cliente.service";
import {AnimationCurve} from "ui/enums";
import {DatePicker} from "ui/date-picker";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {DatepickerComponent} from "../../modals/datepicker/date-picker";
import {Label} from "ui/label";
import moment = require("moment");
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../../shared/validators/CustomValidators";
import {Cliente} from "../cliente.class";

@Component({
    selector: "my-app-clientes",
    providers: [ClienteService],
    //templateUrl: "pages/cliente/formulario/formulario-cliente.html",
    template: `
          <ScrollView>
              <StackLayout [formGroup]="form" style="margin: 15px">
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label1" fontSize="15" (tap)="onTap('label1')" text="Nombre(s)" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label1')" fontSize="15" row="1"  text="" formControlName="nombre"></TextField>
                      <app-error-feedback row="2" [messages]="validationMessages.nombre" [formGroup]="form" controlName="nombre"></app-error-feedback>
                  </GridLayout>
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label2" fontSize="15" (tap)="onTap('label2')" text="Apellido Paterno" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label2')" fontSize="15" row="1"  text="" formControlName="paterno"></TextField>
                      <app-error-feedback [messages]="validationMessages.paterno" [formGroup]="form" controlName="paterno"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label3" fontSize="15" (tap)="onTap('label3')" text="Apellido Materno" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label3')" fontSize="15" row="1"  text="" formControlName="materno"></TextField>
                      <app-error-feedback [messages]="validationMessages.materno" [formGroup]="form" controlName="materno"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label4" fontSize="15" (tap)="onTap('label4')" text="Celular" textWrap="true"></Label>
                      <TextField keyboardType="phone"  (tap)="onTap('label4')" fontSize="15" row="1"  text="" formControlName="celular"></TextField>
                      <app-error-feedback [messages]="validationMessages.celular" [formGroup]="form" controlName="celular"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label6" fontSize="15" (tap)="onTap('label6')" text="Email" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label6')" fontSize="15" row="1"  text="" formControlName="email"></TextField>
                      <app-error-feedback [messages]="validationMessages.email" [formGroup]="form" controlName="email"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label7" fontSize="15" text="Fecha de Nacimiento" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="modalPicker()" fontSize="15" row="1"  text="" [editable]="false" formControlName="fecha_nacimiento"></TextField>
                      <app-error-feedback [messages]="validationMessages.fecha_nacimiento" [formGroup]="form" controlName="fecha_nacimiento"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label8" fontSize="15" (tap)="onTap('label8')" text="Calle" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label8')" fontSize="15" row="1"  text="" formControlName="calle"></TextField>
                      <app-error-feedback [messages]="validationMessages.calle" [formGroup]="form" controlName="calle"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label9" fontSize="15" (tap)="onTap('label9')" text="Número exterior" textWrap="true"></Label>
                      <TextField keyboardType="number"  (tap)="onTap('label9')" fontSize="15" row="1"  text="" formControlName=numero_exterior></TextField>
                      <app-error-feedback [messages]="validationMessages.numero_exterior" [formGroup]="form" controlName="numero_exterior"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label10" fontSize="15" (tap)="onTap('label10')" text="Número interior" textWrap="true"></Label>
                      <TextField keyboardType="number"  (tap)="onTap('label10')" fontSize="15" row="1"  text="" formControlName="numero_interior"></TextField>
                      <app-error-feedback [messages]="validationMessages.numero_interior" [formGroup]="form" controlName="numero_interior"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label11" fontSize="15" (tap)="onTap('label11')" text="Colonia" textWrap="true"></Label>
                      <TextField keyboardType="next"  (tap)="onTap('label11')" fontSize="15" row="1"  text="" formControlName="colonia"></TextField>
                      <app-error-feedback [messages]="validationMessages.colonia" [formGroup]="form" controlName="colonia"></app-error-feedback>
                  </GridLayout>
          
                  <GridLayout rows="20 auto,auto">
                      <Label row="1" id="label12" fontSize="15" (tap)="onTap('label12')" text="Cp" textWrap="true"></Label>
                      <TextField keyboardType="number"  (tap)="onTap('label12')" fontSize="15" row="1"  text="" formControlName="cp"></TextField>
                      <app-error-feedback [messages]="validationMessages.cp" [formGroup]="form" controlName="cp"></app-error-feedback>
                  </GridLayout>
                  
                  <GridLayout rows="20 auto">
                      <Button row="1" [text]="'Guardar'" class="button-save" isEnabled = "{{form.valid}}" (tap)="guardar()"></Button>
                  </GridLayout>
              </StackLayout>
          </ScrollView>  
        
    `,
    styleUrls: ["pages/cliente/css/cliente.css"]
})
export class FormularioClienteComponent implements OnInit {
    public clientes: any[];
    form: FormGroup;

    constructor(private router: Router,
                private page: Page,
                private _clienteService: ClienteService,
                private vcRef: ViewContainerRef,
                private _modalService: ModalDialogService,
                private _fb: FormBuilder) {
    }

    protected validationMessages: any = {
        nombre: {
            required: "El nombre es obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        },
        paterno: {
            required: "El apellido paterno es obligatorio",
            maxLength: "El tamaño máximo del apellido paterno es de 255 dígitos",
            minLength: "El tamaño mínimo del apellido paterno es de 1 dígito"
        },
        materno: {
            required: "El apellido materno es obligatorio",
            maxLength: "El tamaño máximo del apellido materno es de 255 dígitos",
            minLength: "El tamaño mínimo del apellido materno es de 1 dígito"
        },
        celular: {
            required: "El celular es obligatorio",
            maxLength: "El tamaño máximo del celular es de 10 dígitos",
            minLength: "El tamaño mínimo del celular es de 10 dígitos",
            celular: "Ingrese un celular válido"
        },
        email: {
            required: "El email es obligatorio",
            maxLength: "El tamaño máximo del email es de 255 dígitos",
            minLength: "El tamaño mínimo del email es de 1 dígito",
            email: "El correo no corresponde con una dirección de e-mail válida."
        },
        fecha_nacimiento: {
            required: "La fecha de nacimiento es obligatoria",
            maxLength: "La tamaño máximo del fecha de nacimiento es de 255 dígitos",
            minLength: "La tamaño mínimo del fecha de nacimiento es de 1 dígito"
        },
        calle: {
            required: "La calle es obligatorio",
            maxLength: "La tamaño máximo del calle es de 255 dígitos",
            minLength: "La tamaño mínimo del calle es de 1 dígito"
        },
        numero_exterior: {
            required: "El número exterior es obligatorio",
            maxLength: "El tamaño máximo del número exterior es de 255 dígitos",
            minLength: "El tamaño mínimo del número exterior es de 1 dígito"
        },
        numero_interior: {
            required: "El número interior es obligatorio",
            maxLength: "El tamaño máximo del número interior es de 255 dígitos",
            minLength: "El tamaño mínimo del número interior es de 1 dígito"
        },
        colonia: {
            required: "La colonia es obligatorio",
            maxLength: "La tamaño máximo del colonia es de 255 dígitos",
            minLength: "La tamaño mínimo del colonia es de 1 dígito"
        },
        cp: {
            required: "El código postal es obligatorio",
            maxLength: "El tamaño máximo del código postal es de 10 dígitos",
            minLength: "El tamaño mínimo del código postal es de 1 dígito"
        }
    }

    ngOnInit() {
        this.page.actionBar.title = "Agregar Cliente";
        this.form = this._fb.group({
            nombre: ['Henry', [Validators.required, Validators.minLength(1)]],
            paterno: ['Cañedo', [Validators.required, Validators.minLength(1)]],
            materno: ['Zamudio', [Validators.required, Validators.minLength(1)]],
            celular: ['6691657109', [Validators.required, Validators.minLength(10),Validators.maxLength(10),CustomValidators.celular]],
            email: ['heris161993@gmail.com', [Validators.required, Validators.minLength(1), CustomValidators.email]],
            fecha_nacimiento: ['09/04/93', [Validators.required, Validators.minLength(1)]],
            calle: ['Los Sauces', [Validators.required, Validators.minLength(1)]],
            numero_exterior: ['896', [Validators.required, Validators.minLength(1)]],
            numero_interior: ['402', [Validators.required, Validators.minLength(1)]],
            colonia: ['La campiña', [Validators.required, Validators.minLength(1)]],
            cp: ['82600', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]]
        });
    }

    modalPicker() {
        //console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(DatepickerComponent, options)
            .then((dateresult: Date) => {
                this.form.get('fecha_nacimiento').setValue(moment(dateresult).format('DD/MM/YYYY'));
                this.onTap('label7');
            });
    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: -10, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

    guardar() {
        let cliente: Cliente = this.form.value as Cliente;
        console.log("Va a guardar",JSON.stringify(cliente));
        this._clienteService.save(cliente).subscribe(d=>{
            console.log("se guardo");
        });
    }
}