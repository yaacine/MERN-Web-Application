const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

const items = require('./routes/api/item');
//Body parser 
app.use(bodyParser.json());

// DB config 
const db = require('./config/keys').mongoURI;
// connect to Mongo 
mongoose
    .connect(db)
    .then(() => console.log("mongoDb connected ..."))
    .catch(err => console.log(err));

// Use routes 

app.use("/api/item" , items);



// Initializing Port 
const port = process.env.PORT || 5000;
app.listen(port ,()=> console.log('server started in port ' + port) )
    


