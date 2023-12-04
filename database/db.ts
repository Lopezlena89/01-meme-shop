import mongoose from 'mongoose';

const mongoConnect = {
    isConnected:0
}

export const connect = async() =>{
    if(mongoConnect.isConnected  ){
        console.log('Ya estamos conectados')
        return;
    }
    if(mongoose.connections.length > 0){
        mongoConnect.isConnected = mongoose.connections[0].readyState;
        if(mongoConnect.isConnected === 1){
            console.log('Usando la conexion anterior');
            return;
        }
        await mongoose.disconnect();
    }
    await mongoose.connect(process.env.MONGO_URL||'')
    mongoConnect.isConnected = 1;
    console.log('Conectado a MongoDB' + process.env.MONGO_URL);
}

export const disconnect = async ( )=>{
    if(mongoConnect.isConnected===0)return;
    await mongoose.disconnect();
    mongoConnect.isConnected ===0;
    console.log('Desconectado de MongoDB');

}


