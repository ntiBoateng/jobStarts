const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const {getFlowers,getFlowerById} = require('./models/db')

app.get('/',(req,res)=>{
    res.json({"message":"Json web tokens"})
})
app.get('/flowers',getFlowers)
app.get('/flower/:id',getFlowerById)

app.listen(PORT,()=>{
    console.log("Sever is listening on Port "+PORT)
})