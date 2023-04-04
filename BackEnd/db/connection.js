const mongoose = require('mongoose')

const db = process.env.MONGO_URI;
mongoose.set('strictQuery', true)
mongoose.connect(db , {
    useNewUrlParser : true ,
    useUnifiedTopology : true 
}).then(()=>{
    console.log(`connected to Database...`)
}).catch((err)=> console.log(`connection to database failed  + ${err}`))