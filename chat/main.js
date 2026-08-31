import { json } from "body-parser"
import { stdin, stdout } from "process"
import readline from "readline"

const url = "http://192.168.1.42:3000"

async function ApiPost(url, data){
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type":"Application/json"
        },
        body: JSON.stringify(data),
    })
}

//chat 
let input = readline.createInterface({
    input: stdin,
    output: stdout,
})
//espera o enter cap a msgss
input.on("line", (msg)=>{
    let my = {
        name: "lucas",
        menssage: msg
    }
    ApiPost(url, my)
})

//limpa e ataliza o chat 
setInterval(() =>{
    console.clear()
    async function log(){
        const res = await fetch(url)
        console.log(await res.text())
        stdout.write("nome> "+input.line)
    }log()
}, 1000)