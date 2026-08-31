import {WebSocketServer} from "ws"

const server = new WebSocketServer({
    port: 3000,
})
server.on("connection", (value)=>{
    console.log("conected")
    console.log(value.onmessage())
})
console.log("end")
