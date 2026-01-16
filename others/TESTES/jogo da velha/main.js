
var objs = {}
for (let v=0; v < 9; v++){
    var main = document.querySelector("main#tela")
    var obj = document.createElement(`div`)
    obj.classList.add("quad")
    obj.id=`0${v+1}`
    //obj.classList.add
    main.appendChild(obj)
    obj.objs=["S","S"]
    
}

console.log(objs)  