"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var application = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var user_model_1 = require("../../model/user.model");
var cliente_model_1 = require("../../model/cliente.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var login_service_1 = require("../login/login.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var recuperar_1 = require("../modals/recuperar/recuperar");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, page, _changeDetectionRef, router, _userModel, _clienteModel, _tiposMediosModel, _clientesMedios, _loginService, vcRef, _modalService) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this._userModel = _userModel;
        this._clienteModel = _clienteModel;
        this._tiposMediosModel = _tiposMediosModel;
        this._clientesMedios = _clientesMedios;
        this._loginService = _loginService;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this.user = {};
        this.plataforma = false;
        this.isLoggingIn = false;
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
        var _this = this;
        if (this.user.solicitar == 1) {
            var options = {
                viewContainerRef: this.vcRef,
                fullscreen: false
            };
            // >> returning-result
            this._modalService.showModal(recuperar_1.RecuperarComponent, options)
                .then(function (dato) {
                var datos = { cliente_id: _this.user.cliente_id, dato: dato };
                _this._loginService.cambiarPassword(datos).subscribe(function (d) {
                    _this._userModel.cambiarSolicitud();
                    dialogs.alert({
                        title: "Recuperar contraseña",
                        message: "La contraseña se ha actualizado correctamente.",
                        okButtonText: "Aceptar"
                    }).then(function () {
                    });
                });
            });
        }
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
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef, router_1.Router, user_model_1.UserModel, cliente_model_1.ClienteModel, tipos_medio_model_1.TiposMedioModel, clientes_medios_model_1.ClientesMediosModel, login_service_1.LoginService, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTRGLGVBQWUsQ0FBQyxDQUFBO0FBRTVHLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2Qyx3QkFBcUQsNENBQTRDLENBQUMsQ0FBQTtBQUNsRywyQkFBMkQsb0NBQW9DLENBQUMsQ0FBQTtBQUloRyxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMzQyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCwyQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCw4QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUM5RCxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwwQkFBaUMsK0JBQStCLENBQUMsQ0FBQTtBQUNqRSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNsRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFRcEM7SUFPSSx1QkFBb0IsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixtQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXFCLEVBQ3JCLGFBQTJCLEVBQzNCLGlCQUFrQyxFQUNsQyxlQUFvQyxFQUNwQyxhQUEyQixFQUMzQixLQUF1QixFQUN2QixhQUFpQztRQVZqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYs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LEVBQUUsZ0RBQWdEO3dCQUN6RCxZQUFZLEVBQUUsU0FBUztxQkFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDUixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUE5R0Q7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7b0RBQUE7SUFxQ3ZCO1FBQUMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs7MERBQUE7SUE3Q3RDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDOztxQkFBQTtJQXFIRixvQkFBQztBQUFELENBQUMsQUFuSEQsSUFtSEM7QUFuSFkscUJBQWEsZ0JBbUh6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7RHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQge0RiU2VydmljZX0gZnJvbSBcIi4uLy4uL21vZGVsL2RiLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcclxuaW1wb3J0IHtUaXBvc01lZGlvTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC90aXBvc19tZWRpby5tb2RlbFwiO1xyXG5pbXBvcnQge0NsaWVudGVzTWVkaW9zTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC9jbGllbnRlc19tZWRpb3MubW9kZWxcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHtSZWN1cGVyYXJDb21wb25lbnR9IGZyb20gXCIuLi9tb2RhbHMvcmVjdXBlcmFyL3JlY3VwZXJhclwiO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImluaWNpby1pbmNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIHVzZXI6IGFueSA9IHt9O1xyXG4gICAgcGxhdGFmb3JtYSA9IGZhbHNlO1xyXG4gICAgaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3VzZXJNb2RlbDogVXNlck1vZGVsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2xpZW50ZU1vZGVsOiBDbGllbnRlTW9kZWwsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF90aXBvc01lZGlvc01vZGVsOiBUaXBvc01lZGlvTW9kZWwsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jbGllbnRlc01lZGlvczogQ2xpZW50ZXNNZWRpb3NNb2RlbCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdlck9wZW5pbmcoKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB7bmFtZTogXCJBbsOzbmltb1wifTtcclxuICAgICAgICBwYWdlLm9uKFwibG9hZGVkXCIsIHRoaXMub25Mb2FkZWQsIHRoaXMpO1xyXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBBbmRyb2lkIGRldmljZSFcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxhdGFmb3JtYSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGljYXRpb24uaW9zKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBpT1MgZGV2aWNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRhZm9ybWEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmF3ZXJPcGVuaW5nKCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHtuYW1lOiBcIkFuw7NuaW1vXCJ9O1xyXG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbC5mZXRjaCgpLnRoZW4odXN1YXJpbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c3VhcmlvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9wZW5EcmF3ZXJcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyLmdldElzT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVkaXJlY2Npb24oYXJncykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWRpcmVjY2lvblwiLCBhcmdzKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvXCIgKyBhcmdzXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRydW5jYXRlRGF0YWJhc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVuY2F0ZURhdGFiYXNlXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbC50cnVuY2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudGVNb2RlbC50cnVuY2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3RpcG9zTWVkaW9zTW9kZWwudHJ1bmNhdGUoKTtcclxuICAgICAgICB0aGlzLl9jbGllbnRlc01lZGlvcy50cnVuY2F0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhbGlyKCkge1xyXG4gICAgICAgIHRoaXMudHJ1bmNhdGVEYXRhYmFzZSgpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHtuYW1lOiBcIkFuw7NuaW1vXCJ9O1xyXG4gICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlci5zb2xpY2l0YXIgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vID4+IHJldHVybmluZy1yZXN1bHRcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChSZWN1cGVyYXJDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRvcyA9IHtjbGllbnRlX2lkOnRoaXMudXNlci5jbGllbnRlX2lkLGRhdG86ZGF0b307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmNhbWJpYXJQYXNzd29yZChkYXRvcykuc3Vic2NyaWJlKGQ9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1vZGVsLmNhbWJpYXJTb2xpY2l0dWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWN1cGVyYXIgY29udHJhc2XDsWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgY29udHJhc2XDsWEgc2UgaGEgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=