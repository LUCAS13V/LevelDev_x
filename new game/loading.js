import {screen, images, keys, mouse} from "./script.js"
import {menu} from "./menu.js"
import { scane } from "./main.js"
let fundo = {
    x: 0,
    y: 0,
    width: screen.renderWidth,
    height: screen.renderHeight,
    text: {
        x: 0,
        y: 0,
        size: 100,
        color: "rgb(0, 0, 0)",
        text: ["carregando", "carregando.", "carregando..", "carregando..."],
        
    },
    draw(){
        this.text.num = 0
        this.text.cont = 0
    },
    update(){
        //FUNDO
        screen.ctx.fillStyle = "rgb(68, 68, 68)"
        screen.ctx.fillRect(this.x, this.y, this.width, this.height)
        //TEXTO
        screen.ctx.fillStyle=this.text.color 
        if(this.text.cont < 80){
            this.text.cont++
        }else{
            if(this.text.num < 3){this.text.num++}else{this.text.num=0}
            this.text.cont = 0
        }
        screen.ctx.font=`${this.text.size}px pixel`
        screen.ctx.fillText(this.text.text[this.text.num] , (screen.renderWidth/2) - this.text.size*3, screen.renderHeight-this.text.size*2)
    }
}
let square = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    img: null,
    draw(){
        this.num=0
        this.value=true
    },
    update(){
        if(images.loading[0]<images.loading[1]){return}
        this.x=(screen.renderWidth/2)-this.width/2
        this.y=(screen.renderHeight/2)-this.height/2
        //ANIMATION 
        if(this.value){
            setTimeout(()=>{
                if(this.num<14){this.num++}else{this.num=0}
                this.value=true
            },1500)
            this.value=false
        }
        this.img = images.square
        screen.ctx.drawImage(
            this.img[this.num],
             this.x, 
             this.y, 
             this.width, 
             this.height)
    }
}

export const loading = {
    draws: [
        //CAMADAS
        fundo,
        square,
    ],
    updates: [
        fundo,
        square,
    ],
    draw(){
        this.value=true
        menu.draw()
        setTimeout(()=>{
            screen.ctx.globalAlpha=1
            scane.now=menu
        }, 15000)  
        for(let itn in this.draws){
            this.draws[itn].draw()
        }
    },
    update(){
        if(this.value){
            setTimeout(()=>{
                screen.ctx.globalAlpha-=0.01
                //console.log(screen.ctx.globalAlpha)
                this.value=true
            },500)
            this.value=false
        }
        menu.update()
        for(let itn in this.updates){
            this.draws[itn].update()
    }
    }
}