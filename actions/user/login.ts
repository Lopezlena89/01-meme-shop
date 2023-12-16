"use server"
import prisma from '../../app/lib/prisma';
import bcrypt from 'bcryptjs';

export const loginUserPrisma = async(email='',password='') =>{
    console.log({email,password})
    try {
       const user = await prisma.user.findFirst({
            where: { email },
       })
        return {
            ok:true,
            user,
            message: 'Usuario encontrado'
        };

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'No se pudo encontrar el usuario'
          }
    }
}

