
import { NextResponse } from "next/server";
import { db } from "@/database";
import User from "@/model/User";
import { jwt } from "@/utils";

export async function GET(request:any){
    const {value} = request.cookies.get('token')
    let userId = '';
   
    try {
        userId = await jwt.isValidToken(value);
    } catch (error) {
        return NextResponse.json({messaje:'Token de autorizacion no es valido'},{status:400})
    }
    await db.connect();
    const user = await User.findById(userId);
    await db.disconnect();
    if(!user){
        return NextResponse.json({messaje:'No existe usuario con ese id'},{status:400})
    }
    const {_id,email,role,name} = user;
    return NextResponse.json({
        token:jwt.signToken(_id,email),
        user:{
            email,
            role,
            name
        }
    },{status:200})

}