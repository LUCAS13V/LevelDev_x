let body = document.querySelector("body")

class Alternative{
    constructor(objPai, objNorm, texto01=".", link="./imgs/loading.png"){
        this.objpai = objPai,this.objNorm = objNorm ,this.texto01 = texto01 ,this.link = link
    }
    construir(){
        //criando elementos
        var obj_pai = document.querySelector(`${this.objpai}`)
        var obj01 = document.createElement(`${this.objNorm}`)
        obj01.classList.add("cub")
        //criando imagen
        var obj_img = document.createElement("img")
        obj_img.classList.add("img_cub")
        obj_img.src = this.link
        //paragrafo
        var parag = document.createElement("p")
        //inserindo texto
        parag.innerHTML = `<p>${this.texto01}</p>`
        //crinado botoes
        var btn = document.createElement("button")
        //adicionando obj filho em obj pai
        obj_pai.appendChild(obj01)
        //adicionando imagen em obj 
        obj01.appendChild(obj_img)
        //adiconamdo paragrafo em obj
        obj01.appendChild(parag)
        //adicionado butao em obj
        obj01.appendChild(btn)
        btn.classList.add("btn_cub")
        btn.innerHTML="ESSE"
        this.obj_pai = obj_pai, this.obj01 = obj01
        this.obj_img = obj_img, this.parag = parag
        this.btn = btn 
        
    }
    
}

function loop(){
    let qst01 =new Alternative("main","div","teste de texto ")
    qst01.construir()
    console.log(qst01.obj01)
    //click btn
    qst01.btn.addEventListener("click", () => {
        let btn = qst01.btn 
        btn.style.fontSize = "35%"
        setTimeout(() => {btn.style.fontSize = "50%"}, 100)
        console.log('CLICK')
    })
    //console.log(btn)
}
console.log(`conectado á [${location.hostname}] em [${location.port}]`)
requestAnimationFrame(loop) 