import express from "express"
import cors from "cors"

let users = {}
const app = express()
app.use(cors())
app.post("/port", (req, res)=>{
    console.log(req.ip+"aaaaaa")
    res.send("recive")

})
app.get("/", (req, res) => {
    console.log(req.ip)
    res.send(users)
})
app.listen(3010, ()=>{console.log("started serevr")})