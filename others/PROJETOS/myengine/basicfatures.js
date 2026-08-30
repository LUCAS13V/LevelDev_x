export {Screen, render, random}
const random = (xmin ,xmax) => {return Math.floor(Math.random(xmin)*(xmax+1))}
//renderizador
function render(object, screen,val){
    //val obj simples if no object complexo
    if(val){
        object.draw(screen)
    }else{
        //get itens em cena 
        for(let key in object ){
            //executar cada um
            if(typeof object[key] == "object"){
                object[key].draw(screen)
            }
        }
    }
    function loop(){
        if(val){
            object.update(screen)
        }else{
            //pager itens em cena
            for(let key in object){
                if(typeof object[key] == "object")
                //executar cada um
                object[key].update(screen)
            }
        }
        requestAnimationFrame(loop)
    }
    loop()
}
//cria screen
class Screen{
    constructor(){
        
    }
    create(mark){
        //screen return object
        const screen = {
            self: null,
            ctx: null,
            x: 0,
            y: 0,
            width: 400,
            height: 300,
            cnvPxWidth: 1920,
            cnvPxHeight: 1080,
            id: mark,
            border :{
                width: 1,
                color: "black",
                type: "solid"
            },
            draw(){
                //object html
                const cnv = document.createElement("canvas")
                cnv.id=this.id
                this.self=cnv
                document.body.appendChild(cnv)
                this.ctx= cnv.getContext("2d")
                //style 
                cnv.style.border=`${this.border.width}px ${this.border.type} ${this.border.color}`
            },
            update(){
                // x for possition of screen
                //qunat px
                this.self.width = this.cnvPxWidth
                this.self.height = this.cnvPxHeight
                //tamanho cnv css
                this.self.style.width=`${this.width}px`
                this.self.style.height=`${this.height}px`
                this.self.style.width = `${this.width}px`
            }
        }
        render(screen, false, true)
        return screen
    }
}

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