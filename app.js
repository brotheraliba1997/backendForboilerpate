const crouse = [
    {
        id: 1,
        name: "maths",
        jawan: "nodejs"
    },
    {
        id: 2,
        name: "programing",
        jawan: "ract js",
    },

    {
        id: 3,
        name: "workstation",
        jawan: "react native",
    },
]


const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const port = 5000;

app.use(express.json()) 
const indexRoute = require('./routes/index.js');
// midle wear

app.use("/" , indexRoute)



app.get("/indus/:id", (req,res) => {
    let id = req.params.id
    let obj = crouse.find((x) => x.id == id)
    if(obj){
        res.send(obj).status(200)
    } else {
        res.send("no data found").status(404)
    }  
})


app.post("/booking", (req,res) => {
    const book = req.body;
    console.log(book)
    res.send("created")
})

    // mongoose.connect(process.env.MONGO_URL).then((res) => {
    //     console.log("database  connected successfully")
    //     app.listen(process.env.PORT, () => {
    //         console.log("server is runing on 5000")
    //     })
    // }).catch((err) => {
    //     console.log(err)
    // })


    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });







