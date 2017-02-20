"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var listado_cliente_component_1 = require("./listado/listado.cliente.component");
var cliente_service_1 = require("./cliente.service");
var formulario_cliente_component_1 = require("./formulario/formulario.cliente.component");
var routes = [
    { path: '', component: listado_cliente_component_1.ListadoClienteComponent },
    { path: 'create', component: formulario_cliente_component_1.FormularioClienteComponent }
];
var ClienteModule = (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                listado_cliente_component_1.ListadoClienteComponent,
                formulario_cliente_component_1.FormularioClienteComponent
            ],
            //exports: [],
            providers: [cliente_service_1.ClienteService]
        }), 
        __metadata('design:paramtypes', [])
    ], ClienteModule);
    return ClienteModule;
}());
exports.ClienteModule = ClienteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELDBDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVFLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDZDQUF5QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7SUFDOUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBQztDQUUxRCxDQUFBO0FBYUQ7SUFBQTtJQUE0QixDQUFDO0lBWjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDVixtREFBdUI7Z0JBQ3ZCLHlEQUEwQjthQUM3QjtZQUNELGNBQWM7WUFDZCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O3FCQUFBO0lBQzBCLG9CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixxQkFBYSxnQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TGlzdGFkb0NsaWVudGVDb21wb25lbnR9IGZyb20gXCIuL2xpc3RhZG8vbGlzdGFkby5jbGllbnRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NsaWVudGVTZXJ2aWNlfSBmcm9tIFwiLi9jbGllbnRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtdWxhcmlvQ2xpZW50ZUNvbXBvbmVudH0gZnJvbSBcIi4vZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNsaWVudGUuY29tcG9uZW50XCI7XHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IExpc3RhZG9DbGllbnRlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnY3JlYXRlJywgY29tcG9uZW50OiBGb3JtdWxhcmlvQ2xpZW50ZUNvbXBvbmVudH1cclxuXHJcbl1cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBMaXN0YWRvQ2xpZW50ZUNvbXBvbmVudCxcclxuICAgICAgICBGb3JtdWxhcmlvQ2xpZW50ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIC8vZXhwb3J0czogW10sXHJcbiAgICBwcm92aWRlcnM6IFtDbGllbnRlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWVudGVNb2R1bGUge30iXX0=