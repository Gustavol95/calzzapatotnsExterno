"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var date_picker_1 = require("./datepicker/date-picker");
var routes = [
    { path: 'datepicker', component: date_picker_1.DatepickerComponent },
];
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [date_picker_1.DatepickerComponent],
            exports: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFFckQsNEJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFDN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQ0FBbUIsRUFBQztDQUV2RCxDQUFBO0FBU0Q7SUFBQTtJQUEwQixDQUFDO0lBUjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLGlDQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBhY3Rpdml0eUluZGljYXRvck1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7XHJcbmltcG9ydCB7RGF0ZXBpY2tlckNvbXBvbmVudH0gZnJvbSBcIi4vZGF0ZXBpY2tlci9kYXRlLXBpY2tlclwiO1xyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtwYXRoOiAnZGF0ZXBpY2tlcicsIGNvbXBvbmVudDogRGF0ZXBpY2tlckNvbXBvbmVudH0sXHJcblxyXG5dXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbRGF0ZXBpY2tlckNvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHt9Il19