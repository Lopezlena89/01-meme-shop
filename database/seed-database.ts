
import prisma from '../app/lib/prisma';
import { listProducts } from './tShirtsDB';

async function main(){
    //1.Borrar registros previos
    await Promise.all([
        prisma.product.deleteMany(),
        prisma.user.deleteMany()
    ])

    // Productos
    const productosData = listProducts.map((product)=>product)
    console.log(productosData)
    await prisma.product.createMany({
        data:productosData
    })


    console.log();
}

(()=>{
    main();
})()




