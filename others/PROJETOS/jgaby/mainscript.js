import { objects } from "./objects.js"
console.log(square)
let debug = true
//criar canvas 
function create_cnv(space){
    const cnv = document.createElement("canvas")
    cnv.id="tela"
    document.body.appendChild(cnv)
    
    //add styles in cnv
    cnv.style.border="1px solid black"
    cnv.width=window.innerWidth-space
    cnv.height=window.innerHeight-space
    cnv.style.transform=`translate(${space/2}px,${space/2}px )`
    console.log(`screen made with size(w:${cnv.width}, h:${cnv.height})`)
    //created object self
    let object_self=cnv.getBoundingClientRect()
    object_self.HtmlObject=cnv
    console.log(object_self)
    return object_self
}
const tela = create_cnv(10)
const ctx = tela.HtmlObject.getContext("2d")
//funcionalidades gerais
let keys;
const features = {
    controls: true,
    sonds: false,
    update(){
        //controls
        keys = Array()
        addEventListener("keydown", (event) => {
            keys.unshift(event.keyCode)
            //console.log(keys)
            if(keys.length >= 10){
                keys.splice(0,10)
            }
        })
        addEventListener("keyup", (event) => {
            keys.unshift("")
            //console.log(keys)
        })
    }
}
//objetos


const render = {
    list: Array(),
    run(iten, method=1){
        if(method=="object"){
            iten.draw()
            loopAnimation = ()=>{
                iten.update()
                requestAnimationFrame(loopAnimation)
            }
            loopAnimation()
        }if(method=="scene"){

        iten.forEach(element => {
            console.log(element)
        })
        
        }if(method=="draw"){
            iten.draw()
        }if(method=="function"){
            iten.update()
        }
    }
}
render.run(features, "function")

//cenas

let loading = [
    {
        x: 0,
        y: 0,
        width: tela.width,
        heght: tela.height,
        name: "background",
        color: "balck",
        draw(){
            ctx.fillStyle=this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
            console.log("carreagdo")
        },
        update(){

        }
    },
    {
        name: "itn",
        draw(){console.log("itn2")},
        update(){}
    }
  
]

render.run(loading, "scene")