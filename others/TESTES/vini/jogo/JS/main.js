// 0                               ----INICIO E DECLARACAO DE VARIVEIS----                
let debug = false
let cont_caixa=8
//CRIANDO DE DIVISAO/CAIXA 
for(let i=0; i < cont_caixa ; cont_caixa--){
    let cx = document.body.appendChild(document.createElement("div"))
    cx.classList.add('caixa') 
    cx.id=8-cont_caixa
}
let caixa_base = document.querySelectorAll("div.caixa")
if(debug){console.log(caixa_base)}
//LIMIRTADOR DE AREA X PARA O PLAYER
function maxbox(){
    if(cont_caixa < 0  || cont_caixa > caixa_base.length-1){
        if(cont_caixa >= caixa_base.length){
            cont_caixa = caixa_base.length-1
        }else{
            cont_caixa = 0
        }
    }else{caixa_base[cont_caixa].appendChild(player)}
    cont_caixa.length
}
