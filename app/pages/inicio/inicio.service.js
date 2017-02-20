"use strict";
var http_service_1 = require("../../custom-http/http-service");
var core_1 = require("@angular/core");
/**
 * Created by iedeveloper on 16/02/17.
 */
var InicioService = (function () {
    function InicioService(http) {
        this.http = http;
    }
    InicioService.prototype.getClienteInfo = function (id) {
        return this.http.get("clientes/" + id + "/saldo").map(function (response) { return response.json(); });
    };
    InicioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], InicioService);
    return InicioService;
}());
exports.InicioService = InicioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmljaW8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDOztHQUVHO0FBRUg7SUFFSSx1QkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUNyQyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLEVBQUUsR0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQVJMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFXYixvQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY3VzdG9tLWh0dHAvaHR0cC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgaWVkZXZlbG9wZXIgb24gMTYvMDIvMTcuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmljaW9TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xpZW50ZUluZm8oaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImNsaWVudGVzL1wiK2lkK1wiL3NhbGRvXCIpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVmVyIHF1ZSBlcyBzaW5jcm9uaXphY2lvblxyXG59Il19