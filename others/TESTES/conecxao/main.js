const url="https://economia.awesomeapi.com.br/USD-BRL/10?start_date=20200201&end_date=20200229"

let carregando = document.querySelector("#carregando")

async function get_all(){
    const response = await fetch(url)

    //console.log(response)
    const data = await response.json()
    console.log(data)
    carregando.classList.add("hide")
    
}
get_all()