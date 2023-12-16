"use server"

import prisma from '../../app/lib/prisma';

export async function getProductsMen(){

    try {
        const result = await prisma.product.findMany({
            where: {
              gender:'men'
            },
          })

        return result
        
    } catch (error) {
        console.log(error);
        return [];
    }


}
export async function getProductsWomen(){

    try {
        const result = await prisma.product.findMany({
            where: {
              gender:'women'
            },
          })

        return result
        
    } catch (error) {
        console.log(error);
        return []
    }


}
export async function getProductskids(){

    try {
        const result = await prisma.product.findMany({
            where: {
              gender:'kid'
            },
          })

        return result
        
    } catch (error) {
        console.log(error);
        return []
    }


}



