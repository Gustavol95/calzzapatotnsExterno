"use strict";
var core_1 = require("@angular/core");
var user_class_1 = require("./user.class");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var user_model_1 = require("../../model/user.model");
var page_1 = require("ui/page");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_1 = require("./modal/modal-view");
//registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
var LoginComponent = (function () {
    //@ViewChild("CB1") FirstCheckBox: ElementRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3Qiw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwyQkFBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCwrRUFBK0U7QUFRL0U7SUFJSSw4Q0FBOEM7SUFHOUMsd0JBQW9CLE1BQWMsRUFBVSxZQUEwQixFQUFVLE9BQWtCLEVBQVUsSUFBVSxFQUFVLGFBQWlDLEVBQVUsS0FBdUI7UUFBOUssV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUxsTSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1mLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFFakQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUVYLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFZLENBQUM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUNGLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQywrQkFBa0IsRUFBRSxPQUFPLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUMsVUFBZ0I7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBekNEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3FEQUFBO0lBVDNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDOztzQkFBQTtJQThDRixxQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksc0JBQWMsaUJBNkMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuLy9pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7TW9kYWxWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC12aWV3XCI7XG4vL3JlZ2lzdGVyRWxlbWVudChcIkNoZWNrQm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2hlY2tib3hcIikuQ2hlY2tCb3gpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIC8vQFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIHVzdWFyaW86IFVzZXJNb2RlbCwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcInRlc3RAbWFpbC5jb21cIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJzZWNyZXRcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiSW5pY2lhciBTZXNpw7NuXCI7XG5cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB1c2VyOiBVc2VyID0gZGF0YS51c2VyIGFzIFVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvLmluc2VydCh1c2VyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzdWFyaW8uZmV0Y2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlVzdWFyaW8geS9vIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zIG8gbm8gY3VlbnRhIGNvbiBhY2Nlc28gYSBpbnRlcm5ldC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWN1cGVyYXJQYXNzd29yZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWN1cGVyYXJQYXNzd29yZFwiKTtcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICAvLyA+PiByZXR1cm5pbmctcmVzdWx0XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgcmVzdWx0IFwiICsgZGF0ZXJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cbn0iXX0=