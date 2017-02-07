import {LoginComponent} from "./pages/login/login.component";
import {ModalViewComponent} from "./pages/login/modal/modal-view";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {MicuentaComponent} from "./pages/micuenta/micuenta.component";
import {DatepickerComponent} from "./pages/modals/datepicker/date-picker";
import {HomeComponent} from "./pages/home/home.component";
import {MapaComponent} from "./pages/modals/mapa/mapa.component";
export const routes = [
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'recuperar-email', component: ModalViewComponent},
    {path: 'home',component: HomeComponent,
        children: [
            {path: 'inicio', component: InicioComponent},
            {path: 'micuenta', component: MicuentaComponent},
            {path: 'modal-datepicker', component: DatepickerComponent},
            {path: 'modal-mapa', component: MapaComponent}
        ]
    }
];
export const navigatableComponents = [
    LoginComponent,
    ModalViewComponent,
    InicioComponent,
    MicuentaComponent,
    DatepickerComponent,
    HomeComponent,
    MapaComponent
];