"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
// >> passing-parameters
var DatepickerComponent = (function () {
    function DatepickerComponent(params, page) {
        this.params = params;
        this.page = page;
        this.currentdate = new Date(params.context);
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        var datePicker = this.page.getViewById("datePicker");
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    DatepickerComponent.prototype.submit = function () {
        var datePicker = this.page.getViewById("datePicker");
        this.params.closeCallback(datePicker.date);
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./date-picker.html"
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
// << passing-parameters
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDZCQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXRFLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUUvQix3QkFBd0I7QUFNeEI7SUFHSSw2QkFBb0IsTUFBeUIsRUFBVSxJQUFVO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUN6RixVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtTQUVwQyxDQUFDOzsyQkFBQTtJQXFCRiwwQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksMkJBQW1CLHNCQW9CL0IsQ0FBQTtBQUNELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuLy8gPj4gcGFzc2luZy1wYXJhbWV0ZXJzXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGF0ZS1waWNrZXIuaHRtbFwiXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY3VycmVudGRhdGU6IERhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRkYXRlID0gbmV3IERhdGUocGFyYW1zLmNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyOiBEYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KFwiZGF0ZVBpY2tlclwiKTtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSB0aGlzLmN1cnJlbnRkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IHRoaXMuY3VycmVudGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSB0aGlzLmN1cnJlbnRkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8RGF0ZVBpY2tlcj4oXCJkYXRlUGlja2VyXCIpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soZGF0ZVBpY2tlci5kYXRlKTtcclxuICAgIH1cclxufVxyXG4vLyA8PCBwYXNzaW5nLXBhcmFtZXRlcnNcclxuIl19