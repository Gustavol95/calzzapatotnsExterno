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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0csZUFBZSxDQUFDLENBQUE7QUFDeEgsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3Qiw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwyQkFBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCwrRUFBK0U7QUFRL0U7SUFJSSw4Q0FBOEM7SUFHOUMsd0JBQW9CLGdCQUFrQyxFQUFVLE1BQWMsRUFBVSxZQUEwQixFQUFVLE9BQWtCLEVBQVUsSUFBVSxFQUFVLGFBQWlDLEVBQVUsS0FBdUI7UUFBMU4scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFMOU8sZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFNZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFHakQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUVYLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFZLENBQUM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMzRSxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBQ0Ysc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLCtCQUFrQixFQUFFLE9BQU8sQ0FBQzthQUNwRCxJQUFJLENBQUMsVUFBQyxVQUFnQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFwREQ7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7cURBQUE7SUFUM0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7O3NCQUFBO0lBeURGLHFCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxzQkFBYyxpQkF3RDFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIuY2xhc3NcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuLy9pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7TW9kYWxWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC12aWV3XCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbi8vcmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgLy9AVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSB1c3VhcmlvOiBVc2VyTW9kZWwsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwidGVzdEBtYWlsLmNvbVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwic2VjcmV0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMudXN1YXJpby5mZXRjaCgpLnRoZW4odXN1YXJpbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvaW5pY2lvXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIkluaWNpYXIgU2VzacOzblwiO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1c2VyOiBVc2VyID0gZGF0YS51c2VyIGFzIFVzZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzdWFyaW8uaW5zZXJ0KHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvLmZldGNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvaW5pY2lvXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVXN1YXJpbyB5L28gY29udHJhc2XDsWEgaW5jb3JyZWN0b3MgbyBubyBjdWVudGEgY29uIGFjY2VzbyBhIGludGVybmV0LlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdXBlcmFyUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWN1cGVyYXJQYXNzd29yZFwiKTtcclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxyXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0ZXJlc3VsdDogRGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRlIHJlc3VsdCBcIiArIGRhdGVyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iXX0=