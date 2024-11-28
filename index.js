import express from "express"
import { users } from "./user.data.js"

const app = express()

const Port = 5000

app.get("/", (req , res)=>{
    res.send('Server is Running Perfectly');
})

app.get("/data", (req ,res)=>{
    return res.json(users)
})

app.listen(Port , ()=>{
    console.log(`Server Started on Port ${Port}`);
})