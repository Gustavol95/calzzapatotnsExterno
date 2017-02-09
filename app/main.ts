// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as platform from "platform";
declare var GMSServices: any;
// before calling .boostrap
if( platform.isIOS ) {
    GMSServices.provideAPIKey("AIzaSyC4ncTi38VWAy0i8gGQ2RkRSZbpPJPm8ls");
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
