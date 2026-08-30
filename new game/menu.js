import { scane } from "./main.js"
import {screen , images, keys, mouse} from "./script.js"

let fundo = {
    x: 0,
    y: 0,
    width: null, 
    height: null,
    img: null,
    brightness: 0,
    draw(){
        
    },
    update(){
        if(!images.fundo){return}
        this.img = images.fundo
        //screen.ctx.save()
        //this.brightness++
        if(this.brightness>200){
            this.brightness=0
        }
        //screen.ctx.filter=`brightness(${this.brightness}%)`
        this.width=screen.renderWidth
        this.height=screen.renderHeight
        screen.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
        //screen.ctx.restore()
    }
}
//LEYOUT
let btConfig = {
    x: 100,
    y: 500,
    width: 150, 
    height: 150,
    angle: 0.5,
    img: null,
    draw(){

    },
    update(){
        if(images.loading[0]<images.loading[1]){return}
        this.img = images.config
        screen.ctx.save()
        screen.ctx.translate(this.x + (this.width/2), this.y + (this.height/2))
        this.angle+=0.5
        screen.ctx.rotate(this.angle * Math.PI / 180)
    
        screen.ctx.drawImage(
            this.img,
            -(this.width/2),
            -(this.height/2),
            this.width,
            this.height,
        )
        screen.ctx.restore()
        
    }
}

let btPlay = {
    x: 600,
    y: 100,
    width: 300, 
    height: 150,
    img: null,
    draw(){
        if(!images.play){return}
        screen.ctx.drawImage(
            this.img[0],
            this.x,
            this.y,
            this.width,
            this.height,
        )
    },
    update(){
        if(!images.play){return}
        this.img = images.play
   
        if(mouse.in(this)){
            //E A CENA AUTUAL?
            if(scane.now==menu){
                if(this.width < 330 || this.height < 180){
                    this.width+=2 
                    this.height+=2
                    this.x-=1
                    this.y-=1
                }
            }
        //CLICK
            if(mouse.button==1){
            }   
        }
        screen.ctx.drawImage(
            this.img[0],
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}

export const menu = {
    draws: [
        fundo,
        btPlay,
        btConfig,
    ],
    updates: [
        //CAMADAS
        fundo,
        btPlay,
        btConfig,
    ],
    draw(){
        for(let itn in this.draws){
            this.draws[itn].draw()
        }
    },
    update(){
        for(let itn in this.updates){
            this.updates[itn].update()
        }
    }
}