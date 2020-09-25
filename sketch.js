function setup() {
  createCanvas(800,400);
  fixRec1 = createSprite(400, 200, 50, 50);
  movRec2 = createSprite(100,200,30,50);

  movRec2.velocityX = 2;
  fixRec1.velocityX = -2;
}

function draw() {
  background(255,255,255);
  
  if(movRec2.x-fixRec1.x<=movRec2.width/2+fixRec1.width/2&&)
  drawSprites();
  
}