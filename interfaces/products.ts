export interface IProduct {
    _id: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISize[];
    title: string;
    type: 'shirt';
    gender: 'men'|'women'|'kid'|'unisex'

}

export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

