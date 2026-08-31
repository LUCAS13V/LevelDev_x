import { WebSocket } from "ws";

setInterval(()=>{
    const wsc = new WebSocket("ws://127.0.0.1:3000")
    wsc.on("error", (erro)=>{
        console.log(erro.message)
    })
    wsc.on("open", ()=>{
        console.log("i conect")
        wsc.send("ola")
    })
},1000)