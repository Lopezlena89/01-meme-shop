import mongoose,{Schema,model,Model} from 'mongoose';


const productSchema = new Schema({

    img: {type:String, required:true},
    inStock: {type:Number, required:true,default:0},
    price: {type:Number, required:true,default:0},
    sizes: [{
        type:String,
        enum:{
            values:['XS','S','M','L','XL','XXL','XXXL']
        }
    }],
    title: {type:String, required:true},
    type: {type:String, required:true,default:'shirt'},
    gender: [{
        type:String,
        enum:{
            values:['men','women','kid']
        }
    }],

})

const Product = mongoose.models.Product || model('Product',productSchema)


export default Product;
