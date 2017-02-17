"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var dialogs = require("ui/dialogs");
var application = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var user_model_1 = require("../../model/user.model");
var cliente_model_1 = require("../../model/cliente.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var login_service_1 = require("../login/login.service");
var appSettings = require("application-settings");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, page, _changeDetectionRef, router, _userModel, _clienteModel, _tiposMediosModel, _clientesMedios, loginService) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this._userModel = _userModel;
        this._clienteModel = _clienteModel;
        this._tiposMediosModel = _tiposMediosModel;
        this._clientesMedios = _clientesMedios;
        this.loginService = loginService;
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
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef, router_1.Router, user_model_1.UserModel, cliente_model_1.ClienteModel, tipos_medio_model_1.TiposMedioModel, clientes_medios_model_1.ClientesMediosModel, login_service_1.LoginService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXNGLGVBQWUsQ0FBQyxDQUFBO0FBRXRHLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2Qyx3QkFBcUQsNENBQTRDLENBQUMsQ0FBQTtBQUNsRywyQkFBMkQsb0NBQW9DLENBQUMsQ0FBQTtBQUloRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEMsSUFBWSxXQUFXLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDM0MscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsMkJBQXdCLHdCQUF3QixDQUFDLENBQUE7QUFDakQsOEJBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsa0NBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsc0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFDdEUsOEJBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFPSSx1QkFBb0IsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixtQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXFCLEVBQ3JCLGFBQTJCLEVBQzNCLGlCQUFrQyxFQUNsQyxlQUFvQyxFQUNwQyxZQUEwQjtRQVIxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFDbEMsb0JBQWUsR0FB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Q0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFDOUIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUE1RkQ7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7b0RBQUE7SUF1Q3ZCO1FBQUMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs7MERBQUE7SUEvQ3RDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDOztxQkFBQTtJQW1HRixvQkFBQztBQUFELENBQUMsQUFqR0QsSUFpR0M7QUFqR1kscUJBQWEsZ0JBaUd6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7RHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQge0RiU2VydmljZX0gZnJvbSBcIi4uLy4uL21vZGVsL2RiLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGVcIjtcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcclxuaW1wb3J0IHtUaXBvc01lZGlvTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC90aXBvc19tZWRpby5tb2RlbFwiO1xyXG5pbXBvcnQge0NsaWVudGVzTWVkaW9zTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC9jbGllbnRlc19tZWRpb3MubW9kZWxcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaW5pY2lvLWluY1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdXNlcjogYW55ID0ge307XHJcbiAgICBwbGF0YWZvcm1hID0gZmFsc2U7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdXNlck1vZGVsOiBVc2VyTW9kZWwsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jbGllbnRlTW9kZWw6IENsaWVudGVNb2RlbCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3RpcG9zTWVkaW9zTW9kZWw6IFRpcG9zTWVkaW9Nb2RlbCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NsaWVudGVzTWVkaW9zOiBDbGllbnRlc01lZGlvc01vZGVsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMub25EcmF3ZXJPcGVuaW5nKCk7XHJcbiAgICAgICAgdGhpcy51c2VyID0ge25hbWU6IFwiQW7Ds25pbW9cIn07XHJcbiAgICAgICAgcGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcclxuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2UgYXJlIHJ1bm5pbmcgb24gQW5kcm9pZCBkZXZpY2UhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRhZm9ybWEgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2UgYXJlIHJ1bm5pbmcgb24gaU9TIGRldmljZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF0YWZvcm1hID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRHJhd2VyT3BlbmluZygpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB7bmFtZTogXCJBbsOzbmltb1wifTtcclxuICAgICAgICB0aGlzLl91c2VyTW9kZWwuZmV0Y2goKS50aGVuKHVzdWFyaW8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXN1YXJpbztcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5kcmF3ZXIuYW5kcm9pZC5zZXRJc0xvY2tlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZHJhd2VyLmFuZHJvaWQuc2V0SXNMb2NrZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9wZW5EcmF3ZXJcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyLmdldElzT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVkaXJlY2Npb24oYXJncykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZWRpcmVjY2lvblwiLCBhcmdzKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvXCIgKyBhcmdzXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRydW5jYXRlRGF0YWJhc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVuY2F0ZURhdGFiYXNlXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbC50cnVuY2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudGVNb2RlbC50cnVuY2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3RpcG9zTWVkaW9zTW9kZWwudHJ1bmNhdGUoKTtcclxuICAgICAgICB0aGlzLl9jbGllbnRlc01lZGlvcy50cnVuY2F0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhbGlyKCkge1xyXG4gICAgICAgIHRoaXMudHJ1bmNhdGVEYXRhYmFzZSgpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHtuYW1lOiBcIkFuw7NuaW1vXCJ9O1xyXG4gICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==