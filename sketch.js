var concert
var zayn, zaynImage
var hoop
var score = 0
function preload(){
  concertImage = loadImage("images/concertBackground2.JPG")
  hoop = loadImage("images/hoop.png")
 zaynImage = loadImage("images/zayn.png")
 mic
}


function setup(){
    createCanvas(displayWidth,displayHeight)
    
    concert = createSprite (780,400,200,300)
  concert.addImage(concertImage)
 concert.scale = 5.2
 concert.velocityX = -4
  
    zayn = createSprite(50,350,80,70)
  zayn.addImage(zaynImage)
  zayn.scale = 0.25

  basketballHoop = createSprite(320,220,30,30)
  basketballHoop.visible = false

  barrier = createSprite(320,340,10,20)
  barrier.debug = false
  barrier.visible = false

  rightBarrier = createSprite (400,260,10,60)
leftBarrier = createSprite (250,260,10,60)
  
zayn.debug = true
  zayn.setCollider("circle",0,-50,70)

  leftBarrier.visible = false
  rightBarrier.visible = false


}

function draw(){
  background("black")

  zayn.velocityY = zayn.velocityY + 0.1
  
 if(keyDown("space")&& keyDown(RIGHT_ARROW)){
      zayn.velocityY = -3
      zayn.velocityX = 1
    }

  if(keyDown("space")&& keyDown(LEFT_ARROW)){
        zayn.velocityY = -3
       zayn.velocityX = -1
  }
   if(concert.x<0){
   concert.x = 700
   }
   if(zayn.isTouching(basketballHoop)){
    score = score + 1
   }
   if(zayn.isTouching(barrier)){
     zayn.y = 320
   }
   
zayn.bounceOff(rightBarrier)
zayn.bounceOff(leftBarrier)
    drawSprites();
    image(hoop,230,190,180,100)
    textSize(70)
    text("score:"+score, 20,60)
}

  