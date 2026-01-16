//HOME
let object_home = document.createElement("div")
//BOTOES
let bt_hm_01 = document.createElement("button")
let bt_hm_02 = document.createElement("button")
//vd
let video_home = document.createElement("img")
video_home.src="./assets/charrador_menu_animacao.gif"
object_home.appendChild(video_home).id="vd_hm"

const home = {
    x: '',largura:'',
    y:'',altura:'',
    criar(x, y, larg, altu){
        this.x=x,this.largura=larg
        this.y=y,this.altura=altu
        //tela home
        object_tela.appendChild(object_home).id="home"
        //BOTOES
        //bt-01
        object_home.appendChild(bt_hm_01).id="bt_hm_01"
        bt_hm_01.classList.add('bts_hm')
        bt_hm_01.innerText="JOGAR"
        //bt-02
        object_home.appendChild(bt_hm_02).id="bt_hm_02"
        bt_hm_02.classList.add("bts_hm")
        bt_hm_02.innerText="OPCOES"
        //interacoes dos botes
        let animacao_bts_hm = [bt_hm_01, bt_hm_02]
        for(let i=0; i<animacao_bts_hm.length; i++){
            //animacao dos botoes
            animacao_bts_hm[i].addEventListener("mousemove", ()=>{animacao_bts_hm[i].style.animation="1s bt_hm_carne infinite"})
            animacao_bts_hm[i].addEventListener("mouseout", ()=>{animacao_bts_hm[i].style.animation=""})
            animacao_bts_hm[i].addEventListener("click", ()=> {
                animacao_bts_hm[i].style.animation=" 0.5s bt_hm_active"
                //click bt-01
                if(i ==  0){
                    setTimeout(()=>{
                        troca_tela("jogo")
                    }, 800)
                }
                //click bt-02
                if(i ==  1){
                    
                }
            })
        }
    },
    update(){
        //tela home
        css_update(this.x, this.y, this.largura, this.altura, object_home)
        //video home
        css_update(400, 200, 190, 300, video_home)

    }
}
