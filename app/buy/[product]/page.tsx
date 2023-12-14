'use client'

import { useProducts } from "@/hooks";
import { Image } from "@nextui-org/react";



export default async function Page({ params }: { params: { product: string } }) {
    // const {data,isError,isLoading} = useProducts(`/product/getProductByTitle/${params.product}`)
    // if (isError) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>
    // console.log(data)
   
    console.log(params);
  return(
    <>
      <div className="w-[60%] " style={{border:'5px solid black'}}>
      <Image
        width={300}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />

      </div>
      <div className="w-[40%] flex justify-center" style={{border:'5px solid black'}}>
        
      </div>
    </>
  )
}