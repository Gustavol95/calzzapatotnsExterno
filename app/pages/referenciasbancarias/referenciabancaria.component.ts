import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ReferenciabancariaService} from "./referenciabancaria.service";
import {Page} from "ui/page";
var dialogs = require("ui/dialogs");
@Component({
    selector: "my-app-reterenciasbancarias",
    providers: [ReferenciabancariaService],
    //templateUrl: "pages/referenciasbancarias/referenciabancaria.html",
    template:`
    <TabView>
        <GridLayout *tabItem="{title: 'PARA CORTES'}">
           <StackLayout row="0">
               <ListView [items]='referencias' width="100%" height="100%">
                   <template let-item='item'>
                       <GridLayout style="background-color: #EAEAEA">
                           <GridLayout columns="*,*" rows="auto,auto,auto" class="cobrado">
                               <Label col="0" row="0" text="{{item.banco}}" style="text-align: left"></Label>
                               <Label col="1" row="0" text="{{item.fecha}}" style="text-align: right"></Label>
                               
                               <Label col="0" row="1" text="Convenio" style="text-align: left"></Label>
                               <Label col="1" row="1" text="{{item.convenio}}" style="text-align: right"></Label>
                               
                               <Label col="0" row="2" text="Referencia" style="text-align: left"></Label>
                               <Label col="1" row="2" text="{{item.referencia}}" style="text-align: right"></Label>
                           </GridLayout>
                       </GridLayout>
                   </template>
               </ListView>
           </StackLayout>
        </GridLayout>
        <GridLayout *tabItem="{title: 'GENERALES'}" >
    
        </GridLayout>
    </TabView>
`,
    styleUrls: ["pages/referenciasbancarias/css/referenciabancaria.css"]
})
export class ReferenciabancariaComponent implements OnInit {
    public referencias =[
        {banco:'Bancomer', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Banamex', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Santander', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Bajio', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Scotiabank', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'HSBC', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Banorte', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Imbursa', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Banco Azteca', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456},
        {banco:'Bancoppel', fecha:'23 Oct 16', convenio: 1234567, referencia: 12345671234567123456}
    ]
    constructor(private router: Router, private _referenciabancariaService : ReferenciabancariaService, private page: Page) {
    }

    ngOnInit() {
        this.page.actionBar.title = "Referencias Bancarias";
    }

}