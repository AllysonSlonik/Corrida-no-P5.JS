class Carro
{

  constructor(cor, x, velocidade, faixa)
  {
    this.cor = cor  
    this.x = x
    this.velocidade = velocidade
    this.faixa = faixa
  }
  
  criar()
  {
    
    this.x += this.velocidade * frameCount 
  
    fill(this.cor)
    rect(this.x, this.faixa, 30,10)      
  }
  
}

var honda
var fiat
var ford
var toyota
var volks
var renault

var pos = 0.01

function setup() 
{
  createCanvas(900, 600);
  
  honda = new Carro("yellow", pos, random(0.05, 0.1), 50)
  
  fiat = new Carro("red", pos, random(0.05, 0.1), 100)
  
  ford = new Carro("blue", pos, random(0.05, 0.1), 150)
  
  toyota = new Carro("#4C4B47", pos, random(0.05, 0.1), 200)

  volks = new Carro("green", pos, random(0.05, 0.1), 250)
  
  renault = new Carro("orange", pos, random(0.01,0.1), 300)

}

function draw() 
{
    background(0)
    stroke("white")
    strokeWeight(2)
    line(710, 0, 710, 600)
  
    honda.criar()
    fiat.criar()
    ford.criar()
    toyota.criar()
    volks.criar()
    renault.criar()
    
    vencedor()
    timer()
  
}

function vencedor()
{
    if(fiat.x >= 710){
      background("red")
      fill("rgb(255,255,255)")
      textSize(40)
      text("FIAT VENCEU!", 200, 300)
      noLoop()
    }
    if(honda.x >= 710){
      background("#F3DD21")
      fill("rgb(255,255,255)")
      textSize(40)
      text("HONDA VENCEU!", 200, 300)
      noLoop()
    }
    if(ford.x >= 710){
      background("#2196F3")
      fill("rgb(255,255,255)")
      textSize(40)
      text("FORD VENCEU!", 200, 300)
      noLoop()
    }
  if(toyota.x >= 710){
      background("#4C4B47")
      fill("rgb(255,255,255)")
      textSize(40)
      text("TOYOTA VENCEU!", 200, 300)
      noLoop()
    }
  
  if(volks.x >= 710){
      background("#07FF32")
      fill("rgb(255,255,255)")
      textSize(40)
      text("VW VENCEU!", 200, 300)
      noLoop()
    }
  if(renault.x >= 710){
      background("orange")
      fill("rgb(255,255,255)")
      textSize(40)
      text("RENAULT VENCEU!", 200, 300)
      noLoop()
    }
}

function timer(){
  var segundos = millis() / 1000
  segundos = segundos.toFixed(2)
  textSize(20)
  
  fill("white")
  text("Tempo: "+segundos, 20, 20)
}

