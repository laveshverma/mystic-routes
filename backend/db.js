require('dotenv').config();
 
const mongoose  = require("mongoose")

const mongoURI=`${process.env.MONGO_DB_URI}`;


//const mongoURI = "mongodb+srv://WhiteShadow:o4QEzRut65ih90iF@mystic-routes-db.nezxlys.mongodb.net/"
//const mongoURI = "mongodb://127.0.0.1:27017/"
const ConnectToMongo = ()=>{
   mongoose.connect(mongoURI).then((res)=>{
      console.log("connected to mongo successfully")
   }).catch((err)=>{console.log("Not Connected",err.message)})
}

// async function ConnectToMongo()  {

//    let connect=()=>{
//     mongoose.connect(mongoURI,res)
//     return("connection successfull");
//    }
//    let msg = await connect;
//    console.log(msg);
// }
module.exports = ConnectToMongo;