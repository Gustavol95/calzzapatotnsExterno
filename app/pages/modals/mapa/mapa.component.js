"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var element_registry_1 = require('nativescript-angular/element-registry');
var geolocation = require('nativescript-geolocation');
var nativescript_google_maps_sdk_1 = require('nativescript-google-maps-sdk');
var mapsModule = require("nativescript-google-maps-sdk");
var color_1 = require("color");
var imageSource = require("image-source");
var style = require('./map-style.json');
var platform = require("platform");
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var MapaComponent = (function () {
    function MapaComponent(params, page) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.mapView = null;
        this.watchId = null;
        this.centeredOnLocation = false;
        this.mapTapped = function (event) {
            _this.removeMarker(_this.tapMarker);
            _this.tapMarker = _this.addMarker({
                location: event.position,
                title: "",
                snippet: 'Snippet',
                userData: [],
                data: [],
                icon: "~/assets/home.png"
            });
        };
        this.locationReceived = function (position) {
            //console.log('GPS Update Received');
            if (_this.mapView && position && !_this.centeredOnLocation) {
                _this.mapView.latitude = position.latitude;
                _this.mapView.longitude = position.longitude;
                _this.mapView.zoom = 16;
                _this.centeredOnLocation = true;
            }
        };
    }
    MapaComponent.prototype.ngOnInit = function () {
    };
    MapaComponent.prototype.enableLocation = function () {
        if (!geolocation.isEnabled()) {
            //console.log('Location not enabled, requesting.');
            return geolocation.enableLocationRequest();
        }
        else {
            return Promise.resolve(true);
        }
    };
    MapaComponent.prototype.getLocation = function () {
        if (geolocation.isEnabled()) {
            return geolocation.getCurrentLocation({
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 1000,
                maximumAge: 10000
            });
        }
        return Promise.reject('Geolocation not enabled.');
    };
    //Map events
    MapaComponent.prototype.onMapReady = function (event) {
        var _this = this;
        if (this.mapView || !event.object)
            return;
        this.mapView = event.object;
        this.gMap = event.object.gMap;
        this.mapView.setStyle(style);
        this.mapView.markerSelect = this.onMarkerSelect;
        this.mapView.cameraChanged = this.onCameraChanged;
        if (platform.isIOS) {
            var UiSettings = this.gMap.settings;
            UiSettings.myLocationButton = true;
            UiSettings.compassButton = true;
            this.gMap.myLocationEnabled = true;
        }
        else {
            var UiSettings = this.gMap.getUiSettings();
            UiSettings.setMyLocationButtonEnabled(true);
            this.gMap.setMyLocationEnabled(true);
        }
        this.enableLocation()
            .then(this.getLocation)
            .then(function () {
            _this.watchId = geolocation.watchLocation(_this.locationReceived, _this.error, {
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 10000,
                maximumAge: 6000
            });
        }, this.error);
    };
    ;
    MapaComponent.prototype.addPointToLine = function (args) {
        if (!this.mapView || !args || !args.location)
            return;
        var line = args.line;
        if (!line) {
            line = new nativescript_google_maps_sdk_1.Polyline();
            line.visible = true;
            line.width = args.width || 10;
            line.color = args.color || new color_1.Color('Red');
            line.geodesic = args.geodesic != undefined ? args.geodesic : true;
            this.mapView.addPolyline(line);
        }
        line.addPoint(nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude));
        return line;
    };
    MapaComponent.prototype.addMarker = function (args) {
        if (!this.mapView || !args || !args.location)
            return;
        var marker = new mapsModule.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        marker.icon = 'icon';
        this.mapView.addMarker(marker);
        return marker;
    };
    ;
    MapaComponent.prototype.clearGpsLine = function () {
        this.removeLine(this.gpsLine);
        this.gpsLine = null;
    };
    ;
    MapaComponent.prototype.clearTapLine = function () {
        this.removeLine(this.tapLine);
        this.tapLine = null;
        this.removeMarker(this.tapMarker);
        this.tapMarker = null;
    };
    MapaComponent.prototype.removeLine = function (line) {
        if (line) {
            line.removeAllPoints();
        }
    };
    MapaComponent.prototype.removeMarker = function (marker) {
        if (this.mapView && marker) {
            this.mapView.removeMarker(marker);
        }
    };
    MapaComponent.prototype.error = function (err) {
        //console.log('Error: ' + JSON.stringify(err));
    };
    MapaComponent.prototype.onMarkerSelect = function (event) {
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));
    };
    MapaComponent.prototype.onCameraChanged = function (event) {
        //console.log('Camera changed: ' + JSON.stringify(event.camera));
    };
    MapaComponent.prototype.guardar = function () {
        var position = { latitude: this.tapMarker.position.latitude, longitude: this.tapMarker.position.longitude };
        //console.log('position =D => ',JSON.stringify(position));
        this.params.closeCallback(position);
    };
    MapaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./mapa.html",
            styleUrls: ["./css/mapa.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], MapaComponent);
    return MapaComponent;
}());
exports.MapaComponent = MapaComponent;
var AddLineArgs = (function () {
    function AddLineArgs() {
    }
    return AddLineArgs;
}());
exports.AddLineArgs = AddLineArgs;
var AddMarkerArgs = (function () {
    function AddMarkerArgs() {
    }
    return AddMarkerArgs;
}());
exports.AddMarkerArgs = AddMarkerArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXBhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLDZCQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3QixpQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCw2Q0FBa0QsOEJBQThCLENBQUMsQ0FBQTtBQUNqRixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFDNUIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR3hDLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRXJDLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQU1sRjtJQVdJLHVCQUFvQixNQUF5QixFQUFVLElBQVU7UUFYckUsaUJBZ0xDO1FBckt1QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFWakUsWUFBTyxHQUFRLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBS3ZCLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQXVFcEMsY0FBUyxHQUFHLFVBQUMsS0FBSztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMs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SUFDeEMsQ0FBQztJQXBMTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDaEMsQ0FBQzs7cUJBQUE7SUFpTEYsb0JBQUM7QUFBRCxDQUFDLEFBaExELElBZ0xDO0FBaExZLHFCQUFhLGdCQWdMekIsQ0FBQTtBQUVEO0lBQUE7SUFNQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG1CQUFXLGNBTXZCLENBQUE7QUFFRDtJQUFBO0lBUUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxxQkFBYSxnQkFRekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5sZXQgZ2VvbG9jYXRpb24gPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nKTtcclxuaW1wb3J0IHtNYXBWaWV3LCBNYXJrZXIsIFBvbHlsaW5lLCBQb3NpdGlvbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XHJcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG52YXIgaW1hZ2VTb3VyY2UgPSByZXF1aXJlKFwiaW1hZ2Utc291cmNlXCIpO1xyXG52YXIgc3R5bGUgPSByZXF1aXJlKCcuL21hcC1zdHlsZS5qc29uJyk7XHJcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xyXG5pbXBvcnQge0ltYWdlU291cmNlfSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYXBhLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jc3MvbWFwYS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbWFwVmlldzogYW55ID0gbnVsbDtcclxuICAgIHdhdGNoSWQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBncHNMaW5lOiBQb2x5bGluZTtcclxuICAgIHRhcExpbmU6IFBvbHlsaW5lO1xyXG4gICAgdGFwTWFya2VyOiBhbnk7XHJcbiAgICBncHNNYXJrZXI6IGFueTtcclxuICAgIGNlbnRlcmVkT25Mb2NhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdNYXA6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlTG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCFnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdMb2NhdGlvbiBub3QgZW5hYmxlZCwgcmVxdWVzdGluZy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2F0aW9uKCkge1xyXG4gICAgICAgIGlmIChnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMTAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMTAsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtVXBkYXRlVGltZTogMTAwMCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDEwMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnR2VvbG9jYXRpb24gbm90IGVuYWJsZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9NYXAgZXZlbnRzXHJcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hcFZpZXcgfHwgIWV2ZW50Lm9iamVjdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuICAgICAgICB0aGlzLmdNYXAgPSBldmVudC5vYmplY3QuZ01hcDtcclxuICAgICAgICB0aGlzLm1hcFZpZXcuc2V0U3R5bGUoc3R5bGUpO1xyXG4gICAgICAgIHRoaXMubWFwVmlldy5tYXJrZXJTZWxlY3QgPSB0aGlzLm9uTWFya2VyU2VsZWN0O1xyXG4gICAgICAgIHRoaXMubWFwVmlldy5jYW1lcmFDaGFuZ2VkID0gdGhpcy5vbkNhbWVyYUNoYW5nZWQ7XHJcblxyXG4gICAgICAgIGlmKHBsYXRmb3JtLmlzSU9TKXtcclxuICAgICAgICAgICAgdmFyIFVpU2V0dGluZ3MgPSB0aGlzLmdNYXAuc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIFVpU2V0dGluZ3MubXlMb2NhdGlvbkJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIFVpU2V0dGluZ3MuY29tcGFzc0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ01hcC5teUxvY2F0aW9uRW5hYmxlZCA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBVaVNldHRpbmdzID0gdGhpcy5nTWFwLmdldFVpU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgVWlTZXR0aW5ncy5zZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5nTWFwLnNldE15TG9jYXRpb25FbmFibGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZ2V0TG9jYXRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hJZCA9IGdlb2xvY2F0aW9uLndhdGNoTG9jYXRpb24odGhpcy5sb2NhdGlvblJlY2VpdmVkLCB0aGlzLmVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDYwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmVycm9yKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcFRhcHBlZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKHRoaXMudGFwTWFya2VyKTtcclxuICAgICAgICB0aGlzLnRhcE1hcmtlciA9IHRoaXMuYWRkTWFya2VyKHtcclxuICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LnBvc2l0aW9uLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgc25pcHBldDogJ1NuaXBwZXQnLFxyXG4gICAgICAgICAgICB1c2VyRGF0YTogW10sXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBpY29uOiBcIn4vYXNzZXRzL2hvbWUucG5nXCJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG9jYXRpb25SZWNlaXZlZCA9IChwb3NpdGlvbjogUG9zaXRpb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdHUFMgVXBkYXRlIFJlY2VpdmVkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hcFZpZXcgJiYgcG9zaXRpb24gJiYgIXRoaXMuY2VudGVyZWRPbkxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldy5sYXRpdHVkZSA9IHBvc2l0aW9uLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlID0gcG9zaXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLm1hcFZpZXcuem9vbSA9IDE2O1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlcmVkT25Mb2NhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhZGRQb2ludFRvTGluZShhcmdzOiBBZGRMaW5lQXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXBWaWV3IHx8ICFhcmdzIHx8ICFhcmdzLmxvY2F0aW9uKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsaW5lID0gYXJncy5saW5lO1xyXG5cclxuICAgICAgICBpZiAoIWxpbmUpIHtcclxuICAgICAgICAgICAgbGluZSA9IG5ldyBQb2x5bGluZSgpO1xyXG4gICAgICAgICAgICBsaW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsaW5lLndpZHRoID0gYXJncy53aWR0aCB8fCAxMDtcclxuICAgICAgICAgICAgbGluZS5jb2xvciA9IGFyZ3MuY29sb3IgfHwgbmV3IENvbG9yKCdSZWQnKTtcclxuICAgICAgICAgICAgbGluZS5nZW9kZXNpYyA9IGFyZ3MuZ2VvZGVzaWMgIT0gdW5kZWZpbmVkID8gYXJncy5nZW9kZXNpYyA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRQb2x5bGluZShsaW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZS5hZGRQb2ludChQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoYXJncy5sb2NhdGlvbi5sYXRpdHVkZSwgYXJncy5sb2NhdGlvbi5sb25naXR1ZGUpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWFya2VyKGFyZ3M6IEFkZE1hcmtlckFyZ3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwVmlldyB8fCAhYXJncyB8fCAhYXJncy5sb2NhdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcclxuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoYXJncy5sb2NhdGlvbi5sYXRpdHVkZSwgYXJncy5sb2NhdGlvbi5sb25naXR1ZGUpO1xyXG4gICAgICAgIG1hcmtlci50aXRsZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgICAgbWFya2VyLnNuaXBwZXQgPSBhcmdzLnRpdGxlO1xyXG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IGFyZ3MudXNlckRhdGE7XHJcbiAgICAgICAgbWFya2VyLmRhdGEgPSBhcmdzLmRhdGE7XHJcbiAgICAgICAgbWFya2VyLmljb24gPSAnaWNvbic7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgIHJldHVybiBtYXJrZXI7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY2xlYXJHcHNMaW5lKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGluZSh0aGlzLmdwc0xpbmUpO1xyXG4gICAgICAgIHRoaXMuZ3BzTGluZSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsZWFyVGFwTGluZSgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpbmUodGhpcy50YXBMaW5lKTtcclxuICAgICAgICB0aGlzLnRhcExpbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKHRoaXMudGFwTWFya2VyKTtcclxuICAgICAgICB0aGlzLnRhcE1hcmtlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGluZShsaW5lOiBQb2x5bGluZSkge1xyXG4gICAgICAgIGlmIChsaW5lKSB7XHJcbiAgICAgICAgICAgIGxpbmUucmVtb3ZlQWxsUG9pbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU1hcmtlcihtYXJrZXI6IE1hcmtlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFZpZXcgJiYgbWFya2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldy5yZW1vdmVNYXJrZXIobWFya2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IoZXJyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1hcmtlclNlbGVjdChldmVudCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0NsaWNrZWQgb24gJyArIEpTT04uc3RyaW5naWZ5KGV2ZW50Lm1hcmtlci5kYXRhKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FtZXJhQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0NhbWVyYSBjaGFuZ2VkOiAnICsgSlNPTi5zdHJpbmdpZnkoZXZlbnQuY2FtZXJhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3VhcmRhcigpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb246IGFueSA9IHtsYXRpdHVkZTp0aGlzLnRhcE1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSwgbG9uZ2l0dWRlOiB0aGlzLnRhcE1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Bvc2l0aW9uID1EID0+ICcsSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHBvc2l0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZExpbmVBcmdzIHtcclxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XHJcbiAgICBwdWJsaWMgbGluZTogUG9seWxpbmU7XHJcbiAgICBwdWJsaWMgbG9jYXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHVibGljIGdlb2Rlc2ljOiBib29sZWFuO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRNYXJrZXJBcmdzIHtcclxuICAgIHB1YmxpYyBsb2NhdGlvbjogYW55O1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc25pcHBldDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJEYXRhOiBhbnk7XHJcbiAgICBwdWJsaWMgZGF0YTogYW55O1xyXG4gICAgcHVibGljIGljb246IHN0cmluZztcclxuXHJcbn0iXX0=