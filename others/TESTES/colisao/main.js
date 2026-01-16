const cnv = document.querySelector("canvas")
const ctx = cnv.getContext("2d")

var up=87, down=83, left=65, right=68
var square_color="blue", square_size=45, square_x=100, square_y=100
var walk_up = walk_down = walk_left = walk_right = false
var volocidade=5

var square_x2=cnv.width/2-square_size
var square_y2=cnv.height/2-square_size


addEventListener("keydown", KeyDownRead, false)
function KeyDownRead(keys){
    //alert(keys.keyCode)
    //console.log(keys.keyCode)
    switch(keys.keyCode){
        case up:
            walk_up=true
            break
        case down:
            walk_down=true
            break
        case left:
            walk_left=true
            break
        case right:
            walk_right=true
            break
    }
}
addEventListener("keyup", KeyUpRead)
function KeyUpRead(keys){
    switch(keys.keyCode){
        case up:
            walk_up=false
            break
        case down:
            walk_down=false
            break
        case left:
            walk_left=false
            break
        case right:
            walk_right=false
    }
}


function move_square(){
    if(walk_up){
        square_y-=volocidade
    }if(walk_down){
        square_y+=volocidade
    }if(walk_left){
        square_x-=volocidade
    }if(walk_right){
        square_x+=volocidade
    }
}    
// Função para verificar a colisão entre dois elementos
let a = document.querySelector("canvas")
const a1 = a.getBoundingClientRect();
console.log(a1)
function paint(){
    ctx.clearRect(0,0, cnv.width, cnv.height)
    ctx.fillStyle=square_color
    ctx.fillRect(square_x, square_y, square_size, square_size)
    ctx.fillStyle="#000055"
    ctx.fillRect(square_x2, square_y2, square_size,square_size)
   
    
}
function update(){
    move_square()
    //colider()
}

function loop(){
    paint()
    update()
    requestAnimationFrame(loop, cnv)
    
}
loop()



function verificarColisao(elemento1, elemento2) {
    const retangulo1 = elemento1.getBoundingClientRect();
    const retangulo2 = elemento2.getBoundingClientRect();
  
    return (
      retangulo1.left < retangulo2.right &&
      retangulo1.right > retangulo2.left &&
      retangulo1.top < retangulo2.bottom &&
      retangulo1.bottom > retangulo2.top
    );
  }
  
  // Função para mover o objeto1 com as teclas de seta
  function moverObjeto(event) {
    const objeto1 = document.getElementById('objeto1');
    const tecla = event.key;
  
    let newLeft = parseInt(objeto1.style.left) || 0;
    let newTop = parseInt(objeto1.style.top) || 0;
  
    // Verificar a tecla pressionada e mover o objeto
    if (tecla === 'ArrowUp') {
      newTop -= 10;
    } else if (tecla === 'ArrowDown') {
      newTop += 10;
    } else if (tecla === 'ArrowLeft') {
      newLeft -= 10;
    } else if (tecla === 'ArrowRight') {
      newLeft += 10;
    }
  
    // Obter o objeto2
    const objeto2 = document.getElementById('objeto2');
  
    // Verificar se há colisão antes de atualizar as posições
    if (!verificarColisao(objeto1, objeto2)) {
      objeto1.style.left = newLeft + 'px';
      objeto1.style.top = newTop + 'px';
    }
  }
  
  // Adicionar o evento de teclado para mover o objeto1
  document.addEventListener('keydown', moverObjeto);
  
