export type TypeBooking = {
    id_booking:string,
    id_doc_RH:string, // RH = Reservation holder
    id_service:string,
    date_start:Date,
    date_end:Date,
    time_start:Date,
    time_end:Date,
    status:boolean
}