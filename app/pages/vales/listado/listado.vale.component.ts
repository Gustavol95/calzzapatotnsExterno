import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

//import { registerElement } from "nativescript-angular/element-registry";
import {ValeService} from "../vale.service";
import {ClienteModel} from "../../../model/cliente.model";
//registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "my-app-vales",
    providers: [ValeService],
    //templateUrl: "pages/vales/listado/listado-vale.html",
    template: `
        <TabView #element [(ngModel)]="selectedIndex">
            <StackLayout *tabItem="{title: 'FÍSICOS'}">
                <ListView [items]='vales'>
                      <template let-item='item'>
                          <GridLayout style="background-color: #EAEAEA">
                              <GridLayout *ngIf="item.estado == 'Cobrado'" columns="65,*,*" rows="65,auto,auto,auto,auto,auto,auto,auto" class="cobrado">
                                <Button text="CL" row="0" col="0" backgroundColor="#EE2933" style="border-radius:100;color:white;margin:0px 0px 0px 15px;padding:0;width: 100%"></Button>
                                <Label text="{{item.folio}}" row="0" col="1" style="font-size: 18px;font-weight: bold;"></Label>
                                <Label text="{{'$'+item.importe}}" row="0" col="2" style="font-size: 18px;font-weight: bold;text-align: right;"></Label>
                                <Label text="Cliente" row="1" col="1"></Label>
                                <Label text="{{item.subcliente}}" row="1" col="2" style="font-weight: bold;text-align: right;"></Label>
                                <Label text="Fecha Asignado" row="2" col="1"></Label> 
                                <Label text="{{item.fecha_asignada}}" row="2" col="2" style="font-weight: bold;text-align: right"></Label>
                                <Label text="Persona Autorizada" row="3" col="1"></Label>
                                <Label text="José Luis Camacho" row="3" col="2" style="font-weight: bold;text-align: right"></Label>
                                <Label text="Fecha de Compra" row="4" col="1"></Label> 
                                <Label text="{{item.fecha_compra}}" row="4" col="2" style="font-weight: bold;text-align: right"></Label>
                                <Label text="Lugar de Compra" row="5" col="1"></Label>
                                <Label text="{{item.tienda}}" row="5" col="2" style="font-weight: bold;text-align: right"></Label>
                                <Label text="Pago Quincenal" row="6" col="1"></Label> 
                                <Label text="{{'$'+item.pago_quincenal}}" row="6" col="2" style="font-weight: bold;text-align: right"></Label>
                                <GridLayout row="7" col="0" colSpan="3" style="background-color: #223D98;margin: 10px 0px 0px 0px;padding: 5px 15px 5px 0px; color: white;">
                                    <GridLayout columns="auto,auto,auto,*" rows="auto" style="margin: 0;padding: 0"> 
                                        <Label text="{{item.estado}}" row="0" col="0" style="font-weight: bold" horizontalAlignment="center" verticalAlignment="center"></Label>
                                        <Label text="1 de 8" row="0" col="1" horizontalAlignment="right" verticalAlignment="center"></Label> 
                                        <Label text="30 Oct 2016" row="0" col="2" horizontalAlignment="right" verticalAlignment="center"></Label>
                                        <GridLayout row="0" col="3" style="width: 100%">
                                            <Image src="~/assets/misVales_r.png" stretch="none" horizontalAlignment="right" verticalAlignment="center"></Image>
                                        </GridLayout>  
                                    </GridLayout>                  
                                </GridLayout> 
                            </GridLayout>
                          </GridLayout>
                      </template>
                  </ListView>    
                <!--<GridLayout columns="65,*,*" rows="65,auto,auto,auto,auto,auto,auto,auto" class="cobrado">
                    <Button text="CL" row="0" col="0" backgroundColor="#EE2933" style="border-radius:100;color:white;margin:0px 0px 0px 15px;padding:0;width: 100%"></Button>
                    <Label text="557721" row="0" col="1" style="font-size: 18px;font-weight: bold;"></Label>
                    <Label text="$0.00" row="0" col="2" style="font-size: 18px;font-weight: bold;text-align: right;"></Label>
                    <Label text="Cliente" row="1" col="1"></Label>
                    <Label text="NA" row="1" col="2" style="font-weight: bold;text-align: right;"></Label>
                    <Label text="Fecha Asignado" row="2" col="1"></Label> 
                    <Label text="NA" row="2" col="2" style="font-weight: bold;text-align: right"></Label>
                    <GridLayout row="7" col="0" colSpan="3" style="background-color: #757575;margin: 10px 0px 0px 0px;padding: 5px 15px 5px 0px; color: white;">
                        <GridLayout columns="auto,auto,auto,*" rows="auto" style="margin: 0;padding: 0"> 
                            <Label text="NO ASIGNADO" row="0" col="0" style="font-weight: bold" horizontalAlignment="center" verticalAlignment="center"></Label>
                        </GridLayout>                  
                    </GridLayout> 
                </GridLayout>
                  
                <GridLayout columns="65,*,*" rows="65,auto,auto,auto,auto,auto,auto,auto" class="cobrado">
                    <Button text="CL" row="0" col="0" backgroundColor="#EE2933" style="border-radius:100;color:white;margin:0px 0px 0px 15px;padding:0;width: 100%"></Button>
                    <Label text="557722" row="0" col="1" style="font-size: 18px;font-weight: bold;"></Label>
                    <Label text="$3,000.00" row="0" col="2" style="font-size: 18px;font-weight: bold;text-align: right;"></Label>
                    <Label text="Cliente" row="1" col="1"></Label>
                    <Label text="Jesús Crespo" row="1" col="2" style="font-weight: bold;text-align: right;"></Label>
                    <Label text="Fecha Asignado" row="2" col="1"></Label> 
                    <Label text="09 Oct 2016" row="2" col="2" style="font-weight: bold;text-align: right"></Label>
                    <GridLayout row="7" col="0" colSpan="3" style="background-color: #EE2933;margin: 10px 0px 0px 0px;padding: 5px 15px 5px 0px; color: white;">
                        <GridLayout columns="auto,auto,auto,*" rows="auto" style="margin: 0;padding: 0"> 
                            <Label text="ASIGNADO" row="0" col="0" style="font-weight: bold" horizontalAlignment="center" verticalAlignment="center"></Label>
                        </GridLayout>                  
                    </GridLayout> 
                </GridLayout>-->
            </StackLayout> 
            <StackLayout *tabItem="{title: 'ELECTRÓNICOS'}" > 
                
            </StackLayout>
        </TabView>
    `,
    styleUrls: ["pages/vales/css/vale.css"]
})
export class ListadoValeComponent implements OnInit {
    public vales: any[];
    listLoaded = false;
    constructor(private routerExtensions: RouterExtensions, private page: Page, private _valeService: ValeService, private _clienteModel : ClienteModel) {
        this._clienteModel.fetch().then(cliente=>{
            this._valeService.index(cliente.id).subscribe(vales => {
                this.vales = vales;
                this.listLoaded = true;
            });
        });
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mis Vales";

    }
    nuevo() {
        this.routerExtensions.navigate(["/home/vale/create"]);

    }
}