let musica = new Audio("./menu/music/parabens.mp3")
musica.volume=0.5   
let btns = document.querySelectorAll("button")
let volocidade_anima = 3
let temp = 1
//PARA OS 3 BTN
for (let i=0; i< btns.length; i++){
    btns[i].style.top=temp*75+"px"
    //console.log(btns[i].style.top)
    temp++

    console.log(btns[i].style.left)
    //AN DE CMC
    btns[i].style.animation=`slide ${volocidade_anima}s`
    //AN DE MOUSE
    setTimeout(()=>{
        btns[i].addEventListener("mouseover", fun => {
            btns[i].style.animation=`hover ${volocidade_anima}s`
            btns[i].style.animation=""
            console.log("FEITO EM obj"+i)
        })
    },volocidade_anima*1000)

}

btns[0].addEventListener("click", fun => {
        open("./jogo_index.html", "_self")
})
btns[1].addEventListener("click", ()=>{alert("caLmo amigo isso aq e um jogo que fis com pouco tempo")})
btns[2].addEventListener("click", ()=>{window.open('', '_self', '').close()})    

let fundo = document.querySelector("div")
class Bolo{
    criar(tempx, duration, inverter=false){
        let div = document.createElement("div")
        div.style.left=`${tempx}px`
        div.classList.add("bolo")
        fundo.appendChild(div)
        console.log(tempx)
        if(inverter){
             div.style.animation=`falls_right ${duration}s infinite linear`
        }else{
            div.style.animation=`falls_left ${duration}s infinite linear`
        }

    }
}

let bl = new Bolo()
bl.criar(300, 2, true)
bl.criar(900, 3, true)
bl.criar(600, 4)
bl.criar(0, 3.5, true )

//console.log(div)

let nv = document.createElement("div")
nv.classList.add("nv")
fundo.appendChild(nv)
console.log(nv)