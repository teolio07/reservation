import { IResult } from "mssql";
import { TypeServiceToReservation } from "../types/TypeServiceToReservation.dto";

export interface IServicesToReservation{
    getServiceReservation:()=>Promise<IResult<TypeServiceToReservation>>,
    getServicesReservation:()=>Promise<IResult<TypeServiceToReservation>>,
    createServiceReservation:()=> Promise<boolean>,
    updateServiceReservation:()=> Promise<boolean>,
    deleteServiceReservation:()=> Promise<boolean>
}