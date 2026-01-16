const url2 = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

const url1 = "https://jsonplaceholder.typicode.com/posts"

const lerelemento = document.querySelector("#load")
const lercont = document.querySelector("#post-cont")

async function getall(){
    let response = await fetch(url2)
    response = response.json()
    console.log(response)
    console.log(response.Object)
}
getall()