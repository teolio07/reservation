import { IResult } from "mssql";
import { Connection } from "../database/Connection";
import { IBooking } from "../interfaces/IBooking";
import { TypeBooking } from "../types/TypeBooking";

export class Booking implements IBooking{

    static async getProductos(){
        let result = await Connection.query('select * from PRODUCTO');
        console.log(result)
    }

    async getBooking(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeBooking>);
        console.log(result)
        return result;
    }

    async getBookings(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeBooking>);
        return result
    }

     async createBooking(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

    async updateBooking(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

     async deleteBooking(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

}