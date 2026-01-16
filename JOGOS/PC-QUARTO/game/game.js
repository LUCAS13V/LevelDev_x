const random = (num) => Math.floor(Math.random(num)*num)
//CSSUPDATE
function css_update(x, y, larg, altu, obj){
    obj.style.left=`${x}px`
    obj.style.top=`${y}px`
    obj.style.width=`${larg}px`
    obj.style.height=`${altu}px`
}
//TELA DO JOGO 
var object_tela = document.createElement("div")
const tela = {
    //varivais iniciais
    x: "", largura: "",
    y: "", altura: "",
    criar(x, y, larg ,altu){   
        //definido variveis inicias
        this.largura = larg, this.x = x
        this.altura = altu, this.y = y
        document.body.appendChild(object_tela).id="tela"
    },
    update(){
        css_update(this.x, this.y, this.largura, this.altura, object_tela)
    }
}
//SCOREs
let orda = 0, level = 1
let object_orda = document.createElement("div")
document.body.appendChild(object_orda).classList.add("scores")
let object_level = document.createElement("div")
document.body.appendChild(object_level).classList.add("scores")
object_orda.id="ordas", object_level.id="level"
//LEITURA DO TECLADO
var key_player_move
window.addEventListener("keydown", ()=>{
    //se d ou a click ent mudar key
    //console.log(event.key)
    //68 direita 65 esquerda
    if(event.keyCode==68 || event.keyCode==65){key_player_move = event.keyCode}
})