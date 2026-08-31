import { json } from "body-parser"
import express from "express"
const app = express()
app.use(express.json())
let log = ""
app.get("/", (req, res)=>{
    //console.log(req.ip)
    res.send(log)
})
app.post("/", (req, res)=>{
    log+=`${req.body.name}: ${req.body.menssage}\n`
    console.log(log)

})


app.listen(3000, "0.0.0.0",() => {console.log("SV STARTED")})