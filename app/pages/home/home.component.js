"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var db_service_1 = require("../../model/db.service");
var user_model_1 = require("../../model/user.model");
var http_service_1 = require("../../custom-http/http-service");
var dialogs = require("ui/dialogs");
var application = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, page, _changeDetectionRef, router, usr, dbService, http) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this.usr = usr;
        this.dbService = dbService;
        this.http = http;
        this.user = {};
        this.plataforma = false;
        this.onDrawerOpening();
        this.user = { name: "Anónimo" };
        page.on("loaded", this.onLoaded, this);
        if (application.android) {
            console.log("We are running on Android device!");
            this.plataforma = false;
        }
        else if (application.ios) {
            console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }
    HomeComponent.prototype.onDrawerOpening = function () {
        var _this = this;
        this.user = { name: "Anónimo" };
        this.usr.fetch().then(function (usuario) {
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
        console.log("openDrawer");
        if (this.drawer.getIsOpen()) {
            this.drawer.closeDrawer();
        }
        else {
            this.drawer.showDrawer();
        }
    };
    HomeComponent.prototype.redireccion = function (args) {
        console.log("redireccion", args);
        this.routerExtensions.navigate(["/home/" + args], { clearHistory: true });
        this.drawer.closeDrawer();
    };
    HomeComponent.prototype.salir = function () {
        //this.drawer.closeDrawer();
        this.usr.truncate();
        this.user = { name: "Anónimo" };
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
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef, router_1.Router, user_model_1.UserModel, db_service_1.DbService, http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXNGLGVBQWUsQ0FBQyxDQUFBO0FBRXRHLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2Qyx3QkFBcUQsNENBQTRDLENBQUMsQ0FBQTtBQUNsRywyQkFBMkQsb0NBQW9DLENBQUMsQ0FBQTtBQUNoRywyQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCwyQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUzRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEMsSUFBWSxXQUFXLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDM0MscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFNdEQ7SUFNSSx1QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVSxFQUFVLG1CQUFzQyxFQUFVLE1BQWMsRUFBVSxHQUFjLEVBQVUsU0FBb0IsRUFBVSxJQUFpQjtRQUEvTSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBSDVOLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUdmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUMsS0FBSyxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFFeEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO1lBRVIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQU1ELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQVcsK0NBQW9CO2FBQS9CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVNLDhCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0ksNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBMUVEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O29EQUFBO0lBOEJ2QjtRQUFDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OzBEQUFBO0lBckN0QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7O3FCQUFBO0lBaUZGLG9CQUFDO0FBQUQsQ0FBQyxBQS9FRCxJQStFQztBQS9FWSxxQkFBYSxnQkErRXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHtEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQge0RiU2VydmljZX0gZnJvbSBcIi4uLy4uL21vZGVsL2RiLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvck9ic2VydmFibGV9IGZyb20gXCJyeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlXCI7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaW5pY2lvLWluY1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHVzZXI6IGFueSA9IHt9O1xuICAgIHBsYXRhZm9ybWEgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzcjogVXNlck1vZGVsLCBwcml2YXRlIGRiU2VydmljZTogRGJTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMub25EcmF3ZXJPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMudXNlciA9IHtuYW1lOiBcIkFuw7NuaW1vXCJ9O1xuICAgICAgICBwYWdlLm9uKFwibG9hZGVkXCIsIHRoaXMub25Mb2FkZWQsIHRoaXMpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBBbmRyb2lkIGRldmljZSFcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXRhZm9ybWE9ZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBydW5uaW5nIG9uIGlPUyBkZXZpY2VcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXRhZm9ybWE9dHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXdlck9wZW5pbmcoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHtuYW1lOiBcIkFuw7NuaW1vXCJ9O1xuICAgICAgICB0aGlzLnVzci5mZXRjaCgpLnRoZW4odXN1YXJpbyA9PiB7XG4gICAgICAgICAgICBpZiAodXN1YXJpbykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzdWFyaW87XG4gICAgICAgICAgICAgICAgLy90aGlzLmRyYXdlci5hbmRyb2lkLnNldElzTG9ja2VkKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmRyYXdlci5hbmRyb2lkLnNldElzTG9ja2VkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBvcGVuRHJhd2VyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5EcmF3ZXJcIik7XG4gICAgICAgIGlmICh0aGlzLmRyYXdlci5nZXRJc09wZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWRpcmVjY2lvbihhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkaXJlY2Npb25cIiwgYXJncyk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZS9cIiArIGFyZ3NdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG5cbiAgICB9XG4gICAgc2FsaXIoKSB7XG4gICAgICAgIC8vdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgdGhpcy51c3IudHJ1bmNhdGUoKTtcbiAgICAgICAgdGhpcy51c2VyID0ge25hbWU6IFwiQW7Ds25pbW9cIn07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuXG59Il19