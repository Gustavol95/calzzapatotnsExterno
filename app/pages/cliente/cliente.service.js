"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.index = function () {
        return this.http.get("subclientes").map(function (response) { return response.json(); });
    };
    ClienteService.prototype.save = function (cliente) {
        return this.http.post('subclientes', cliente).map(function (response) { return response.json(); });
    };
    ClienteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUszRDtJQUVJLHdCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3JDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sNkJBQUksR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRW5GLENBQUM7SUFiTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBY2IscUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLHNCQUFjLGlCQWExQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xyXG5pbXBvcnQge0NsaWVudGV9IGZyb20gXCIuL2NsaWVudGUuY2xhc3NcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50ZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcInN1YmNsaWVudGVzXCIpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlKGNsaWVudGU6IENsaWVudGUpOiBPYnNlcnZhYmxlPENsaWVudGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ3N1YmNsaWVudGVzJywgY2xpZW50ZSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==