import {Component, ElementRef, ViewChild, OnInit, ViewContainerRef, ChangeDetectorRef} from '@angular/core';
import {Color} from "color";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {Observable} from "data/observable";
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {DbService} from "../../model/db.service";
import {HttpService} from "../../custom-http/http-service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import * as application from "application";
import {RouterExtensions} from "nativescript-angular";
import {UserModel} from "../../model/user.model";
import {ClienteModel} from "../../model/cliente.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
import {ClientesMediosModel} from "../../model/clientes_medios.model";
import {LoginService} from "../login/login.service";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {RecuperarComponent} from "../modals/recuperar/recuperar";
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");

@Component({
    selector: "inicio-inc",
    templateUrl: "pages/home/home.component.html",
    providers: [LoginService]
})

export class HomeComponent implements OnInit {

    @ViewChild("container") container: ElementRef;
    public user: any = {};
    plataforma = false;
    isLoggingIn = false;

    constructor(private routerExtensions: RouterExtensions,
                private page: Page,
                private _changeDetectionRef: ChangeDetectorRef,
                private router: Router,
                private _userModel: UserModel,
                private _clienteModel: ClienteModel,
                private _tiposMediosModel: TiposMedioModel,
                private _clientesMedios: ClientesMediosModel,
                private _loginService: LoginService,
                private vcRef: ViewContainerRef,
                private _modalService: ModalDialogService) {
        this.onDrawerOpening();
        this.user = {name: "Anónimo"};
        page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        } else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }

    public onDrawerOpening() {
        this.user = {name: "Anónimo"};
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
            }
        });
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public toggle() {
        this.drawer.toggleDrawerState();
    }

    public onLoaded(args) {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    openDrawer() {
        //console.log("openDrawer");
        if (this.drawer.getIsOpen()) {
            this.drawer.closeDrawer();
        } else {
            this.drawer.showDrawer();
        }
    }

    public redireccion(args) {
        //console.log("redireccion", args);
        this.routerExtensions.navigate(["/home/" + args], {clearHistory: true});
        this.drawer.closeDrawer();

    }

    truncateDatabase() {
        console.log("truncateDatabase");
        this._userModel.truncate();
        this._clienteModel.truncate();
        this._tiposMediosModel.truncate();
        this._clientesMedios.truncate();
    }

    salir() {
        this.truncateDatabase();
        this.user = {name: "Anónimo"};
        appSettings.clear();
        this.router.navigate(["/"]);
    }

    ngOnInit() {
        if (this.user.solicitar == 1) {
            let options: ModalDialogOptions = {
                viewContainerRef: this.vcRef,
                fullscreen: false
            };
            // >> returning-result
            this._modalService.showModal(RecuperarComponent, options)
                .then((dato) => {
                    let datos = {cliente_id:this.user.cliente_id,dato:dato};
                    this._loginService.cambiarPassword(datos).subscribe(d=>{
                        this._userModel.cambiarSolicitud();
                        dialogs.alert({
                            title: "Recuperar contraseña",
                            message: "La contraseña se ha actualizado correctamente.",
                            okButtonText: "Aceptar"
                        }).then(function () {
                        });
                    });
                });
        }
    }


}