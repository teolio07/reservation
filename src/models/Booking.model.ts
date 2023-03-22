class Booking {
    public id_booking:string = "";
    public id_doc_RH:string = ""; // RH = Reservation holder
    public id_service:string = "";
    public date_start:Date = new Date();
    public date_end:Date = new Date();
    public time_start:Date = new Date();
    public time_end:Date = new Date();
    public status:boolean = true;
}