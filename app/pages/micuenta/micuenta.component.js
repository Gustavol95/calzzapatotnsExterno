"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../modals/datepicker/date-picker");
var MicuentaComponent = (function () {
    function MicuentaComponent(router, page, vcRef, _modalService) {
        this.router = router;
        this.page = page;
        this.vcRef = vcRef;
        this._modalService = _modalService;
    }
    MicuentaComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
    };
    MicuentaComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    MicuentaComponent.prototype.modalPicker = function () {
        console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            console.log("date result " + dateresult);
        });
    };
    MicuentaComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -25 },
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
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService])
    ], MicuentaComponent);
    return MicuentaComponent;
}());
exports.MicuentaComponent = MicuentaComponent;
