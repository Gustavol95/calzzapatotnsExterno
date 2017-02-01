"use strict";
var core_1 = require("@angular/core");
var user_class_1 = require("./user.class");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var user_model_1 = require("../../model/user.model");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_1 = require("./modal/modal-view");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var LoginComponent = (function () {
    function LoginComponent(router, loginService, usuario, page, _modalService, vcRef) {
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
            _this.router.navigate(["/"]);
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
    __decorate([
        core_1.ViewChild("CB1"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "FirstCheckBox", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [login_service_1.LoginService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, user_model_1.UserModel, page_1.Page, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3QixpQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwyQkFBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFRN0U7SUFPSSx3QkFBb0IsTUFBYyxFQUFVLFlBQTBCLEVBQVUsT0FBa0IsRUFBVSxJQUFVLEVBQVUsYUFBaUMsRUFBVSxLQUF1QjtRQUE5SyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBTGxNLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUVqRCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxJQUFJO1lBRVgsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQVksQ0FBQztZQUNuQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBQ0Ysc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLCtCQUFrQixFQUFFLE9BQU8sQ0FBQzthQUNwRCxJQUFJLENBQUMsVUFBQyxVQUFnQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUF6Q0Q7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7cURBQUE7SUFDdkI7UUFBQyxnQkFBUyxDQUFDLEtBQUssQ0FBQzs7eURBQUE7SUFWckI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7O3NCQUFBO0lBOENGLHFCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQztBQTdDWSxzQkFBYyxpQkE2QzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlci5jbGFzc1wiO1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtDaGVja0JveH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94JztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHtNb2RhbFZpZXdDb21wb25lbnR9IGZyb20gXCIuL21vZGFsL21vZGFsLXZpZXdcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIHVzdWFyaW86IFVzZXJNb2RlbCwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJ0ZXN0QG1haWwuY29tXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJzZWNyZXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIkluaWNpYXIgU2VzacOzblwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXI6IFVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpby5pbnNlcnQodXNlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzdWFyaW8uZmV0Y2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlVzdWFyaW8geS9vIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zIG8gbm8gY3VlbnRhIGNvbiBhY2Nlc28gYSBpbnRlcm5ldC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3VwZXJhclBhc3N3b3JkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjdXBlcmFyUGFzc3dvcmRcIik7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vID4+IHJldHVybmluZy1yZXN1bHRcclxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE1vZGFsVmlld0NvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZSByZXN1bHQgXCIgKyBkYXRlcmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59Il19