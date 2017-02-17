"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var cliente_service_1 = require("../cliente.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var ListadoClienteComponent = (function () {
    function ListadoClienteComponent(routerExtensions, page, _clienteService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._clienteService = _clienteService;
        this.listLoaded = false;
        this._clienteService.index().subscribe(function (clientes) {
            _this.clientes = clientes.data;
            _this.listLoaded = true;
        });
    }
    ListadoClienteComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Clientes";
    };
    ListadoClienteComponent.prototype.nuevo = function () {
        this.routerExtensions.navigate(["/home/cliente/create"]);
    };
    ListadoClienteComponent = __decorate([
        core_1.Component({
            selector: "my-app-clientes",
            providers: [cliente_service_1.ClienteService],
            templateUrl: "pages/cliente/listado/listado-cliente.html",
            styleUrls: ["pages/cliente/css/cliente.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, cliente_service_1.ClienteService])
    ], ListadoClienteComponent);
    return ListadoClienteComponent;
}());
exports.ListadoClienteComponent = ListadoClienteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby5jbGllbnRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RhZG8uY2xpZW50ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsZ0NBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsaUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFDeEUsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBUS9FO0lBR0ksaUNBQW9CLGdCQUFrQyxFQUFVLElBQVUsRUFBVSxlQUErQjtRQUh2SCxpQkFrQkM7UUFmdUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFEbkgsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVmLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQzlDLENBQUM7SUFDRCx1Q0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBdkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7OytCQUFBO0lBbUJGLDhCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSwrQkFBdUIsMEJBa0JuQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0NsaWVudGVTZXJ2aWNlfSBmcm9tIFwiLi4vY2xpZW50ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHAtY2xpZW50ZXNcIixcclxuICAgIHByb3ZpZGVyczogW0NsaWVudGVTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2NsaWVudGUvbGlzdGFkby9saXN0YWRvLWNsaWVudGUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jbGllbnRlL2Nzcy9jbGllbnRlLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGFkb0NsaWVudGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGNsaWVudGVzOiBhbnlbXTtcclxuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jbGllbnRlU2VydmljZTogQ2xpZW50ZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9jbGllbnRlU2VydmljZS5pbmRleCgpLnN1YnNjcmliZShjbGllbnRlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50ZXMgPSBjbGllbnRlcy5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiTWkgQ2xpZW50ZXNcIjtcclxuICAgIH1cclxuICAgIG51ZXZvKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZS9jbGllbnRlL2NyZWF0ZVwiXSk7XHJcblxyXG4gICAgfVxyXG59Il19