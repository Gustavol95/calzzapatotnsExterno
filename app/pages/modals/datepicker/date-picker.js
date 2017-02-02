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
            templateUrl: "./date-picker.html",
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
// << passing-parameters
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDZCQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXRFLHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUUvQix3QkFBd0I7QUFLeEI7SUFHSSw2QkFBb0IsTUFBeUIsRUFBVSxJQUFVO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUN6RixVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXZCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOzsyQkFBQTtJQXFCRiwwQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksMkJBQW1CLHNCQW9CL0IsQ0FBQTtBQUNELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG4vLyA+PiBwYXNzaW5nLXBhcmFtZXRlcnNcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kYXRlLXBpY2tlci5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjdXJyZW50ZGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGRhdGUgPSBuZXcgRGF0ZShwYXJhbXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBkYXRlUGlja2VyOiBEYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KFwiZGF0ZVBpY2tlclwiKTtcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gdGhpcy5jdXJyZW50ZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gdGhpcy5jdXJyZW50ZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSB0aGlzLmN1cnJlbnRkYXRlLmdldERhdGUoKTtcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk3NSwgMCwgMjkpO1xuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8RGF0ZVBpY2tlcj4oXCJkYXRlUGlja2VyXCIpO1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKGRhdGVQaWNrZXIuZGF0ZSk7XG4gICAgfVxufVxuLy8gPDwgcGFzc2luZy1wYXJhbWV0ZXJzXG4iXX0=