import mssql from 'mssql';
import {readFileSync} from 'fs';
import { TypeUser } from '../types/TypeUser.dto';
import { TypeServiceToReservation } from '../types/TypeServiceToReservation.dto';
import { TypeBooking } from '../types/TypeBooking';

const rawConfig = readFileSync('./config.json');
const configJson = JSON.parse(rawConfig.toString());

export class Connection{
    constructor(){
        
    }

    static async connect(){
       await mssql.connect(configJson).then(() => {
            console.log('Conexión establecida con éxito');
          }).catch((error:any) => {
            console.log('Error al conectar con la base de datos', error);
          });
    }

    static async query(query:string){
        return await  mssql.query<TypeUser | TypeServiceToReservation | TypeBooking>(query);
    }

}