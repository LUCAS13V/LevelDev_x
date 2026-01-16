
console.log()
const url_01 = "https://teste-js-api-default-rtdb.firebaseio.com/.json"
console.log(navigator)
//pegando dados do usr

function send(){
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
   //console.log(name, email, password)
    const info = {
        name: name.value,
        email: email.value,
        password: password.value,
        device: navigator.userAgent,
    }
    console.log(info)
    let inputs = [name, email, password]
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            console.log("vazio")
            console.log(inputs[i])
            inputs[i].style.background="rgba(255,0,0,0.5)"
        }else{
            inputs[i].style.background="slategray"
        }
    }
    fetch(url_01, {
        method: "post",
        body: JSON.stringify(info),
        headers: {"Content-Type":"aplication/json"},
    }).then((res) => console.log(res.json()))
}


fetch(url_01).then((response) =>{
    //RESPONSE
    console.log(response)
    response.json().then((data) => {
        //infos
        console.log(data)
    })

})
