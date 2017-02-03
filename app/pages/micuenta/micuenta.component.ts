import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {DatePicker} from "ui/date-picker";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {DatepickerComponent} from "../modals/datepicker/date-picker";

@Component({
    selector: "my-app",
    providers: [],
    templateUrl: "pages/micuenta/micuenta.html",
    styleUrls: ["pages/micuenta/css/micuenta.css"]
})
export class MicuentaComponent implements OnInit {

    constructor(private router: Router, private page: Page, private vcRef: ViewContainerRef,  private _modalService: ModalDialogService) {
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";

    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }
    modalPicker(){
        console.log("modalpICKER");
        let options: ModalDialogOptions = {
                    viewContainerRef: this.vcRef,
                    fullscreen: false
                };
                // >> returning-result
                this._modalService.showModal(DatepickerComponent, options)
                    .then((dateresult: Date) => {
                        console.log("date result " + dateresult);
                    });
    }
    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: 0, y: -25},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

}