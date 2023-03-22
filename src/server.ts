//imports modules npm
import express from 'express';
import mssql from 'mssql';
import * as dotenv from 'dotenv';

import { Connection } from './database/Connection';
import { ServicesProvider } from './Services/ServicesProvider';

//------consts
const app = express();
const port = 4002;


//------config
dotenv.config();
app.use(express.json());
app.use(express.static('public'))
//connection database
Connection.connect();

//routes
app.get('/gatos',(req,res)=>{
  ServicesProvider.getProductos();
  res.send("ready")
})

app.listen(port,()=>{console.log("server running")})