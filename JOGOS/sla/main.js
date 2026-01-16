var frames, cenes, cnv, ctx, width, height
var random = (num) => Math.floor(Math.random() * num) 

const var_scene = {
    menu: 0,
    play: 1,
    dead: 2, 
}
//OBJETOS (-_ - )
const floor = {
    x: 0,
    y: 300,
    width: 600,
    height: 50,
    color: "green",
    draw(){
        ctx.fillStyle=`${this.color}`
        ctx.fillRect(`${this.x}`, `${this.y}`, `${this.width}`, `${this.height}`)
    }
}
const block = {
    x: 100,
    y: 0,
    width: 50,
    height: 50,
    color: "black",
    gravity: 0.5,
    volocity: 1.5,
    jumpForce: 11,
    jumpNum: 0,
    draw(){
        ctx.fillStyle=`${this.color}`
        ctx.fillRect(`${this.x}`, `${this.y}`, `${this.width}`, `${this.height}`)
    },
    jump(){
        if(this.jumpNum < 3){
            this.volocity = -this.jumpForce
            this.jumpNum++
        }else{
            console.log(this.y+this.height)
        }
    },
    update(){
        this.volocity+=this.gravity
        this.y+=this.volocity
        //console.log(this.volocity)
        if((this.y+this.height) >= floor.y){
            this.y=floor.y-this.height
            this.jumpNum = 0
        }
    }

}
const obstaculos = {
    volocity: 3,
    spaceTime: 0,
    objs: [],
    colors: ["red","green","blue","black","yellow "],
    objAdd(){
        this.objs.push( {
            x: cnv.width,
            y: 0,
            width: 50,
            height: 30 + random(110),
            color: this.colors[random(this.colors.length)]
        })
    },
    draw(){
        for(let i = -0, len = this.objs.length; i < len; i++){
            let obj = this.objs[i]
            
            ctx.fillStyle=obj.color
            ctx.fillRect(obj.x, floor.y-obj.height , obj.width ,obj.height)
        }

    },
    update(){
        for(let i = -0, len = this.objs.length; i < len; i++){
            let obj = this.objs[i]
            obj.x -= this.volocity
            if(obj.x <= -obj.width){
                this.objs.splice(i, 1)
                console.log(i+"romove")
                len--
                i--
            }
        }
        if(this.spaceTime <= 0){
            this.objAdd()
            this.spaceTime=(60+random(60))
        }else{
            this.spaceTime--
        }
    }
}
//FUNCTIONS ( 0 - 0 )
function click(event){
    block.jump()
    console.log("SAss")
}
function init(){
    cnv = document.createElement("canvas")
    document.body.appendChild(cnv)
    cnv.style.border=" black solid 3px"
    cnv.width=600
    cnv.height=350
    ctx = cnv.getContext("2d")
    document.addEventListener("mousedown", click)
    cenes = var_scene.menu
    game()
}
function game(){
    draw()
    update()
    requestAnimationFrame(game)
}
function draw(){
    ctx.fillStyle="lightblue"
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    floor.draw()
    block.draw()
    obstaculos.draw()
}
function update(){
    frames++
    block.update()
    obstaculos.update()
}
init()