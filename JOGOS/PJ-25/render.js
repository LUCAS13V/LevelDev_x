scene.now = intro
function loop_main(){
    ctx.clearRect(0, 0, screenWid, screenHei)
    mouse.active()
    scene.now.draw()
    scene.now.update()
    requestAnimationFrame(loop_main)
}loop_main()
