import { NgModule } from '@angular/core';
import {DbService} from "./db.service";
import {UserModel} from "./user.model";

@NgModule({
  imports: [],
  providers : [DbService,UserModel],
  declarations: []
})
export class DbModule { }
