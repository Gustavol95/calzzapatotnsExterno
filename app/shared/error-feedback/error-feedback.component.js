"use strict";
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var types_1 = require("utils/types");
var ErrorFeedbackComponent = (function () {
    function ErrorFeedbackComponent() {
        this.formErrors = '';
        this.validationMessages = {
            'date': 'El campo no corresponde con una fecha válida.',
            'email': 'El campo no corresponde con una dirección de e-mail válida.',
            'required': 'El campo es obligatorio',
            'minlength': 'El campo debe contener al menos x caracteres.',
            'maxlength': 'El campo debe contener x caracteres como máximo.',
            'formatoNumero': 'El campo debe ser numérico'
        };
    }
    Object.defineProperty(ErrorFeedbackComponent.prototype, "messages", {
        set: function (msgs) {
            this.validationMessages = (msgs) ? msgs : this.validationMessages;
        },
        enumerable: true,
        configurable: true
    });
    ErrorFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    ErrorFeedbackComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
        this.formErrors = '';
        var control = form.get(this.name);
        if (control && control.dirty && !control.valid) {
            var attribute = this.name;
            var messages = this.validationMessages;
            for (var key in control.errors) {
                if (!types_1.isNullOrUndefined(messages[key])) {
                    this.formErrors = messages[key];
                }
            }
        }
    };
    __decorate([
        core_1.Input('formGroup'), 
        __metadata('design:type', forms_1.FormGroup)
    ], ErrorFeedbackComponent.prototype, "form", void 0);
    __decorate([
        core_1.Input('controlName'), 
        __metadata('design:type', String)
    ], ErrorFeedbackComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ErrorFeedbackComponent.prototype, "messages", null);
    ErrorFeedbackComponent = __decorate([
        core_1.Component({
            selector: 'app-error-feedback',
            template: "\n      <Label  *ngIf=\"formErrors\"  text=\"{{ formErrors }}\" row=\"2\" style=\"margin:0px 0px 0px 10px;padding:0px 0px 0px 10px;color:red\"></Label>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorFeedbackComponent);
    return ErrorFeedbackComponent;
}());
exports.ErrorFeedbackComponent = ErrorFeedbackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3ItZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsc0JBQXdCLGdCQUFnQixDQUFDLENBQUE7QUFDekMsc0JBQWdDLGFBQWEsQ0FBQyxDQUFBO0FBVTlDO0lBMEJJO1FBbkJBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFRaEIsdUJBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLCtDQUErQztZQUN2RCxPQUFPLEVBQUUsNkRBQTZEO1lBQ3RFLFVBQVUsRUFBRSx5QkFBeUI7WUFDckMsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxXQUFXLEVBQUUsa0RBQWtEO1lBQy9ELGVBQWUsRUFBRSw0QkFBNEI7U0FFaEQsQ0FBQztJQUlGLENBQUM7SUFqQkQsc0JBQUksNENBQVE7YUFBWixVQUFhLElBQVM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQWlCRCx5Q0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7YUFDakIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsSUFBVTtRQUVyQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUV6QyxHQUFHLENBQUMsQ0FBQyxJQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFFTCxDQUFDO0lBcEREO1FBQUMsWUFBSyxDQUFDLFdBQVcsQ0FBQzs7d0RBQUE7SUFDbkI7UUFBQyxZQUFLLENBQUMsYUFBYSxDQUFDOzt3REFBQTtJQUlyQjtRQUFDLFlBQUssRUFBRTs7OzBEQUFBO0lBaEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDJKQUViO1NBQ0EsQ0FBQzs7OEJBQUE7SUE2REYsNkJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLDhCQUFzQix5QkEyRGxDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtpc051bGxPclVuZGVmaW5lZH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1lcnJvci1mZWVkYmFjaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8TGFiZWwgICpuZ0lmPVwiZm9ybUVycm9yc1wiICB0ZXh0PVwie3sgZm9ybUVycm9ycyB9fVwiIHJvdz1cIjJcIiBzdHlsZT1cIm1hcmdpbjowcHggMHB4IDBweCAxMHB4O3BhZGRpbmc6MHB4IDBweCAwcHggMTBweDtjb2xvcjpyZWRcIj48L0xhYmVsPlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JGZWVkYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLy9ASW5wdXQoJ3ZhbGlkYXRpb25NZXNzYWdlcycpIHZhbGlkYXRpb25NZXNzYWdlczogYW55O1xyXG5cclxuICAgIEBJbnB1dCgnZm9ybUdyb3VwJykgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCdjb250cm9sTmFtZScpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBmb3JtRXJyb3JzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IG1lc3NhZ2VzKG1zZ3M6IGFueSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzID0gKG1zZ3MpID8gbXNncyA6IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcclxuICAgICAgICAnZGF0ZSc6ICdFbCBjYW1wbyBubyBjb3JyZXNwb25kZSBjb24gdW5hIGZlY2hhIHbDoWxpZGEuJyxcclxuICAgICAgICAnZW1haWwnOiAnRWwgY2FtcG8gbm8gY29ycmVzcG9uZGUgY29uIHVuYSBkaXJlY2Npw7NuIGRlIGUtbWFpbCB2w6FsaWRhLicsXHJcbiAgICAgICAgJ3JlcXVpcmVkJzogJ0VsIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAnbWlubGVuZ3RoJzogJ0VsIGNhbXBvIGRlYmUgY29udGVuZXIgYWwgbWVub3MgeCBjYXJhY3RlcmVzLicsXHJcbiAgICAgICAgJ21heGxlbmd0aCc6ICdFbCBjYW1wbyBkZWJlIGNvbnRlbmVyIHggY2FyYWN0ZXJlcyBjb21vIG3DoXhpbW8uJyxcclxuICAgICAgICAnZm9ybWF0b051bWVybyc6ICdFbCBjYW1wbyBkZWJlIHNlciBudW3DqXJpY28nXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5vblZhbHVlQ2hhbmdlZChkYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZUNoYW5nZWQoZGF0YT86IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5mb3JtO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSAnJztcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybS5nZXQodGhpcy5uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5kaXJ0eSAmJiAhY29udHJvbC52YWxpZCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWVzc2FnZXNba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSBtZXNzYWdlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==