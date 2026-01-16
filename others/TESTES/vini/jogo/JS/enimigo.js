//CLASS ENIMIGO
let enimigo_list = []
let fall = true
let temp =0
class Enimigo{
    set criar(div_caixa=0){
        this.div_caixa = div_caixa
        let enimigo = document.createElement("div")
        this.enimigo = enimigo
        enimigo.classList.add("enimigo")
        enimigo.id=div_caixa
        caixa_base[div_caixa].appendChild(enimigo)

    }get objs(){
        enimigo_list[this.div_caixa]=(this.enimigo)
        return enimigo_list
    }
    
    walk(num){
        function loop(){
            enimigo.objs[num].style.top=`${temp++}px`

            requestAnimationFrame(loop)
        }
        loop()
        
    }
}
//CRIANDO ENIMIGO
let enimigo = new Enimigo(0,0)
//COLOCANDO ENIMIGO NA TELA
for (let i=0; i<caixa_base.length; i++){
    if(debug){console.log(`enimigo ${i}/${caixa_base.length-1} criado`)}
    enimigo.criar=i
    enimigo.objs
}
for (let x=0; x < enimigo.objs.length; x++){
    console.log(enimigo.objs[x])
    enimigo.objs[x].innerText=x
    //enimigo.walk(x)
}
if(debug){console.log("ENIMIGOS CRIADOS"),console.log(enimigo.objs)}