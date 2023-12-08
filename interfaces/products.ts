export interface IProduct {
    _id: string;
    img: string;
    inStock: number;
    price: number;
    sizes: ISize[];
    title: string;
    type: 'shirt';
    gender: 'men'|'women'|'kid'

}

export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

