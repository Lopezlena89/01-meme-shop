import { NextResponse } from "next/server"
import { db } from "@/database"
import User from "@/model/User"
import bcrypt from 'bcryptjs'



export async function POST(request: Request) {
    const {name = '',email = '',password = ''} = await request.json();
    if(name.length < 3){
        return NextResponse.json({messaje:'El nombre debe de tener mas de 3 letras'},{status:400})
    }
    if(password.length < 5){
        return NextResponse.json({messaje:'El password debe de tener mas de 5 caracteres'},{status:400})
    }
    await db.connect();
    const textEmail = await User.findOne({email});
    if(textEmail){
        db.disconnect();
        return NextResponse.json({messaje:'El correo ya existe'},{status:400})
    }
    const newUser = new User({
        email:email.toLocaleLowerCase(),
        password: bcrypt.hashSync(password),
        role:'client',
        name,   
    });
    try {
        await newUser.save({validateBeforeSave:true})
    } catch (error) {
        console.log(error);
        return NextResponse.json({messaje:'Revisar logs del servidor'},{status:500})
    }

    const { _id,role } = newUser;
    return NextResponse.json({ 
        user:{
            email,
            role,
            name
        } 
    },{status:200})
  }