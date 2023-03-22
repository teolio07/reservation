import { IResult } from "mssql";
import { TypeBooking } from "../types/TypeBooking";

export interface IBooking{
    getBooking:()=>Promise<IResult<TypeBooking>>,
    getBookings:()=>Promise<IResult<TypeBooking>>,
    createBooking:()=> Promise<boolean>,
    updateBooking:()=> Promise<boolean>,
    deleteBooking:()=> Promise<boolean>
}