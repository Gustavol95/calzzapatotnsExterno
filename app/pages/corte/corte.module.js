"use strict";
var corte_component_1 = require("./corte.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
/**
 * Created by iedeveloper on 15/02/17.
 */
var routes = [
    { path: '', component: corte_component_1.CorteComponent }
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
            declarations: [corte_component_1.CorteComponent],
            exports: [corte_component_1.CorteComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MicuentaModule);
    return MicuentaModule;
}());
exports.MicuentaModule = MicuentaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ydGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ydGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUVqRCxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0M7O0dBRUc7QUFFSCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7Q0FFeEMsQ0FBQTtBQVNEO0lBQUE7SUFBNkIsQ0FBQztJQVI5QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7c0JBQUE7SUFDMkIscUJBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCO0FBQWpCLHNCQUFjLGlCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvcnRlQ29tcG9uZW50fSBmcm9tIFwiLi9jb3J0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGllZGV2ZWxvcGVyIG9uIDE1LzAyLzE3LlxyXG4gKi9cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IENvcnRlQ29tcG9uZW50fVxyXG5cclxuXVxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0NvcnRlQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtDb3J0ZUNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWN1ZW50YU1vZHVsZSB7fSJdfQ==