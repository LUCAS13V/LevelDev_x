export default player 
let player = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    color: "black",
    draw(){
        ctx.style="red"
        ctx.fillRect( x, y, width, height)
    },
    update(){
        ctx.style="red"
        ctx.fillRect( x, y, width, height)
    }
    //x:,y:,width:,height:,
}
