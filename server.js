const express=require("express");
const app=express();
const cors=require("cors");
const port=3000;
const axios=require("axios")

app.use(express.json());

app.use(cors());

app.get("/ping",(req,res)=>{
    res.send("Pong")

})

app.listen(port,() => {
    console.log("Running successfully on port 3000")
})

// module.exports = app;
