import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class UserModel {


    constructor(private db :DbService ) {
    }

    public insert(user: any) {
        this.db.getDatabase().execSQL("INSERT INTO user (id,name,email,created_at,updated_at,deleted_at) VALUES(?,?,?,?,?,?)", [user.id, user.name, user.email, user.created_at, user.updated_at, user.deleted_at]);
    }

    public fetch() {
        return this.db.getDatabase().get("SELECT * FROM user");
    }

    public truncate(){
        this.db.getDatabase().execSQL("DELETE FROM user");
    }


}