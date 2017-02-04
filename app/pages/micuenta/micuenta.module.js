"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var micuenta_component_1 = require('./micuenta.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: micuenta_component_1.MicuentaComponent }
];
var MicuentaModule = (function () {
    function MicuentaModule() {
    }
    MicuentaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [micuenta_component_1.MicuentaComponent],
            exports: [micuenta_component_1.MicuentaComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MicuentaModule);
    return MicuentaModule;
}());
exports.MicuentaModule = MicuentaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztDQUUzQyxDQUFBO0FBU0Q7SUFBQTtJQUE2QixDQUFDO0lBUjlCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBQzJCLHFCQUFDO0FBQUQsQ0FBQyxBQUE5QixJQUE4QjtBQUFqQixzQkFBYyxpQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01pY3VlbnRhQ29tcG9uZW50fSBmcm9tICcuL21pY3VlbnRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogTWljdWVudGFDb21wb25lbnR9XHJcblxyXG5dXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbTWljdWVudGFDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW01pY3VlbnRhQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1pY3VlbnRhTW9kdWxlIHt9Il19