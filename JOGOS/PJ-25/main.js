//TELA
const cnv = document.createElement("canvas")
document.body.appendChild(cnv)
cnv.width = screenWid = 1000
cnv.height = screenHei = 500
const ctx = cnv.getContext("2d")

//DEFININDO VARIAVEIS
const scene = {}
var key, screenWid, screenHei
//INPUTS
const mouse = {
    status: 0,
    memory: [],
    active(){
        //set var x and y
        cnv.addEventListener("mousemove", (event) => {
            this.x = event.offsetX
            this.y = event.offsetY
            //console.log(`mouse (x:${mousex} y:${mousey}`)
        })
        ;//set buttons state
        cnv.addEventListener("mousedown", (event) => {
            this.status = event.buttons
        })
        cnv.addEventListener("mouseup", () => {
            if(this.memory.length < 10 && this.status > 0){
                this.memory.push(this.status)
                this.status = 0
                console.log(this.memory)
            }
        })
        ////console.log("mouse status"+this.status)
    },
    in(obj){
        if(
        this.x >= obj.x && this.x <= obj.x+obj.width && 
        this.y >= obj.y && this.y <= obj.y+obj.height
        ){
            return true
        }else{
            return false
        }

    },
}
window.addEventListener("keydown", (event) => {
    key=event.keyCode
    console.log(key)
    
})
cnv.addEventListener("keyup", (event) => {
    key=null
})

//ASSETS
//0 = img, 1 = song
let setAst = (way_file, type) => {
    let ast
    switch (type) {
        case 0: 
        ast = new Image()
        break;
        case 1:
            ast= new Audio()
        break;
    }
    ast.src=way_file
    return ast
}
const assets = {
    imgs: {
        intro:{
            text: setAst("./ui/imgs/text-click.png", 0)
        },
        menu:{
            background:setAst("./ui/imgs/cenario.png", 0),
            buttons: {
                play:setAst("./ui/imgs/bt-play.png", 0),
                options:setAst("./ui/imgs/bt-options.png", 0),
            },
            npc: setAst("./ui/imgs/psg01.png", 0)
        }
    },
    songs:{
        click: setAst("./ui/songs/click.wav", 1)
    }
}

//ANIMATIONS
const animation = {
    teste: {
        contrast: 1,
        start(obj, volocity){
            if(this.contrast <= 100){
                this.contrast+=volocity
                ctx.filter=`contrast(${this.contrast})`
            }else{
                ctx.filter=`contrast(${this.contrast})`
                return false
            }
        }
    },
    zoom:{
        start(obj, volocity){
            if(obj.width > 0){
            console.log(volocity)
            obj.width+=volocity
            obj.height+=volocity
            obj.x-=volocity/2
            obj.y-=volocity/2
            }
        }
    },
    disapper: {
        opacity: 1,
        start(obj, volocity){
            this.opacity-=volocity
            ctx.filter=`opacity(${this.opacity})`
            if(this.opacity <= 0){
                this.opacity=1
                ctx.filter=`opacity(${this.opacity})`
                return true
            }
        }
    }

}

class buttom{
    constructor(img, x, y, width, height){
        this.img = img
        this.status = 0
        //0=fora 2=dentro 1=saio para fora
        //
        this.animation = {
            add: 0,
            volovity: 3,
        }
        //img set draw
        this.x = x, this.y=y
        this.width = width, this.height=height
        //click
        this.click = () => {}
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    update(){
        if(mouse.in(this)){
            //click
            if(mouse.status==1){
                console.log("prt01")
                this.click()
            }
            if(this.status==0){
                assets.songs.click.play()
                this.status=1
            }
            //animation of butttons
            if(this.width <= this.width-this.animation.add+20){
                this.width+=this.animation.add
                this.height+=this.animation.add
                this.x-=this.animation.add/2
                this.y-=this.animation.add/2
                this.animation.add+=this.animation.volovity
            }
        }else{
            //reverter quando sair
            if(this.status > 0){
                this.status=0
            } 
            if(this.animation.add > 0){
                this.animation.add-=this.animation.volovity
                this.width-=this.animation.add
                this.height-=this.animation.add
                this.x+=this.animation.add/2
                this.y+=this.animation.add/2
            }
        }
    }
}