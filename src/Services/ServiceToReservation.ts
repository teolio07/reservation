import { IResult } from "mssql";
import { Connection } from "../database/Connection";
import { TypeServiceToReservation } from "../types/TypeServiceToReservation.dto";
import { IServicesToReservation } from "../interfaces/IServiceToReservation";

export class ServiceReservation implements IServicesToReservation {

    static async getProductos(){
        let result = await Connection.query('select * from PRODUCTO');
        console.log(result)
    }

     async getServiceReservation(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeServiceToReservation>);
        console.log(result)
        return result
    }

    async getServicesReservation(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeServiceToReservation>);
        console.log(result)
        return result
    }

     async createServiceReservation(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

     async updateServiceReservation(){
        let result = await Connection.query('select * from PRODUCTO');
        console.log(result)
        return true;

    }

     async deleteServiceReservation(){
        let result = await Connection.query('select * from PRODUCTO');
        console.log(result)
        return true
    }

}