let main = document.createElement("main")
let divpl = document.createElement("div")
divpl.classList.add("player")
main.appendChild(divpl)
document.body.appendChild(main)



function loop(){
    var key = 0
    window.addEventListener("keydown", (key) => {
        key = event.keyCode
        console.log(key)
    })  
    if(key == 87) {
        console.log(2)
    }console.log(key)
}

window.requestAnimationFrame(loop)