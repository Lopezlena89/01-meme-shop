import { db } from "@/database"
import Product from "@/model/Product";
import { NextResponse } from "next/server"
import {listProducts} from '../../../../database/tShirtsDB';

export async function POST(request:Request){
    
  await db.connect();
 
  await Product.insertMany(listProducts)
  await db.disconnect();
  
  return NextResponse.json({ messaje:'Los datos semilla fueron enviados con exito' })

}