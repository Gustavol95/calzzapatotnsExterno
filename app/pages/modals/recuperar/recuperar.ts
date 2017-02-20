import {Component, OnInit} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {CustomValidators} from "../../../shared/validators/CustomValidators";

@Component({
    moduleId: module.id,
    //templateUrl: "./recuperar.html"
    template: `
              <ScrollView class="modal-view-style">
                  <StackLayout [formGroup]="form" style="margin: 15px;padding: 15px;height: 100%">
                      <Label class="title" text="Reestablecer Contraseña" style="margin: 15px 0px 15px 15px"></Label> 
                      
                      <GridLayout rows="20 auto,auto">
                        <Label row="1" id="label1" fontSize="15" (tap)="onTap('label1')" text="Contraseña" textWrap="true"></Label>
                        <TextField secure="true" [(ngModel)]="user.password" (tap)="onTap('label1')" fontSize="15" row="1"  text="" formControlName="password"></TextField>
                        <app-error-feedback row="2" [messages]="validationMessages.password" [formGroup]="form" controlName="password"></app-error-feedback>
                      </GridLayout> 
                      
                      <GridLayout rows="20 auto,auto"> 
                          <Label row="1" id="label2" fontSize="15" (tap)="onTap('label2')" text="Contraseña Confirmación" textWrap="true"></Label>
                          <TextField secure="true" [(ngModel)]="user.password_confirm" (tap)="onTap('label2')" fontSize="15" row="1"  text="" formControlName="password_confirm"></TextField>
                          <!--<app-error-feedback row="2" [messages]="validationMessages.password_confirm" [formGroup]="form" controlName="password_confirm"></app-error-feedback>-->
                          <Label  *ngIf="false"  text="La contraseñas no coindiden"  row="2" style="margin:0px 0px 0px 10px;padding:0px 0px 0px 10px;color:red"></Label>
                      </GridLayout> 
                      
                      <GridLayout rows="auto"  columns="*, *">
                        <Button row="1" col="0" [text]="'CANCELAR'" class="button-save" style="width: 100%" (tap)="cerrar()" horizontalAlignment="center" verticalAlignment="center"></Button>
                        <Button row="1" col="1" [text]="'RECUPERAR'" class="button-save" style="width: 100%"  [ngClass]="{'style1': validarPassword()}" isEnabled = "{{valid}}" (tap)="recuperar()" horizontalAlignment="center" verticalAlignment="center"></Button>
                      </GridLayout> 
                  </StackLayout>
              </ScrollView> 
        `,
    styleUrls: ["./recuperar-common.css"]

})
export class RecuperarComponent implements OnInit {
    form: FormGroup;
    valid = false;
    public user={
        password:'',
        password_confirm:''
    }
    protected validationMessages: any = {
        password: {
            required: "El contraseña es obligatoria",
            minLength: "El tamaño mínimo de la contraseña es de 1 dígito"
        },
        password_confirm: {
            required: "El confirmación de contraseña es obligatorio",
            minLength: "El tamaño mínimo de la confirmación de contraseña es de 1 dígitos",
            password: "Las contraseñas no coinciden"
        }
    };

    constructor(private params: ModalDialogParams, private page: Page, private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this._fb.group({
            password: [null, [Validators.required, Validators.minLength(1)]],
            password_confirm: [null, [Validators.required, Validators.minLength(1)]]
        });
        this.onTap('label1');
    }
    validarPassword(){
        let usr = this.form.value;
        //console.log("p => "+usr.password.length+" pc=>"+usr.password_confirm.length);
        this.valid = false;

        if((usr.password.length>0 && usr.password_confirm.length>0) && usr.password == usr.password_confirm){
            this.valid = true;
        }

        return !this.valid;

    }
    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: 0, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

    public recuperar() {
        console.log("Recuperar => ",JSON.stringify(this.form.value));
        this.params.closeCallback(this.form.value);
    }

    cerrar() {
        this.params.closeCallback(null);
    }
}
