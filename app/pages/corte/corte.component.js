"use strict";
/**
 * Created by iedeveloper on 15/02/17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CorteComponent = (function () {
    function CorteComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.saldo = "";
        this.pagoMinimo = "";
        activatedRoute.queryParams.subscribe(function (params) {
            _this.info = JSON.parse(params["info"]);
            _this.saldo = "$" + _this.info.saldo;
            _this.pagoMinimo = "$" + _this.info.pago_minimo;
        });
    }
    CorteComponent.prototype.ngOnInit = function () {
    };
    CorteComponent = __decorate([
        core_1.Component({
            selector: "corte",
            providers: [],
            templateUrl: "pages/corte/corte.html",
            styleUrls: ["pages/corte/corte.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], CorteComponent);
    return CorteComponent;
}());
exports.CorteComponent = CorteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ydGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ydGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQVEvQztJQU9JLHdCQUFvQixjQUE4QjtRQVB0RCxpQkFrQkM7UUFYdUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTGxELFVBQUssR0FBQyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUMsRUFBRSxDQUFDO1FBS1YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFWRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztzQkFBQTtJQW9CRixxQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksc0JBQWMsaUJBa0IxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaWVkZXZlbG9wZXIgb24gMTUvMDIvMTcuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29ydGVcIixcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9jb3J0ZS9jb3J0ZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2NvcnRlL2NvcnRlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcnRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgaW5mbzogYW55O1xyXG4gICAgc2FsZG89XCJcIjtcclxuICAgIHBhZ29NaW5pbW89XCJcIjtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcclxuICAgICAgICBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvID0gSlNPTi5wYXJzZShwYXJhbXNbXCJpbmZvXCJdKTtcclxuICAgICAgICAgICAgdGhpcy5zYWxkbz1cIiRcIit0aGlzLmluZm8uc2FsZG87XHJcbiAgICAgICAgICAgIHRoaXMucGFnb01pbmltbz1cIiRcIit0aGlzLmluZm8ucGFnb19taW5pbW87XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19