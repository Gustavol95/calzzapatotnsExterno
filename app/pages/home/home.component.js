"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var db_service_1 = require("../../model/db.service");
var http_service_1 = require("../../custom-http/http-service");
var dialogs = require("ui/dialogs");
var application = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var user_model_1 = require("../../model/user.model");
var cliente_model_1 = require("../../model/cliente.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var appSettings = require("application-settings");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, page, _changeDetectionRef, router, dbService, http, _userModel, _clienteModel, _tiposMediosModel, _clientesMedios) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this.dbService = dbService;
        this.http = http;
        this._userModel = _userModel;
        this._clienteModel = _clienteModel;
        this._tiposMediosModel = _tiposMediosModel;
        this._clientesMedios = _clientesMedios;
        this.user = {};
        this.plataforma = false;
        this.onDrawerOpening();
        this.user = { name: "Anónimo" };
        page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        }
        else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }
    HomeComponent.prototype.onDrawerOpening = function () {
        var _this = this;
        this.user = { name: "Anónimo" };
        this._userModel.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
            }
            else {
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    HomeComponent.prototype.openDrawer = function () {
        //console.log("openDrawer");
        if (this.drawer.getIsOpen()) {
            this.drawer.closeDrawer();
        }
        else {
            this.drawer.showDrawer();
        }
    };
    HomeComponent.prototype.redireccion = function (args) {
        //console.log("redireccion", args);
        this.routerExtensions.navigate(["/home/" + args], { clearHistory: true });
        this.drawer.closeDrawer();
    };
    HomeComponent.prototype.truncateDatabase = function () {
        console.log("truncateDatabase");
        this._userModel.truncate();
        this._clienteModel.truncate();
        this._tiposMediosModel.truncate();
        this._clientesMedios.truncate();
    };
    HomeComponent.prototype.salir = function () {
        this.truncateDatabase();
        this.user = { name: "Anónimo" };
        appSettings.clear();
        this.router.navigate(["/"]);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "inicio-inc",
            templateUrl: "pages/home/home.component.html",
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef, router_1.Router, db_service_1.DbService, http_service_1.HttpService, user_model_1.UserModel, cliente_model_1.ClienteModel, tipos_medio_model_1.TiposMedioModel, clientes_medios_model_1.ClientesMediosModel])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
