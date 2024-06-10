const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model/product.model.js')
const productRoute=require('./routes/product.route.js')
const app = express()


// Middleware
app.use(express.json());  //Allow to store the empty and the single item in the list of the product .
app.use(express.urlencoded({extended:false})) //Can also Submit the Details in any from not only in the JSON fromat


// Routes
app.use("/api/products",productRoute);


app.get('/', (req, res) => {
    res.send("Hello from node Api server ");
});



// mongoose is act as the Connectivity to the MongoDB
mongoose.connect("mongodb+srv://Manoj:Manoj@backenddb.easpw3l.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB")
// here Node-Api is the collection in the DB
    .then(() => {
        console.log("Connected to DataBase");
        app.listen(3000, () => {
            console.log("Server is Running of Server 3000");
        })
    })
    .catch(() => {
        console.log("Connection Failed!");
    });