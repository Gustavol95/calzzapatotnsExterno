import {LoginComponent} from "./pages/login/login.component";
import {ModalViewComponent} from "./pages/login/modal/modal-view";
import {InicioComponent} from "./pages/inicio/inicio.component";
export const routes = [
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'recuperar-email', component: ModalViewComponent},
    {path: 'incio', component: InicioComponent},
];
export const navigatableComponents = [
    LoginComponent,
    ModalViewComponent,
    InicioComponent
];