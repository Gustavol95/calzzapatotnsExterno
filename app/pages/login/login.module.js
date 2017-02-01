"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_component_1 = require('./login.component');
var router_1 = require("@angular/router");
var modal_view_1 = require("./modal/modal-view");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'recuperar', component: modal_view_1.ModalViewComponent },
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [login_component_1.LoginComponent, modal_view_1.ModalViewComponent],
            exports: [login_component_1.LoginComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFHckQsMkJBQWlDLG9CQUFvQixDQUFDLENBQUE7QUFDdEQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUM7Q0FFckQsQ0FBQTtBQVNEO0lBQUE7SUFBMEIsQ0FBQztJQVIzQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFDLCtCQUFrQixDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuLi8uLi9tb2RlbC9kYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCBhY3Rpdml0eUluZGljYXRvck1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7XHJcbmltcG9ydCB7TW9kYWxWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC12aWV3XCI7XHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAncmVjdXBlcmFyJywgY29tcG9uZW50OiBNb2RhbFZpZXdDb21wb25lbnR9LFxyXG5cclxuXVxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50LE1vZGFsVmlld0NvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUge30iXX0=