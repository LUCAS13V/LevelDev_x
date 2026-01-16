const menu = {
    x: 0,
    y: 0,
    width: screenWid,
    height: screenHei,
    buttons: {
        play:new buttom(assets.imgs.menu.buttons.play, screenWid/2-150 ,50, 300, 150),
        options: new buttom(assets.imgs.menu.buttons.options, screenWid/2-150 ,300, 370, 0)
    },
    npc: {
        x: 0,
        y: 300,
        width: 200,
        height: 200,
        draw(){
            ctx.drawImage(assets.imgs.menu.npc, this.x, this.y, this.width, this.height)
        },
        update(){

        }

    },
    draw(){
        ctx.drawImage(assets.imgs.menu.background, this.x, this.y, this.width, this.height)
        this.buttons.play.draw()
        this.buttons.options.draw()
        this.npc.draw()
        
    },
    update(){

        //this.buttons.options.update()
        this.buttons.play.update()
        this.buttons.play.click= () => {

            animation.teste.start(this, 1)
        }
    }
}