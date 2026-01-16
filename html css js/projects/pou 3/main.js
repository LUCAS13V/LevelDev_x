const cnv = document.querySelector("canvas");
const contexto = cnv.getContext("2d");

pou_img =new Image()
pou_img.src="./sprites/pou.png"

fundo_img =new Image()
fundo_img.src="./sprites/fundo.png"
const pou = {
    img_x: 0,
    img_y: 0,
    img_largura: 64*2,
    img_altura: 64*2,
    cnv_x: 0,
    cnv_y: 0,
    cnv_largura: 720,
    cnv_altura: 500,
    paint(){
        contexto.drawImage(pou_img, pou.img_x, pou.img_y, pou.img_largura, pou.img_altura, pou.cnv_x, pou.cnv_y, pou.cnv_largura, pou.cnv_altura)
    }
}
const fundo = {
    img_x: 0,
    img_y: 0,
    img_largura: 128*2,
    img_altura: 128*2,
    cnv_x: 0,
    cnv_y: 0,
    cnv_largura: 720,
    cnv_altura: 500,
    paint(){
        contexto.drawImage(fundo_img, fundo.img_x, fundo.img_y, fundo.img_largura, fundo.img_altura, fundo.cnv_x, fundo.cnv_y, fundo.cnv_largura, fundo.cnv_altura);
    }
}
function telaloop(){
    fundo.paint()
    pou.paint()
    requestAnimationFrame(telaloop);
}
telaloop()