import { ISize } from "./products";

export interface ICartproduct{
    _id:string,
    image:string,
    price:number,
    size?:ISize,
    title:string,
    gender: 'men'|'women'|'kid'|'unisex'
    quantity:number;
}
