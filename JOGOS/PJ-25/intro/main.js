const intro = {
    x: 0,
    y: 0,
    width: screenWid,
    height: screenHei,
    opacity: 1,
    text: {
        x: 300,
        y: 100,
        width: 400,
        height: 300,
        draw(){
            ctx.drawImage(assets.imgs.intro.text, this.x, this.y, this.width, this.height)
        },
        update(){
            if(mouse.memory.includes(1)){
                console.log("sss")
                animation.zoom.start(this, 1)
            }
        }
    },
    draw(){                                                                                  
        ctx.fillRect(0,0, this.width, this.height)
        this.text.draw()
        
    },
    
    update(){
        this.text.update()
        if(mouse.memory.includes(1)){
            if(animation.disapper.start(this, 0.01)){
                scene.now=menu
                console.log("foi")
                //scene.now=menu
            }
        }
    }

}