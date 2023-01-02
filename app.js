const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 1999;
const cors = require('cors');


const router = require('./Route/index')

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())  //Parse the json data
app.use('/v1', router);

// CORS
app.use( 
    (req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "Control-Type, Authorization");
        next();
    }
)




//const mongoURL ='mongodb+srv://edureka_DB:1234@cluster0.qlssb.mongodb.net/zomato?retryWrites=true&w=majority';
const mongoURL ='mongodb+srv://anup8899:Anup%4018899@cluster0.p3jxj.mongodb.net/FoodAppDB?retryWrites=true&w=majority';
// const mongoURL =' mongodb://127.0.0.1:27017/';
mongoose.connect(
    mongoURL,
    {useNewUrlParser : true,
    useUnifiedTopology : true}
    )

.then( (success)=>{
    // Making Server
    app.listen(port, ()=>{
        console.log("Server has been Started on "+ port );
    })
})
.catch(
    (err)=>{
        console.log(err);
        console.log("Filed To Start");
    }
)
