import { db } from "@/database";
import Product from "@/model/Product";
import { NextResponse } from "next/server";


export async function GET(request: Request,{ params }: { params: { product: string } }){ 

    let condition = {title:`${params.product}`} 
    await db.connect()
    const producto = await Product.find(condition);
    if(!producto){
      return NextResponse.json({message:'No se encontro el producto'},{status:400})
    }
    await db.disconnect();

  
  return NextResponse.json({
      producto
  })

}