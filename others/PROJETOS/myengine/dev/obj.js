import { Screen, render, random } from "./../basicfatures.js"
console.log(random(0, 19))
//create screens canvas
let telamap =new Screen().create(0) //mapa
telamap.width=400
telamap.height=200
let tela01 =new Screen().create(1) //jogo
tela01.width=800
tela01.height=400
//objetos
const map = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,1,0,0,0,0,0,0,
    1,0,0,1,0,0,1,0,
    0,0,0,0,0,0,0,0,
]

const drawmap = {
    map: null,
    screen: telamap,
    x: 0,
    y: 0,
    widthSquare: null,
    heightSquare: null, 
    draw(screen){
        this.map={
            square: [0,map.length],
            line: [0,6],
            colunm: [0,8],
            list: [],
        }
        console.log(screen)
        
    },
    update(screen){
            class squares{
            constructor(x, y, w, h, map_num){
                this.x=x
                this.y=y
                this.w=w
                this.h=h
                this.map_num=map_num
            }
            new(){
                if(this.map_num != 1){
                    screen.ctx.fillStyle=`rgb(${random(0,255)},0,${random(0,255)})`
                }else{
                    screen.ctx.fillStyle="black"
                }
                screen.ctx.fillRect(this.x, this.y, this.w, this.h)
                screen.ctx.fillStyle="yellow"
                screen.ctx.font="150px Ariel"
                screen.ctx.fillText(this.map_num, this.x+150, this.y+150)
            }
        }
        //reset
        this.widthSquare=screen.cnvPxWidth/this.map.colunm[1]
        this.heightSquare=screen.cnvPxHeight/this.map.line[1]
        this.x=0
        this.y=0
        this.map.square[0]=0
            
        while(this.map.square[0] < this.map.square[1]){
            //new square
            new squares(this.x, this.y, this.widthSquare, this.heightSquare, map[this.map.square[0]]).new()
            
            //console.log(`squere: ${this.map.square}\nline: ${this.map.line}\ncolunm: ${this.map.colunm}\nx: ${this.x}\ny: ${this.y}`)
            
            //determinando max de colunm e lines
            if(this.map.colunm[0] >= this.map.colunm[1]-1){
                //exe de 4 em 4 colunm
                this.map.line[0]++
                this.y=this.heightSquare*this.map.line[0] //set y
                if(this.map.line[0] >= this.map.line[1]){
                    this.map.line[0]=0
                }
                this.x=0
                this.map.colunm[0]=0
            }else{
                //tacar para o lado
                this.map.colunm[0]++
                this.x=this.widthSquare*this.map.colunm[0]
                
            }
            this.map.square[0]++
        }
        
    }
}

const player = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    draw(screen){
        this.x=(screen.cnvPxHeight/2)-this.width
        this.y=100
    },
    update(screen){
        console.log(this.x)
        screen.ctx.fillStyle="red"
        screen.ctx.fillRect(this.x,this.y,this.width, this.height)
    }

}
//cenas
let game={}, gameMap ={}

gameMap.drawmap = drawmap
render(gameMap, telamap)

game.player = player  
render(game, tela01)