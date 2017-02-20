"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var cliente_service_1 = require("../cliente.service");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../../modals/datepicker/date-picker");
var moment = require("moment");
var forms_1 = require("@angular/forms");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var user_model_1 = require("../../../model/user.model");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var FormularioClienteComponent = (function () {
    function FormularioClienteComponent(router, routerExtensions, page, _clienteService, _userModel, vcRef, _modalService, _fb) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._clienteService = _clienteService;
        this._userModel = _userModel;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this._fb = _fb;
        this.validationMessages = {
            nombre: {
                required: "El nombre es obligatorio",
                maxLength: "El tamaño máximo del nombre es de 255 dígitos",
                minLength: "El tamaño mínimo del nombre es de 1 dígito"
            },
            paterno: {
                required: "El apellido paterno es obligatorio",
                maxLength: "El tamaño máximo del apellido paterno es de 255 dígitos",
                minLength: "El tamaño mínimo del apellido paterno es de 1 dígito"
            },
            materno: {
                required: "El apellido materno es obligatorio",
                maxLength: "El tamaño máximo del apellido materno es de 255 dígitos",
                minLength: "El tamaño mínimo del apellido materno es de 1 dígito"
            },
            celular: {
                required: "El celular es obligatorio",
                maxLength: "El tamaño máximo del celular es de 10 dígitos",
                minLength: "El tamaño mínimo del celular es de 10 dígitos",
                celular: "Ingrese un celular válido"
            },
            email: {
                required: "El email es obligatorio",
                maxLength: "El tamaño máximo del email es de 255 dígitos",
                minLength: "El tamaño mínimo del email es de 1 dígito",
                email: "El correo no corresponde con una dirección de e-mail válida."
            },
            fecha_nacimiento: {
                required: "La fecha de nacimiento es obligatoria",
                maxLength: "La tamaño máximo del fecha de nacimiento es de 255 dígitos",
                minLength: "La tamaño mínimo del fecha de nacimiento es de 1 dígito"
            },
            calle: {
                required: "La calle es obligatorio",
                maxLength: "La tamaño máximo del calle es de 255 dígitos",
                minLength: "La tamaño mínimo del calle es de 1 dígito"
            },
            numero_exterior: {
                required: "El número exterior es obligatorio",
                maxLength: "El tamaño máximo del número exterior es de 255 dígitos",
                minLength: "El tamaño mínimo del número exterior es de 1 dígito"
            },
            numero_interior: {
                required: "El número interior es obligatorio",
                maxLength: "El tamaño máximo del número interior es de 255 dígitos",
                minLength: "El tamaño mínimo del número interior es de 1 dígito"
            },
            colonia: {
                required: "La colonia es obligatorio",
                maxLength: "La tamaño máximo del colonia es de 255 dígitos",
                minLength: "La tamaño mínimo del colonia es de 1 dígito"
            },
            cp: {
                required: "El código postal es obligatorio",
                maxLength: "El tamaño máximo del código postal es de 10 dígitos",
                minLength: "El tamaño mínimo del código postal es de 1 dígito"
            }
        };
    }
    FormularioClienteComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Agregar Cliente";
        this.form = this._fb.group({
            nombre: ['Henry', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            paterno: ['Cañedo', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            materno: ['Zamudio', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            celular: ['6691657109', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10), CustomValidators_1.CustomValidators.celular]],
            email: ['heris161993@gmail.com', [forms_1.Validators.required, forms_1.Validators.minLength(1), CustomValidators_1.CustomValidators.email]],
            fecha_nacimiento: ['09/04/1993', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            calle: ['Los Sauces', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_exterior: ['896', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_interior: ['402', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            colonia: ['La campiña', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            cp: ['82600', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(10)]]
        });
    };
    FormularioClienteComponent.prototype.modalPicker = function () {
        var _this = this;
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            _this.form.get('fecha_nacimiento').setValue(moment(dateresult).format('DD/MM/YYYY'));
            _this.onTap('label7');
        });
    };
    FormularioClienteComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    FormularioClienteComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: -10, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    FormularioClienteComponent.prototype.guardar = function () {
        var _this = this;
        var cliente = this.form.value;
        this._userModel.fetch().then(function (usuario) {
            cliente.cliente_id = usuario.cliente_id;
            console.log("Va a guardar", JSON.stringify(cliente));
            _this._clienteService.save(cliente).subscribe(function (d) {
                var route = _this.routerExtensions;
                dialogs.alert({
                    title: "Cliente",
                    message: "El cliente se agregó correctamente.",
                    okButtonText: "Aceptar"
                }).then(function () {
                    route.navigate(["/home/clientes"], { clearHistory: true });
                });
            });
        });
    };
    FormularioClienteComponent = __decorate([
        core_1.Component({
            selector: "my-app-clientes",
            providers: [cliente_service_1.ClienteService],
            templateUrl: "pages/cliente/formulario/formulario-cliente.html",
            styleUrls: ["pages/cliente/css/cliente.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, nativescript_angular_1.RouterExtensions, page_1.Page, cliente_service_1.ClienteService, user_model_1.UserModel, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, forms_1.FormBuilder])
    ], FormularioClienteComponent);
    return FormularioClienteComponent;
}());
exports.FormularioClienteComponent = FormularioClienteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYXJpby5jbGllbnRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm11bGFyaW8uY2xpZW50ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrRCxlQUFlLENBQUMsQ0FBQTtBQUNsRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsZ0NBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsc0JBQTZCLFVBQVUsQ0FBQyxDQUFBO0FBRXhDLDZCQUFxRCxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pGLDRCQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBRXhFLElBQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGlDQUErQiw2Q0FBNkMsQ0FBQyxDQUFBO0FBRTdFLDJCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELHFDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVFwQztJQUlJLG9DQUFvQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixlQUErQixFQUMvQixVQUFxQixFQUNyQixLQUF1QixFQUN2QixhQUFpQyxFQUNqQyxHQUFnQjtRQVBoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFHMUIsdUJBQWtCLEdBQVE7WUFDaEMsTUFBTSxFQUFF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LFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUMxQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLE9BQU8sRUFBRSxxQ0FBcUM7b0JBQzlDLFlBQVksRUFBRSxTQUFTO2lCQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNKLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoSkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzs7a0NBQUE7SUE0SUYsaUNBQUM7QUFBRCxDQUFDLEFBM0lELElBMklDO0FBM0lZLGtDQUEwQiw2QkEySXRDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Q2xpZW50ZVNlcnZpY2V9IGZyb20gXCIuLi9jbGllbnRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHtEYXRlcGlja2VyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vbW9kYWxzL2RhdGVwaWNrZXIvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHtMYWJlbH0gZnJvbSBcInVpL2xhYmVsXCI7XHJcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0N1c3RvbVZhbGlkYXRvcnN9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdmFsaWRhdG9ycy9DdXN0b21WYWxpZGF0b3JzXCI7XHJcbmltcG9ydCB7Q2xpZW50ZX0gZnJvbSBcIi4uL2NsaWVudGUuY2xhc3NcIjtcclxuaW1wb3J0IHtVc2VyTW9kZWx9IGZyb20gXCIuLi8uLi8uLi9tb2RlbC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcC1jbGllbnRlc1wiLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2xpZW50ZVNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY2xpZW50ZS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8tY2xpZW50ZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2NsaWVudGUvY3NzL2NsaWVudGUuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtdWxhcmlvQ2xpZW50ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY2xpZW50ZXM6IGFueVtdO1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jbGllbnRlU2VydmljZTogQ2xpZW50ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91c2VyTW9kZWw6IFVzZXJNb2RlbCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uTWVzc2FnZXM6IGFueSA9IHtcclxuICAgICAgICBub21icmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgbm9tYnJlIGVzIG9ibGlnYXRvcmlvXCIsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJFbCB0YW1hw7FvIG3DoXhpbW8gZGVsIG5vbWJyZSBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOtbmltbyBkZWwgbm9tYnJlIGVzIGRlIDEgZMOtZ2l0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXRlcm5vOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIkVsIGFwZWxsaWRvIHBhdGVybm8gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgYXBlbGxpZG8gcGF0ZXJubyBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOtbmltbyBkZWwgYXBlbGxpZG8gcGF0ZXJubyBlcyBkZSAxIGTDrWdpdG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF0ZXJubzoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBhcGVsbGlkbyBtYXRlcm5vIGVzIG9ibGlnYXRvcmlvXCIsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJFbCB0YW1hw7FvIG3DoXhpbW8gZGVsIGFwZWxsaWRvIG1hdGVybm8gZXMgZGUgMjU1IGTDrWdpdG9zXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIGFwZWxsaWRvIG1hdGVybm8gZXMgZGUgMSBkw61naXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNlbHVsYXI6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgY2VsdWxhciBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiRWwgdGFtYcOxbyBtw6F4aW1vIGRlbCBjZWx1bGFyIGVzIGRlIDEwIGTDrWdpdG9zXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIGNlbHVsYXIgZXMgZGUgMTAgZMOtZ2l0b3NcIixcclxuICAgICAgICAgICAgY2VsdWxhcjogXCJJbmdyZXNlIHVuIGNlbHVsYXIgdsOhbGlkb1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBlbWFpbCBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiRWwgdGFtYcOxbyBtw6F4aW1vIGRlbCBlbWFpbCBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOtbmltbyBkZWwgZW1haWwgZXMgZGUgMSBkw61naXRvXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIkVsIGNvcnJlbyBubyBjb3JyZXNwb25kZSBjb24gdW5hIGRpcmVjY2nDs24gZGUgZS1tYWlsIHbDoWxpZGEuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZlY2hhX25hY2ltaWVudG86IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTGEgZmVjaGEgZGUgbmFjaW1pZW50byBlcyBvYmxpZ2F0b3JpYVwiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiTGEgdGFtYcOxbyBtw6F4aW1vIGRlbCBmZWNoYSBkZSBuYWNpbWllbnRvIGVzIGRlIDI1NSBkw61naXRvc1wiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiTGEgdGFtYcOxbyBtw61uaW1vIGRlbCBmZWNoYSBkZSBuYWNpbWllbnRvIGVzIGRlIDEgZMOtZ2l0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYWxsZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJMYSBjYWxsZSBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiTGEgdGFtYcOxbyBtw6F4aW1vIGRlbCBjYWxsZSBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkxhIHRhbWHDsW8gbcOtbmltbyBkZWwgY2FsbGUgZXMgZGUgMSBkw61naXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bWVyb19leHRlcmlvcjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBuw7ptZXJvIGV4dGVyaW9yIGVzIG9ibGlnYXRvcmlvXCIsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJFbCB0YW1hw7FvIG3DoXhpbW8gZGVsIG7Dum1lcm8gZXh0ZXJpb3IgZXMgZGUgMjU1IGTDrWdpdG9zXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIG7Dum1lcm8gZXh0ZXJpb3IgZXMgZGUgMSBkw61naXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bWVyb19pbnRlcmlvcjoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBuw7ptZXJvIGludGVyaW9yIGVzIG9ibGlnYXRvcmlvXCIsXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJFbCB0YW1hw7FvIG3DoXhpbW8gZGVsIG7Dum1lcm8gaW50ZXJpb3IgZXMgZGUgMjU1IGTDrWdpdG9zXCIsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIG7Dum1lcm8gaW50ZXJpb3IgZXMgZGUgMSBkw61naXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9uaWE6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTGEgY29sb25pYSBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiTGEgdGFtYcOxbyBtw6F4aW1vIGRlbCBjb2xvbmlhIGVzIGRlIDI1NSBkw61naXRvc1wiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiTGEgdGFtYcOxbyBtw61uaW1vIGRlbCBjb2xvbmlhIGVzIGRlIDEgZMOtZ2l0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBjw7NkaWdvIHBvc3RhbCBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiRWwgdGFtYcOxbyBtw6F4aW1vIGRlbCBjw7NkaWdvIHBvc3RhbCBlcyBkZSAxMCBkw61naXRvc1wiLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiRWwgdGFtYcOxbyBtw61uaW1vIGRlbCBjw7NkaWdvIHBvc3RhbCBlcyBkZSAxIGTDrWdpdG9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJBZ3JlZ2FyIENsaWVudGVcIjtcclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIG5vbWJyZTogWydIZW5yeScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV1dLFxyXG4gICAgICAgICAgICBwYXRlcm5vOiBbJ0Nhw7FlZG8nLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcclxuICAgICAgICAgICAgbWF0ZXJubzogWydaYW11ZGlvJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXV0sXHJcbiAgICAgICAgICAgIGNlbHVsYXI6IFsnNjY5MTY1NzEwOScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxMCksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKSwgQ3VzdG9tVmFsaWRhdG9ycy5jZWx1bGFyXV0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJ2hlcmlzMTYxOTkzQGdtYWlsLmNvbScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSwgQ3VzdG9tVmFsaWRhdG9ycy5lbWFpbF1dLFxyXG4gICAgICAgICAgICBmZWNoYV9uYWNpbWllbnRvOiBbJzA5LzA0LzE5OTMnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcclxuICAgICAgICAgICAgY2FsbGU6IFsnTG9zIFNhdWNlcycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV1dLFxyXG4gICAgICAgICAgICBudW1lcm9fZXh0ZXJpb3I6IFsnODk2JywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXV0sXHJcbiAgICAgICAgICAgIG51bWVyb19pbnRlcmlvcjogWyc0MDInLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcclxuICAgICAgICAgICAgY29sb25pYTogWydMYSBjYW1wacOxYScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV1dLFxyXG4gICAgICAgICAgICBjcDogWyc4MjYwMCcsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApXV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RhbFBpY2tlcigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibW9kYWxwSUNLRVJcIik7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vID4+IHJldHVybmluZy1yZXN1bHRcclxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERhdGVwaWNrZXJDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRlcmVzdWx0OiBEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCdmZWNoYV9uYWNpbWllbnRvJykuc2V0VmFsdWUobW9tZW50KGRhdGVyZXN1bHQpLmZvcm1hdCgnREQvTU0vWVlZWScpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25UYXAoJ2xhYmVsNycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmUoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcikge1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5ODA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSA5O1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDE5NzUsIDAsIDI5KTtcclxuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwKGxibCkge1xyXG4gICAgICAgIHZhciBsYWJlbDogTGFiZWwgPSA8TGFiZWw+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChsYmwpO1xyXG4gICAgICAgIGxhYmVsLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAtMTAsIHk6IC0xNX0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLjEsIDAuMSwgMC4xLCAxKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGd1YXJkYXIoKSB7XHJcbiAgICAgICAgbGV0IGNsaWVudGU6IENsaWVudGUgPSB0aGlzLmZvcm0udmFsdWUgYXMgQ2xpZW50ZTtcclxuICAgICAgICB0aGlzLl91c2VyTW9kZWwuZmV0Y2goKS50aGVuKHVzdWFyaW8gPT4ge1xyXG4gICAgICAgICAgICBjbGllbnRlLmNsaWVudGVfaWQgPSB1c3VhcmlvLmNsaWVudGVfaWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmEgYSBndWFyZGFyXCIsIEpTT04uc3RyaW5naWZ5KGNsaWVudGUpKTtcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50ZVNlcnZpY2Uuc2F2ZShjbGllbnRlKS5zdWJzY3JpYmUoZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnM7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDbGllbnRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjbGllbnRlIHNlIGFncmVnw7MgY29ycmVjdGFtZW50ZS5cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYXZpZ2F0ZShbXCIvaG9tZS9jbGllbnRlc1wiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19