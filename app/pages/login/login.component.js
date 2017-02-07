"use strict";
var core_1 = require("@angular/core");
var user_class_1 = require("./user.class");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var user_model_1 = require("../../model/user.model");
var page_1 = require("ui/page");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_1 = require("./modal/modal-view");
var nativescript_angular_1 = require("nativescript-angular");
//registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
var LoginComponent = (function () {
    //@ViewChild("CB1") FirstCheckBox: ElementRef;
    function LoginComponent(routerExtensions, router, loginService, usuario, page, _modalService, vcRef) {
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.loginService = loginService;
        this.usuario = usuario;
        this.page = page;
        this._modalService = _modalService;
        this.vcRef = vcRef;
        this.isLoggingIn = true;
        this.user = new user_class_1.User();
        this.user.email = "test@mail.com";
        this.user.password = "secret";
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.usuario.fetch().then(function (usuario) {
            if (usuario) {
                _this.routerExtensions.navigate(["/home/inicio"], { clearHistory: true });
            }
            else {
                _this.routerExtensions.navigate(["/"]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Iniciar Sesión";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.user)
            .subscribe(function (data) {
            var user = data.user;
            _this.usuario.insert(user);
            _this.usuario.fetch();
            _this.routerExtensions.navigate(["/home/inicio"], { clearHistory: true });
        }, function (error) {
            alert("Usuario y/o contraseña incorrectos o no cuenta con acceso a internet.");
        });
    };
    LoginComponent.prototype.recuperarPassword = function () {
        console.log("recuperarPassword");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(modal_view_1.ModalViewComponent, options)
            .then(function (dateresult) {
            console.log("date result " + dateresult);
        });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [login_service_1.LoginService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, router_1.Router, login_service_1.LoginService, user_model_1.UserModel, page_1.Page, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
