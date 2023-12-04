import mongoose,{Schema,model,Model} from 'mongoose';


const userSchema = new Schema({

    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{
        type:String,
        values:['admin','client'],
        required:true,
        default:'client'
    }

})

const User = mongoose.models.User || model('User',userSchema)


export default User;