const url = "http://127.0.0.1:3010"

async function  get(url) {
    const response = await fetch(url)
    console.log(JSON.stringify(response))
}

async function post(url, data){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: data,
    })
}
get(url)
