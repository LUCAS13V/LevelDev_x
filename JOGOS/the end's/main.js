
let arq_cs
fetch("./assets/arq.json").then((res01) => {
    res01.json().then( async (txt) => {
        arq_cs = await txt
        
    })
})

console.log(arq_cs)