import {Injectable} from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DbService {

    private _database: any;
    private _version : number = 2;
    private count : number = 0;
    constructor() {

        this.count++;
        //console.log("entra a DBService", this.count);
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

            //console.log("ERROR AL ABRIR LA BD", error);

        });
    }

    getDatabase() : any{
        return this._database;
    }

    private createTables(db : any){

        db.execSQL("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255), password VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), cliente_id INT(10), created_at TIMESTAMP, updated_at TIMESTAMP)");
        db.execSQL("CREATE TABLE IF NOT EXISTS cliente (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo INT(10), paterno VARCHAR(255), materno VARCHAR(255), nombre VARCHAR(255), rfc VARCHAR(255), plaza_id CHAR(2), tipocredito_id CHAR(2), cp CHAR(5), asentamiento_id INT(10))");
        db.execSQL("CREATE TABLE IF NOT EXISTS tipos_medio (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(255))");
        db.execSQL("CREATE TABLE IF NOT EXISTS clientes_medios (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_id INT(10), cliente_codigo INT(10), tipomedio_id INT(10), referencia VARCHAR(255), notas VARCHAR(255), estado TINYINT(1))");
    }


}