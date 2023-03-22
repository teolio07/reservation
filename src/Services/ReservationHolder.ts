import { IResult } from "mssql";
import { Connection } from "../database/Connection";
import { TypeUser } from "../types/TypeUser.dto";
import { IUserServices } from "../interfaces/IUserServices";

export class ReservationHolder implements IUserServices{

    static async getProductos(){
        let result = await Connection.query('select * from PRODUCTO');
        console.log(result)
    }

    async getUser(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeUser>);
        console.log(result)
        return result;
    }

    async getUsers(){
        let result = (await Connection.query('select * from PRODUCTO') as IResult<TypeUser>);
        return result
    }

     async createUser(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

    async updateUser(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

     async deleteUser(){
        let result = await Connection.query('select * from PRODUCTO');
        return true
    }

}