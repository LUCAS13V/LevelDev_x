//CORes
let border_color = "red"
let fundo_color = " rgba(0 , 0, 0, 0.8)"
function set_color(objs, color_around, color_fill=null){
    for(let i=0; objs.length>i; i++){
        objs[i].style.borderColor=`${color_around}`
        objs[i].style.background=`${color_fill}`
    }
}
set_color([object_level, object_orda, object_death], border_color, fundo_color)
set_color([object_tela], border_color)

//check save
let screen_executes = {menu:true, jogo:false, morte:false,}
if(sessionStorage.length>0){screen_executes = JSON.parse(sessionStorage.getItem("screen_executes"))}
console.log(screen_executes)
//troca_tela("menu")
//MENU
const home_screen = {
    execute: screen_executes.menu,
    init(){
        home.criar(0 , 0,tela.largura, tela.altura)
        
    },
    update(){
        home.update()
    }
}
//JOGO 
const gameplay_screen = {
    execute: screen_executes.jogo,
    init(){
        //PLAYER INIT
        player.criar(tela.x+(tela.largura/2) , tela.altura-85, 30, 60)
        //ENIMIGOS INIT 
        //enm_max(5)
        level=3
        //MUDANDO FUNDO DA TELA 
        object_tela.style.backgroundImage=" url('./assets/fundo_casa.png')"
    },
    update(){
        //ADD SCORE IN TELA
        object_orda.innerText=`HORDA(${orda})`
        object_level.innerText=`LEVEL(${level})`

        //PLAYER UPDATE
        player.update()
    
        //atalizar enimigos da lista um de cada vez
        //for(let i=0;enimigos.length > i; i++){
        //    enimigos[i].update()
        //}
    }
}
//TELA DE MORTE
const death_screen = {
    execute: screen_executes.morte,
    init(){
        //ajeitar valore tem que ser 
        //extremidades da tela  menos valores para reposividade
        death.criar(100, 100, 600, 300)
    },
    update(){
        death.update()
    }
}

//TELA INIT
let tlc = ()=>{tela.criar(100, 80, 800, 500)}
tlc()
//executar ?
if(home_screen.execute){home_screen.init()}
if(gameplay_screen.execute){gameplay_screen.init()}
//gameplay_screen.init()
function geral_loop(){
     //TELA UPDATE
     tela.update()
     //MENU
     if(home_screen.execute){home_screen.update()}else{
        try {
            object_tela.removeChild(object_home)
        }catch(error){}
    }
     //JOGO UPDATE
    if(gameplay_screen.execute){gameplay_screen.update()}
    //TELAS DE MORTE
    if(death_screen.execute){death_screen.update()}
    requestAnimationFrame(geral_loop)
}geral_loop()
//funcoes troca da tela 
function troca_tela(options){
    screen_executes.menu=false
    screen_executes.jogo=false
    screen_executes.morte=false  
    switch(options){
        case "menu":
            screen_executes.menu=true
        break;
        case "jogo":
            screen_executes.jogo=true
        break;
        case "morte": 
            screen_executes.morte=true
        break
    }
    window.sessionStorage.setItem("screen_executes", JSON.stringify(screen_executes))
    window.location.reload()
}
