import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
import {User} from "./user.class";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {Page} from "ui/page";
//import {Page} from "ui/page";
import {CheckBox} from 'nativescript-checkbox';
import {registerElement} from "nativescript-angular/element-registry";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {ModalViewComponent} from "./modal/modal-view";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

@Component({
    selector: "my-app",
    providers: [LoginService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    @ViewChild("container") container: ElementRef;
    @ViewChild("CB1") FirstCheckBox: ElementRef;


    constructor(private router: Router, private loginService: LoginService, private usuario: UserModel, private page: Page, private _modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        this.user = new User();
        this.user.email = "test@mail.com";
        this.user.password = "secret";
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Iniciar Sesión";

    }

    login() {
        this.loginService.login(this.user)
            .subscribe(data => {

                let user: User = data.user as User;
                this.usuario.insert(user);
                this.usuario.fetch();
                this.router.navigate(["/"]);
            }, error => {
                alert("Usuario y/o contraseña incorrectos o no cuenta con acceso a internet.");
            });
    }

    recuperarPassword() {
        console.log("recuperarPassword");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(ModalViewComponent, options)
            .then((dateresult: Date) => {
                console.log("date result " + dateresult);
            });

    }
}