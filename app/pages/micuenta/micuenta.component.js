"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../modals/datepicker/date-picker");
var mapa_component_1 = require("../modals/mapa/mapa.component");
var user_model_1 = require("../../model/user.model");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var MicuentaComponent = (function () {
    function MicuentaComponent(router, usr, page, vcRef, _modalService, fb) {
        this.router = router;
        this.usr = usr;
        this.page = page;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this.user = { name: ' ' };
        this.valor_inicial = "1";
        this._fb = fb;
    }
    MicuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
        this.form = this._fb.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(128)]],
            fecha: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(255)]]
        });
        this.usr.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
                _this.form.reset(_this.user);
                console.log("Usuario => ", JSON.stringify(_this.user));
            }
        });
    };
    MicuentaComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    MicuentaComponent.prototype.modalPicker = function () {
        var _this = this;
        console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            var fecha = new Date(dateresult);
            console.log("Fecha 123", fecha);
            console.log("Fecha => ", moment(fecha, "MM-DD-YYYY"));
            _this.form.get('fecha').setValue(moment(dateresult).format('DD/MM/YYYY'));
        });
    };
    MicuentaComponent.prototype.guardar = function () {
        console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(mapa_component_1.MapaComponent, options)
            .then(function (dateresult) {
            console.log("date result " + dateresult);
        });
    };
    MicuentaComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    MicuentaComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [],
            templateUrl: "pages/micuenta/micuenta.html",
            styleUrls: ["pages/micuenta/css/micuenta.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_model_1.UserModel, page_1.Page, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, forms_1.FormBuilder])
    ], MicuentaComponent);
    return MicuentaComponent;
}());
exports.MicuentaComponent = MicuentaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUV4Qyw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6Riw0QkFBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNyRSwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCwyQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxJQUFPLE1BQU0sV0FBVyxRQUFRLENBQUMsQ0FBQztBQVFsQztJQU1JLDJCQUFvQixNQUFjLEVBQVUsR0FBYyxFQUFVLElBQVUsRUFBVSxLQUF1QixFQUFVLGFBQWlDLEVBQUUsRUFBZTtRQUF2SixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUxuSixTQUFJLEdBQVEsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUM7UUFHL0Isa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFHeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIs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Q0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1YsU0FBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDekIsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNQLENBQUM7SUE3RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7O3lCQUFBO0lBMEVGLHdCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQztBQXpFWSx5QkFBaUIsb0JBeUU3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7TGFiZWx9IGZyb20gXCJ1aS9sYWJlbFwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQge0RhdGVwaWNrZXJDb21wb25lbnR9IGZyb20gXCIuLi9tb2RhbHMvZGF0ZXBpY2tlci9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQge01hcGFDb21wb25lbnR9IGZyb20gXCIuLi9tb2RhbHMvbWFwYS9tYXBhLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21pY3VlbnRhL21pY3VlbnRhLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWljdWVudGEvY3NzL21pY3VlbnRhLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWljdWVudGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHVzZXI6IGFueSA9IHtuYW1lOiAnICd9O1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJvdGVjdGVkIF9mYjogRm9ybUJ1aWxkZXI7XHJcbiAgICB2YWxvcl9pbmljaWFsOiBzdHJpbmcgPSBcIjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzcjogVXNlck1vZGVsLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLl9mYiA9IGZiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiTWkgQ3VlbnRhXCI7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEyOCldXSxcclxuICAgICAgICAgICAgZmVjaGE6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU1KV1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51c3IuZmV0Y2goKS50aGVuKHVzdWFyaW8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXN1YXJpbztcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc3VhcmlvID0+IFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmUoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcikge1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5ODA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSA5O1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDE5NzUsIDAsIDI5KTtcclxuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWxQaWNrZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2RhbHBJQ0tFUlwiKTtcclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxyXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoRGF0ZXBpY2tlckNvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZlY2hhID0gbmV3IERhdGUoZGF0ZXJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmVjaGEgMTIzXCIsZmVjaGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZlY2hhID0+IFwiLG1vbWVudChmZWNoYSwgXCJNTS1ERC1ZWVlZXCIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ2ZlY2hhJykuc2V0VmFsdWUobW9tZW50KGRhdGVyZXN1bHQpLmZvcm1hdCgnREQvTU0vWVlZWScpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3VhcmRhcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vZGFscElDS0VSXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyA+PiByZXR1cm5pbmctcmVzdWx0XHJcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNYXBhQ29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0ZXJlc3VsdDogRGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRlIHJlc3VsdCBcIiArIGRhdGVyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXAobGJsKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsOiBMYWJlbCA9IDxMYWJlbD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKGxibCk7XHJcbiAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZToge3g6IDAsIHk6IC0xNX0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLjEsIDAuMSwgMC4xLCAxKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==