var fixedrect,morect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 300, 50, 50);
  fixedrect.shapeColor="red"
  fixedrect.velocityY=3
  morect=createSprite(100, 100, 70, 30);
  morect.shapeColor="red"
  morect.velocityY=-3
}
function draw() {
  background(0,0,100);  
  morect.x=World.mouseX
 morect.y=World.mouseY
  if(fixedrect.x-morect.x<fixedrect.width/2+morect.width/2&&
    morect.x-fixedrect.x<fixedrect.width/2+morect.width/2){
      morect.velocityX=morect.velocityX*(-1)
      fixedrect.velocityX=fixedrect.velocityX*(-1)

    //fixedrect.shapeColor="yellow"
    //morect.shapeColor="yellow"
  }
if(fixedrect.y-morect.y<fixedrect.height/2+morect.height/2&&
morect.y-fixedrect.y<fixedrect.height/2+morect.height/2){
  morect.velocityY=morect.velocityY*(-1)
  fixedrect.velocityY=fixedrect.velocityY*(-1)
}

  drawSprites();
}