


// create the UI
const input_text = {
    obj:document.createElement("input"),
    add(){
        this.obj.id="input_message"
        document.body.appendChild(this.obj)
    },
    upgrade(){}
}
input_text.add()




const massage = {
    user_name: "lk",
    text: "oii",
    hour: "10:30"
}
let num = 0
class new_masssage{
    constructor(){

    }
    recive(){
        let obj = document.createElement("div")
        obj.id="message"
        num++
        obj.innerText="ola lucas allan"+num
        document.body.appendChild(obj)
    }
}
new new_masssage(massage).recive()
new new_masssage(massage).recive()
window.addEventListener("keydown", (event) => {

    //console.log(event.keyCode)
    if(event.keyCode==13){

    }


})

