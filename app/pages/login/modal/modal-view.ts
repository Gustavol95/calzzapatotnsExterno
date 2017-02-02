import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";
import {User} from "../user.class";

// >> passing-parameters
@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
    styleUrls: ["./../login-common.css", "./../login.css"]
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;
    public user: any = {
        usuario:'',
        email:'',
        telefono:''
    };
    constructor(private params: ModalDialogParams, private page: Page) {
        this.currentdate = new Date(params.context);
    }

    ngOnInit() {
    }

    public submit() {
        this.params.closeCallback(null);
    }
}
// << passing-parameters
