import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";
import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {AppComponent} from "./app.component";

import {routes, navigatableComponents} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {DbService} from "./model/db.service";
import {UserModel} from "./model/user.model";
import {CustomHttpModule} from "./custom-http/custom-http.module";
import {Config} from "./shared/config";
import actionBarModule = require("ui/action-bar");
import { ModalDialogService } from "nativescript-angular/modal-dialog";

var application = require("application");

// iOS Google Maps API Key Setup
declare var GMSServices: any;
if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyCCbRydI84FEFapTzFo5qtGCv5i6NGuQgE");
}

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        ReactiveFormsModule,
        CustomHttpModule.forRoot(Config.apiUrl)
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents,
        SIDEDRAWER_DIRECTIVES
    ],
    bootstrap: [AppComponent],
    providers: [DbService,UserModel,ModalDialogService]
})
export class AppModule {
    constructor(dbServ : DbService){
    }

}

