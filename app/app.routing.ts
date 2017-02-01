import {LoginComponent} from "./pages/login/login.component";
import {ModalViewComponent} from "./pages/login/modal/modal-view";
export const routes = [
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'recuperar-email', component: ModalViewComponent},
];
export const navigatableComponents = [
    LoginComponent,
    ModalViewComponent
];