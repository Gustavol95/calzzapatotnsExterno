import {LoginComponent} from "./pages/login/login.component";
import {ModalViewComponent} from "./pages/login/modal/modal-view";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {MicuentaComponent} from "./pages/micuenta/micuenta.component";
import {DatepickerComponent} from "./pages/modals/datepicker/date-picker";
export const routes = [
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'recuperar-email', component: ModalViewComponent},
    {path: 'incio', component: InicioComponent},
    {path: 'micuenta', component: MicuentaComponent},
    {path: 'modal-datepicker', component: DatepickerComponent}
];
export const navigatableComponents = [
    LoginComponent,
    ModalViewComponent,
    InicioComponent,
    MicuentaComponent,
    DatepickerComponent
];