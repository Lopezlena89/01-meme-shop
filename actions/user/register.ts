"use server"
import prisma from '../../app/lib/prisma';
import bcrypt from 'bcryptjs';

export const registerUserPrisma = async(name='',email='',password='') =>{
    try {
       const user = await prisma.user.create({
            data:{
                name,
                email:email.toLocaleLowerCase(),
                role:'client',
                password: bcrypt.hashSync(password),
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
            
        })
        return {
            ok:true,
            user,
            message: 'Usuario creado'
        };

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'No se pudo crear el usuario'
          }
    }
}


