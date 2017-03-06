"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var OficinacreditoService = (function () {
    function OficinacreditoService(http) {
        this.http = http;
    }
    OficinacreditoService.prototype.getTiendas = function (datos) {
        return this.http.post("tiendas/ubicaciones", datos).map(function (response) { return response.json(); });
    };
    OficinacreditoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], OficinacreditoService);
    return OficinacreditoService;
}());
exports.OficinacreditoService = OficinacreditoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZpY2luYWNyZWRpdG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9maWNpbmFjcmVkaXRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzNEO0lBRUksK0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckMsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBUkw7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQVNiLDRCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw2QkFBcUIsd0JBUWpDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY3VzdG9tLWh0dHAvaHR0cC1zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPZmljaW5hY3JlZGl0b1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWVuZGFzKGRhdG9zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwidGllbmRhcy91YmljYWNpb25lc1wiLGRhdG9zKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxufVxyXG4iXX0=