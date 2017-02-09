import {Component, ElementRef, ViewChild, OnInit, Injectable, ChangeDetectorRef} from '@angular/core';
import {Color} from "color";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {Observable} from "data/observable";
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {DbService} from "../../model/db.service";
import {HttpService} from "../../custom-http/http-service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
var dialogs = require("ui/dialogs");
import * as application from "application";
import {RouterExtensions} from "nativescript-angular";
import {UserModel} from "../../model/user.model";
import {ClienteModel} from "../../model/cliente.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
import {ClientesMediosModel} from "../../model/clientes_medios.model";

@Component({
    selector: "inicio-inc",
    templateUrl: "pages/home/home.component.html",
})

export class HomeComponent implements OnInit {

    @ViewChild("container") container: ElementRef;
    public user: any = {};
    plataforma = false;

    constructor(private routerExtensions: RouterExtensions,
                private page: Page,
                private _changeDetectionRef: ChangeDetectorRef,
                private router: Router,
                private dbService: DbService,
                private http: HttpService,
                private _userModel: UserModel,
                private _clienteModel: ClienteModel,
                private _tiposMediosModel: TiposMedioModel,
                private _clientesMedios: ClientesMediosModel) {
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
                //this.drawer.android.setIsLocked(false);
            } else {
                //this.drawer.android.setIsLocked(true);
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
        this.router.navigate(["/"]);
    }

    ngOnInit() {
    }


}