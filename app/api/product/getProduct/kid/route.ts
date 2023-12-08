import { db } from "@/database"
import Product from "@/model/Product";
import { NextResponse } from "next/server"


export async function GET(request:Request){
  let condition = {gender:'kid'}  
  await db.connect();

  const products= await Product.find(condition)

  await db.disconnect();
  return NextResponse.json({products})

}