const mongoose = require('mongoose')

const connectUrl = "mongodb+srv://Cloud11:Platinum1@cluster11.nomewug.mongodb.net/Todo-Api?retryWrites=true&w=majority"

const connectDb =()=>{
    return mongoose.connect(connectUrl).then(()=>{
            console.log("Connected to MongoDB")
            }).catch((err)=>console.log(err))
    
}

module.exports = connectDb