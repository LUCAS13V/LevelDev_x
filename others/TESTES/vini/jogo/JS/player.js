//CRIANDO PLAYER
let player = document.createElement("div")
caixa_base[0].appendChild(player)
player.id="player"
let player_info = {
    pos_x: 131,
    pos_y: 755,
    volocity: 40,
}

//TECLAS
let key=0
window.addEventListener("keydown", (event)=>{
    key=event.keyCode
    walk(player_info)
})
window.addEventListener("keyup", (event)=>{
    //console.log(event.keyCode)
    key=0
})


let div = document.querySelectorAll("div")
let tmp = player.clientWidth+caixa_base[0].clientWidth
//ANDAR
function walk(obj){
    //sima baixo 
    if(key==87 || key==38){
        obj.pos_y-=1*obj.volocity
    }if(key==83 || key==40){
        obj.pos_y+=1*obj.volocity
    }
    //direita esquerda
    if(key==68 || key==39){  
        cont_caixa++
        
    }if(key==65 || key==37){
        cont_caixa--
    }

    player.style.top=`${obj.pos_y}px`
    player.style.top=`${obj.pos_x}px`

    console.log(obj.pos_x, cont_caixa)
    maxbox()
    function loop(){
        
        requestAnimationFrame(loop)
    }loop()
    player.innerText=cont_caixa
}