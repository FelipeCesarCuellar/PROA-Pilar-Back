const mongoose = require('mongoose')
require('dotenv').config()

const url = 'mongodb+srv://admin:<password>@cluster0.6daktrr.mongodb.net/'
const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_CLUSTER,
  } = process.env
  
const mongoConnectionURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.${MONGO_HOST}.mongodb.net/`

async function dbConnection() {
    try{
        await mongoose.connect(mongoConnectionURL) 
    }catch (err){
        console.log("Erro ao conectar com MongoDB: " + err)
    }
    console.log("Conexão OK!")  
}

module.exports = dbConnection