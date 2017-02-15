import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Injectable, ChangeDetectorRef} from "@angular/core";
import {User} from "./user.class";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {Page} from "ui/page";
//import {Page} from "ui/page";
import {registerElement} from "nativescript-angular/element-registry";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {ModalViewComponent} from "./modal/modal-view";
import {RouterExtensions} from "nativescript-angular";
import {ClienteModel} from "../../model/cliente.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
//registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

var appSettings = require("application-settings");

@Component({
    selector: "my-app",
    providers: [LoginService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    @ViewChild("container") container: ElementRef;
    //@ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(
        private routerExtensions: RouterExtensions,
        private router: Router,
        private loginService: LoginService,
        private _usuarioModel: UserModel,
        private _clienteModel: ClienteModel,
        private page: Page,
        private _modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private _tipoMedioModel: TiposMedioModel,
    ) {
        this.user = new User();
        this.user.email = "58536";
        this.user.password = "secret";
    }

    ngAfterViewInit() {
        this._usuarioModel.fetch().then(usuario => {
            if (usuario) {
                this.routerExtensions.navigate(["/home/inicio"], {clearHistory: true});
            } else {
                this.routerExtensions.navigate(["/"]);
            }
        });
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Iniciar Sesión";


    }

    login() {
        this.loginService.login(this.user)
            .subscribe(data =>{
                this.user = data.user as User;
                console.log("USUARIO",JSON.stringify(this.user));
                appSettings.setString("token", data.token);
                this.loginService.sincronizacion().subscribe(d=>{
                    console.log("SINCRONIZAOCION",JSON.stringify(d.tipos_medios));
                    this._usuarioModel.insert(this.user);
                    this._clienteModel.insert(this.user.cliente);
                    this._tipoMedioModel.insert(d.tipos_medios);
                    this.routerExtensions.navigate(["/home/inicio"], {clearHistory: true});
                });
            });
    }

    recuperarPassword() {
        //console.log("recuperarPassword");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(ModalViewComponent, options)
            .then((dateresult: Date) => {
                //console.log("date result " + dateresult);
            });

    }
}