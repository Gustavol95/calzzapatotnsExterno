"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var oficinacredito_component_1 = require("./oficinacredito.component");
var routes = [
    { path: '', component: oficinacredito_component_1.OficinacreditoComponent }
];
var OficinacreditoModule = (function () {
    function OficinacreditoModule() {
    }
    OficinacreditoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [oficinacredito_component_1.OficinacreditoComponent],
            exports: [oficinacredito_component_1.OficinacreditoComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], OficinacreditoModule);
    return OficinacreditoModule;
}());
exports.OficinacreditoModule = OficinacreditoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZpY2luYWNyZWRpdG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2ZpY2luYWNyZWRpdG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztDQUVqRCxDQUFBO0FBU0Q7SUFBQTtJQUFtQyxDQUFDO0lBUnBDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLGtEQUF1QixDQUFDO1NBQ3JDLENBQUM7OzRCQUFBO0lBQ2lDLDJCQUFDO0FBQUQsQ0FBQyxBQUFwQyxJQUFvQztBQUF2Qiw0QkFBb0IsdUJBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge09maWNpbmFjcmVkaXRvQ29tcG9uZW50fSBmcm9tIFwiLi9vZmljaW5hY3JlZGl0by5jb21wb25lbnRcIjtcclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogT2ZpY2luYWNyZWRpdG9Db21wb25lbnR9XHJcblxyXG5dXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbT2ZpY2luYWNyZWRpdG9Db21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW09maWNpbmFjcmVkaXRvQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9maWNpbmFjcmVkaXRvTW9kdWxlIHt9Il19