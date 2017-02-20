"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = __decorate([
        core_1.Directive({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, core_1.Attribute('validateEqual')),
        __param(1, core_1.Attribute('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpRCxlQUFlLENBQUMsQ0FBQTtBQUNqRSxzQkFBMEQsZ0JBQWdCLENBQUMsQ0FBQTtBQVEzRTtJQUNJLHdCQUFnRCxhQUFxQixFQUNwQyxPQUFlO1FBREEsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUVoRCxDQUFDO0lBRUQsc0JBQVkscUNBQVM7YUFBckI7WUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFFLEtBQUssQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELGlDQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN2QixhQUFhO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZDLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7Z0JBQ0wsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQTtRQUNILENBQUM7UUFFRCwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ1IsYUFBYSxFQUFFLEtBQUs7YUFDdkIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTdDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0ZBQXdGO1lBQ2xHLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTthQUN6RjtTQUNKLENBQUM7bUJBRWdCLGdCQUFTLENBQUMsZUFBZSxDQUFDO21CQUNuQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7c0JBSDNCO0lBeUNGLHFCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxzQkFBYyxpQkF3QzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xdLFt2YWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ3ZhbGlkYXRlRXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVFcXVhbDogc3RyaW5nLFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGlzUmV2ZXJzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmV2ZXJzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPT09ICd0cnVlJyA/IHRydWU6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgICAgIC8vIHNlbGYgdmFsdWVcclxuICAgICAgICBsZXQgdiA9IGMudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGNvbnRyb2wgdmxhdWVcclxuICAgICAgICBsZXQgZSA9IGMucm9vdC5nZXQodGhpcy52YWxpZGF0ZUVxdWFsKTtcclxuXHJcbiAgICAgICAgLy8gdmFsdWUgbm90IGVxdWFsXHJcbiAgICAgICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSAmJiAhdGhpcy5pc1JldmVyc2UpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRXF1YWw6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxyXG4gICAgICAgIGlmIChlICYmIHYgPT09IGUudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGUuZXJyb3JzWyd2YWxpZGF0ZUVxdWFsJ107XHJcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoZS5lcnJvcnMpLmxlbmd0aCkgZS5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2VcclxuICAgICAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XHJcbiAgICAgICAgICAgIGUuc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRXF1YWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdfQ==