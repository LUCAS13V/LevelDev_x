//FUNCTIONS

//ARQUIVOS
export const images = {
    loading: [0, 34],
    names: [
        //MENU
        "fundo",
        "config",
        "play",
        //LOADING
        "square"
    ],
    source: [
        //MENU
        "./img/scane/menu/fundo/fundo.png",
        "./img/scane/menu/buttons/config/config.png",
        [   
            "./img/scane/menu/buttons/jogar/up.png",
            "./img/scane/menu/buttons/jogar/down.png"
        ],
        //LOADING
    ],
    listFunc(path, cont, ext){
            let list = []
            for(let i=0; i < cont; i++){
                list.push(`${path}${i+1}${ext}`)
                this.loading[0]++
            }
            this.source.push(list)
    },
    draw(){
        //this.loading[1]=this.source.length
        //ADD OTHERS SOURCES LIST
        this.listFunc("./img/scane/carregando/square/img", 15,".png")
        console.log(this.source)
        //CONVERSAO EM IMG
        for(let itn in this.source){
            if(typeof(this.source[itn])=="string"){
                //CRIA
                let img = new Image()
                img.src=this.source[itn]
                //ARREGOU?
                img.onload = () =>{
                    //CONVERTE
                    this.source[itn]=img
                    //CRIA OS OBJ THIS
                    images[this.names[itn]]=this.source[itn]
                    this.loading[0]++
                }
            }else{
                //CADA ITENLISTA  DA LISTA
                for(let itn2 in this.source[itn]){
                    //CRIA
                    let img = new Image()
                    img.src=this.source[itn][itn2]
                    //CARREGO?
                    img.onload = () => {
                        this.source[itn][itn2]=img
                        //SE ITN NAME EXISTE COMO LISTA
                         if(images[this.names[itn]]){
                             images[this.names[itn]].push(img)

                         }else{
                            images[this.names[itn]]=[]
                            images[this.names[itn]].push(img)
                         }
                         this.loading[0]++
                    }
                }
            }
        //console.log(this.source)
    }
    },
    update(){

    }
}

//MOUSE
export const mouse = {
    x:0,
    y:0,
    button: null,
    in(obj){
        let value = false
        //COLISAO DIREIRA E CIMA
        if(this.x > obj.x && this.y > obj.y && this.x < obj.x+obj.width && this.y < obj.y+obj.height){
            value = true
        }
        return value
    },
    update(){
        
    }
}
addEventListener("mousemove", (event) => {
    //POSICAO                  //TAMANHO EM PX       TAMANHO CSS
    mouse.x = Math.floor(event.offsetX * (screen.cnv.width / screen.cnv.clientWidth))
    mouse.y = Math.floor(event.offsetY * (screen.cnv.height / screen.cnv.clientHeight))
   // console.log(mouse.x, mouse.y)
})
addEventListener("mousedown",(event) => {
    //console.log(event.buttons)
    mouse.button=event.buttons
})

//KEYS
export const keys= Array()
document.addEventListener("keydown", (event) => {
    if(!keys.includes(event.keyCode)){
        keys.push(event.keyCode)
    }
    //console.log("press-down"+keys)
})
document.addEventListener("keyup", (event) => {
    if(!keys.includes(keys.indexOf(event.keyCode))){
        keys.splice(keys.indexOf(event.keyCode), 1)
    }
    //console.log("press-up"+keys)
})
//TELA
const body = document.querySelector("body")
class Screen{
    constructor(x,y,w,h, wpx, hpx){
        //POSICAO E TAMANHO SCREEN
        this.x=x, this.y=y
        this.width = w, this.wpx = wpx
        this.height = h, this.hpx = hpx
    }
    create(id="null"){
        let screen = {
            cnv: null,
            ctx: null,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            renderWidth: this.wpx,
            renderHeight: this.hpx,
            draw(){
                //HTML OBJECT 
                this.cnv = document.createElement("canvas")
                this.cnv.id=id
                body.appendChild(this.cnv)
                this.ctx = this.cnv.getContext("2d")
                this.cnv.width=this.renderWidth
                this.cnv.height=this.renderHeight
            },
            update(){
                //TELA STYLE
                this.cnv.style.transform=`translate(${this.x}px, ${this.y}px)`
                //TAMANHO DA TELA  
                if(this.width == "auto"){
                    this.cnv.style.width=`${window.innerWidth}px`
                }else{
                    this.cnv.style.width=`${this.width}px`
                }
                if(this.height == "auto"){
                    this.cnv.style.height=`${window.innerHeight}px` 
                }else{
                    this.cnv.style.height=`${this.height}px`
                }
                //this.cnv.style.transform=`scale(${this.width}px, ${this.height}px)`
            }
        }
        screen.draw()
        return screen
    }
}
//                               X  Y  Wcss     Hcss   Wpx   Hpx
export const screen = new Screen(0, 0, "auto", "auto", 1524, 720).create("tela")