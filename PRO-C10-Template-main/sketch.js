var sea1,sea2,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,400);
  background("blue");

  // Moving background
  sea1=createSprite(400,200);
  sea1.addImage(seaImg);
  sea1.velocityX = -5;
  sea1.scale=0.3;

  sea2=createSprite(1600,200);
  sea2.addImage(seaImg);
  sea2.velocityX = -5;
  sea2.scale=0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  //uncomment code to reset the background
  if(sea1.x < -650){
    sea1.x = 1600;
  }
  if(sea2.x < -650){
    sea2.x = 1600;
  }

  console.log(sea1.width);
  drawSprites();
}