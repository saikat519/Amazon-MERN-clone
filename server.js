const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;
const stripe = require('stripe')(process.env.STRIPE_SK);

//middlewares
app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 
app.use(cors({ origin:true }));



//routes
const api = require('./api');
app.use('/api',api);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))

// ...
// Right before your app.listen(), add this:
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}



// listen
mongoose.connect(process.env.MONGO_URI,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(res => {
    console.log("mongodb connected....");
    app.listen(port,() => {
        console.log(`server running at port ${port}`);
    });
 })
 .catch(err =>{
     console.log(err)
 })
