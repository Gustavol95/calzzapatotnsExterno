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
            _this.router.navigate(["/home/inicio"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUcsZUFBZSxDQUFDLENBQUE7QUFDdkgsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3Qiw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwyQkFBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCwrRUFBK0U7QUFRL0U7SUFJSSw4Q0FBOEM7SUFHOUMsd0JBQW9CLE1BQWMsRUFBVSxZQUEwQixFQUFVLE9BQWtCLEVBQVUsSUFBVSxFQUFVLGFBQWlDLEVBQVUsS0FBdUI7UUFBOUssV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUxsTSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1mLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFFakQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUVYLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFZLENBQUM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUNGLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQywrQkFBa0IsRUFBRSxPQUFPLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUMsVUFBZ0I7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBekNEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3FEQUFBO0lBVDNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDOztzQkFBQTtJQThDRixxQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksc0JBQWMsaUJBNkMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIuY2xhc3NcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuLy9pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7TW9kYWxWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC12aWV3XCI7XHJcbi8vcmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgLy9AVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHByaXZhdGUgdXN1YXJpbzogVXNlck1vZGVsLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcInRlc3RAbWFpbC5jb21cIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInNlY3JldFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiSW5pY2lhciBTZXNpw7NuXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlcjogVXNlciA9IGRhdGEudXNlciBhcyBVc2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvLmluc2VydCh1c2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpby5mZXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvaW5pY2lvXCJdKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3RvcyBvIG5vIGN1ZW50YSBjb24gYWNjZXNvIGEgaW50ZXJuZXQuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWN1cGVyYXJQYXNzd29yZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlY3VwZXJhclBhc3N3b3JkXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyA+PiByZXR1cm5pbmctcmVzdWx0XHJcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNb2RhbFZpZXdDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRlcmVzdWx0OiBEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgcmVzdWx0IFwiICsgZGF0ZXJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==