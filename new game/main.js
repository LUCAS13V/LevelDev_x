//IMPORTS
import {screen, images, mouse, keys} from "./script.js"
import {menu} from "./menu.js"
import {loading} from "./loading.js"




//SYS DE CARREGAMNETO
export let scane = {now: menu}
//ATALIZACOES 
images.draw()
scane.now.draw()
function loopUpdate(){
    screen.ctx.clearRect(0, 0, screen.renderWidth, screen.renderHeight)
    screen.update()
    images.update()
    scane.now.update()
    requestAnimationFrame(loopUpdate)
}
loopUpdate()