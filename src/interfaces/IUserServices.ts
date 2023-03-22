import { IResult } from "mssql";
import { TypeUser } from "../types/TypeUser.dto";


export interface IUserServices{
    getUser:()=>Promise<IResult<TypeUser>>,
    getUsers:()=>Promise<IResult<TypeUser>>,
    createUser:()=> Promise<boolean>,
    updateUser:()=> Promise<boolean>,
    deleteUser:()=> Promise<boolean>
}