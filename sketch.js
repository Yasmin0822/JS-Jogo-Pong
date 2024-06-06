// movimento da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

// velocidade da bolinha
let velxBolinha = 6
let velyBolinha = 6

// variaveis raquete

let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90
  
let colidiu = false

// variaveis oponente

let xRaqueteOp = 585
let yRaqueteOp = 150
let velyOp;

// placar jogo

let meuspontos = 0
let pontosOp = 0

// Sons

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrabolinha()
  movimentabolinha()
  verificacolissao()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOp, yRaqueteOp)
  movimentaMinhaRaquete()
  verificaColisaoraquete(xRaquete, yRaquete)
  verificaColisaoraquete(xRaqueteOp, yRaqueteOp)
  movimentaRaqueteOp()
  placar()
  marcaPonto()
}

function mostrabolinha(){
    circle(xBolinha,yBolinha,diametro)

}

function movimentabolinha(){
  xBolinha += velxBolinha
  yBolinha += velyBolinha
}

function verificacolissao(){
  if (xBolinha + raio > width ||
     xBolinha - raio <0){
    velxBolinha *= -1
  }
  
 if (yBolinha + raio > height ||
     yBolinha - raio < 0){
   velyBolinha *= -1
 }
}

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura)
}
 
function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoraquete(x,y){
colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu){
    velxBolinha *= -1
    raquetada.play()
  }
}

function movimentaRaqueteOp (){
  velyOp = yBolinha - yRaqueteOp - raqueteComprimento / 2 - 30
  yRaqueteOp += velyOp
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(19)
  fill(color(255, 140, 0))
  rect(150,10 ,40,20)
  fill(225)
  text(meuspontos, 170,26)
  fill(color(255, 140, 0))
  rect(450, 10,40, 20)
  fill(225)
  text(pontosOp, 470, 26)
}
 function marcaPonto(){
   if (xBolinha > 590){
     meuspontos += 1
     ponto.play()
   }
   if (xBolinha < 10){
     pontosOp += 1
     ponto.play()
   }
 }



