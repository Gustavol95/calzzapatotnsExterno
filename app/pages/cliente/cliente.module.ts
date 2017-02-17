import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ListadoClienteComponent} from "./listado/listado.cliente.component";
import {ClienteService} from "./cliente.service";
import {FormularioClienteComponent} from "./formulario/formulario.cliente.component";
const routes: Routes = [
    {path: '', component: ListadoClienteComponent},
    {path: 'create', component: FormularioClienteComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ListadoClienteComponent,
        FormularioClienteComponent
    ],
    //exports: [],
    providers: [ClienteService]
})
export class ClienteModule {}