let cnv = document.querySelector("#tela")
let ctx = cnv.getContext("2d")
const img = new Image()
img.src="./assets/dino-export.png"

let key_down=null
window.document.addEventListener("keydown", (event) => {
    console.log(event.keyCode)
    key_down=event.keyCode
})
window.document.addEventListener("keyup", () => {
    key_down=null
    console.log(key_down)
})

const player = {
    x: 0,
    y:250,
    width: 25,
    heght: 32,
    volocity: 10,
    draw(){
        
        ctx.drawImage(img,
            0, 0,
            48, 58,
            this.x, this.y,
            this.width, this.heght 
        )

    }
}
const floor = {
    x: 300,
    y: 250,
    width: 60,
    heght: 90,
    volocity: 1,
    draw(){
        const sprite_floor = (x, y) => {
            if(this.x < -this.width){
                
            }
            ctx.drawImage(img,
                0, 60,
                64, 90,
                x, y,
                this.width, this.heght
            )
        }
        for(let i=0; i<10; i++){
            sprite_floor(this.x+((this.width+10)*i),this.y)
            
        }
    },
        
    update(){
        this.x-=this.volocity
    }
}

function game_loop(){
    ctx.clearRect(0,0,cnv.clientWidth, cnv.clientHeight)
    floor.draw()
    floor.update()
    player.draw()
    requestAnimationFrame(game_loop)
}
game_loop()
