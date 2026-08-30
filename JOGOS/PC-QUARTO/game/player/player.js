var object_player = document.createElement("div")
//OBEJETO PLAYER
const player = {
    //valores inicias
    x: "",largura: "",
    y: "",altura: "",
    //outras variveis
    speed: 5,
    move: true, 
    criar(x , y, larg, altu){
        //definido valores inicias
        this.x = x, this.largura = larg
        this.y = y, this.altura = altu
        object_tela.appendChild(object_player).id="player"
    },
    update(){
        //atalizando css
        css_update(this.x, this.y, this.largura, this.altura, object_player)
        if(this.move){
            //DIREITA
            if(key_player_move==68){
                //se pl chegar no limite de tela no lado direito ent
                if((this.x+this.largura) >= (tela.largura)-(object_tela.clientLeft+this.speed)){
                    //ent colocar pl no limite
                    this.x=((tela.largura-this.largura))
                    key_player_move=65
                }else{
                    //se nao estiver no limite ent
                    this.x+=this.speed
                }
            }
            //ESQUERDA  
            if(key_player_move==65){
                //if provisorio c x menor que, largura de borda?
                if(this.x <= (object_tela.clientLeft)){
                    key_player_move=68
                    this.x=-object_tela.clientLeft
                }else{
                    this.x-=this.speed
                    
                }
            }
        }
        if(key_player_move==68){
            object_player.style.transform=" scaleX(1)"
        }if(key_player_move==65){
            object_player.style.transform=" scaleX(-1)"
        }
    }
}