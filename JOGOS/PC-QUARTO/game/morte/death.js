//tela menu
let object_death = document.createElement("div")
const death = {
    x: '',largura: '',
    y: '',altura:'',
    text: "voce morreu",
    criar(x, y, larg, altu){
        let txt = document.createElement("div")
        object_death.appendChild(txt).id="dt_txt"
        txt.innerHTML=`${this.text}`
        object_tela.appendChild(object_death).id="death_01"
        this.x=x, this.largura=larg 
        this.y=y, this.altura=altu
        
    },
    update(){
        css_update(this.x , this.y, this.largura, this.altura, object_death)
    }
}
//BOTOES
//home
let bt_dt_01 = document.createElement("button")
object_death.appendChild(bt_dt_01).id="bt_dt_01"
bt_dt_01.classList.add("bts_dt")
bt_dt_01.addEventListener("click", ()=>{
    console.log("teste")
    troca_tela("menu")
})
//restart
let bt_dt_02 = document.createElement("button")
object_death.appendChild(bt_dt_02).id="bt_dt_02"
//evento restart
bt_dt_02.classList.add("bts_dt")
bt_dt_02.addEventListener("click", ()=>{
    troca_tela("jogo")
})