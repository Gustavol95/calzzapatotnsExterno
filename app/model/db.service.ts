import {Injectable} from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DbService {

    private _database: any;
    private _version : number = 2;
    private count : number = 0;

    constructor() {

        this.count++;
        console.log("entra a DBService", this.count);
        var version = this._version;


        (new Sqlite("calzzapato.db")).then(db => {

            db.resultType(Sqlite.RESULTSASOBJECT);

            db.version((err, ver)=> {
                if (ver !== version) {
                    db.version(version);
                    this.createTables(db);
                }

            });

            this._database = db;

        }, error => {

            console.log("ERROR AL ABRIR LA BD", error);

        });
    }

    getDatabase() : any{
        return this._database;
    }

    deleteDatabase(){
        //this._database.execSQL("TRUNCATE");
        /*if (Sqlite.exists("conymat.db")) {
            console.log("BASE DE DATOS BORRADA");
            Sqlite.deleteDatabase("conymat.db");
        }else{
            console.log("NO SE PUDO BORRAR LA BASE DE DATOS");
        }*/
    }

    private createTables(db : any){

        db.execSQL("CREATE TABLE IF NOT EXISTS user (id INTEGER, name TEXT, email TEXT, created_at TEXT, updated_at TEXT, deleted_at TEXT)");

    }


}