import { db } from "@/database";
import User from "@/model/User";
import bcrypt from 'bcryptjs'

import { NextResponse } from "next/server";



export async function POST(request:Request){

    const {email,password} = await request.json();

    await db.connect();
    const user = await User.findOne({email});
    await db.disconnect();

    if(!user.email){
        return NextResponse.json({message:'El email o password son incorrectos - Email'},{status:400})
    }

    if(!bcrypt.compareSync(password,user.password!)){
        return NextResponse.json({message:'El email o password son incorrectos - Password'},{status:400})
    } 

    const {role,name,_id} = user;

    return NextResponse.json({
        user:{
        name,email,role
        }
    })

}