"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../modals/datepicker/date-picker");
var mapa_component_1 = require("../modals/mapa/mapa.component");
var cliente_model_1 = require("../../model/cliente.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var MicuentaComponent = (function () {
    function MicuentaComponent(router, _clienteModel, _clienteMediosModel, _tiposMediosModel, page, vcRef, _modalService) {
        this.router = router;
        this._clienteModel = _clienteModel;
        this._clienteMediosModel = _clienteMediosModel;
        this._tiposMediosModel = _tiposMediosModel;
        this.page = page;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this.cte = { nombre: '1', medios: [] };
        this.valor_inicial = "1";
    }
    MicuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
        this._clienteModel.fetch().then(function (cliente) {
            console.log("Cliente 123=> ", JSON.stringify(cliente));
            _this.cte = cliente;
            _this._clienteMediosModel.fetch().then(function (medios) {
                console.log("MEDIOS=> ", JSON.stringify(medios));
                _this.cte.medios = medios;
            });
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
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            var fecha = new Date(dateresult);
            //console.log("Fecha 123",fecha);
            //console.log("Fecha => ",moment(fecha, "MM-DD-YYYY"));
            //this.form.get('fecha').setValue(moment(dateresult).format('DD/MM/YYYY'));
            _this.onTap('label4');
        });
    };
    MicuentaComponent.prototype.guardar = function () {
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(mapa_component_1.MapaComponent, options)
            .then(function (dateresult) {
            //console.log("date result " + dateresult);
        });
    };
    MicuentaComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: -10, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    MicuentaComponent.prototype.onTap2 = function (lbl, valor) {
        if (valor != "") {
            var label = this.page.getViewById(lbl);
            label.animate({
                translate: { x: -10, y: -15 },
                duration: 500,
                curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            });
        }
        return true;
    };
    MicuentaComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [],
            templateUrl: "pages/micuenta/micuenta.html",
            styleUrls: ["pages/micuenta/css/micuenta.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, cliente_model_1.ClienteModel, clientes_medios_model_1.ClientesMediosModel, tipos_medio_model_1.TiposMedioModel, page_1.Page, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService])
    ], MicuentaComponent);
    return MicuentaComponent;
}());
exports.MicuentaComponent = MicuentaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUV4Qyw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6Riw0QkFBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNyRSwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUU1RCw4QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQVE5RDtJQUlJLDJCQUFvQixNQUFjLEVBQ2QsYUFBMkIsRUFDM0IsbUJBQXdDLEVBQ3hDLGlCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsS0FBdUIsRUFDdkIsYUFBaUM7UUFOakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBVDlDLFFBQUcsR0FBUSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQzVDLGtCQUFhLEdBQVcsR0FBRyxDQUFDO0lBUzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkQsS0FBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFDbkIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLFVBQXNCO1FBQzVCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRHLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUNGLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxpQ0FBbUIsRUFBRSxPQUFPLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsVUFBZ0I7WUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsaUNBQWlDO1lBQ2pDLHVEQUF1RDtZQUN2RCwyRUFBMkU7WUFDM0UsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksNkJBQTZCO1FBQzdCLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBQ0Ysc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDhCQUFhLEVBQUUsT0FBTyxDQUFDO2FBQy9DLElBQUksQ0FBQyxVQUFDLFVBQWdCO1lBQ25CLDJDQUEyQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxpQ0FBSyxHQUFaLFVBQWEsR0FBRztRQUNaLElBQUksS0FBSyxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1YsU0FBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMzQixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxHQUFHLEVBQUUsS0FBSztRQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNWLFNBQVMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQzNCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDdEQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXpGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzs7eUJBQUE7SUFzRkYsd0JBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLHlCQUFpQixvQkFxRjdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtMYWJlbH0gZnJvbSBcInVpL2xhYmVsXCI7XHJcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7RGF0ZXBpY2tlckNvbXBvbmVudH0gZnJvbSBcIi4uL21vZGFscy9kYXRlcGlja2VyL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7TWFwYUNvbXBvbmVudH0gZnJvbSBcIi4uL21vZGFscy9tYXBhL21hcGEuY29tcG9uZW50XCI7XHJcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcclxuaW1wb3J0IHtDbGllbnRlc01lZGlvc01vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvY2xpZW50ZXNfbWVkaW9zLm1vZGVsXCI7XHJcbmltcG9ydCB7VGlwb3NNZWRpb01vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdGlwb3NfbWVkaW8ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWljdWVudGEvbWljdWVudGEuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9taWN1ZW50YS9jc3MvbWljdWVudGEuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWN1ZW50YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY3RlOiBhbnkgPSB7bm9tYnJlOiAnMScsIG1lZGlvczogW119O1xyXG4gICAgdmFsb3JfaW5pY2lhbDogc3RyaW5nID0gXCIxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NsaWVudGVNb2RlbDogQ2xpZW50ZU1vZGVsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2xpZW50ZU1lZGlvc01vZGVsOiBDbGllbnRlc01lZGlvc01vZGVsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdGlwb3NNZWRpb3NNb2RlbDogVGlwb3NNZWRpb01vZGVsLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJNaSBDdWVudGFcIjtcclxuICAgICAgICB0aGlzLl9jbGllbnRlTW9kZWwuZmV0Y2goKS50aGVuKGNsaWVudGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudGUgMTIzPT4gXCIsIEpTT04uc3RyaW5naWZ5KGNsaWVudGUpKTtcclxuICAgICAgICAgICAgdGhpcy5jdGUgPSBjbGllbnRlO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRlTWVkaW9zTW9kZWwuZmV0Y2goKS50aGVuKG1lZGlvcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FRElPUz0+IFwiLCBKU09OLnN0cmluZ2lmeShtZWRpb3MpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3RlLm1lZGlvcyA9IG1lZGlvcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlKGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTgwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAyO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gOTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsUGlja2VyKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtb2RhbHBJQ0tFUlwiKTtcclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxyXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoRGF0ZXBpY2tlckNvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmZWNoYSA9IG5ldyBEYXRlKGRhdGVyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZlY2hhIDEyM1wiLGZlY2hhKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGZWNoYSA9PiBcIixtb21lbnQoZmVjaGEsIFwiTU0tREQtWVlZWVwiKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZm9ybS5nZXQoJ2ZlY2hhJykuc2V0VmFsdWUobW9tZW50KGRhdGVyZXN1bHQpLmZvcm1hdCgnREQvTU0vWVlZWScpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25UYXAoJ2xhYmVsNCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBndWFyZGFyKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtb2RhbHBJQ0tFUlwiKTtcclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxyXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoTWFwYUNvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRlIHJlc3VsdCBcIiArIGRhdGVyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXAobGJsKSB7XHJcbiAgICAgICAgdmFyIGxhYmVsOiBMYWJlbCA9IDxMYWJlbD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKGxibCk7XHJcbiAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZToge3g6IC0xMCwgeTogLTE1fSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAuMSwgMC4xLCAwLjEsIDEpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwMihsYmwsIHZhbG9yKSB7XHJcbiAgICAgICAgaWYgKHZhbG9yICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyIGxhYmVsOiBMYWJlbCA9IDxMYWJlbD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKGxibCk7XHJcbiAgICAgICAgICAgIGxhYmVsLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogLTEwLCB5OiAtMTV9LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLjEsIDAuMSwgMC4xLCAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59Il19