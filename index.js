
require('dotenv').config()
const express= require("express")
const app=express()


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/login',(req,res)=>{
    res.send("please login")
})

app.listen(process.env.PORT,(err)=>{
if(err){
    console.log(err)
}
else{
    console.log(`port listened`)
}
})