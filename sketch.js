var fixedRect, movingRect;

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixedRect = createSprite( 300, 200, 120, 80 );
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(100, 100, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  text ( "Distance = " + (movingRect.x - fixedRect.x) , 50, 50 );

  if ( (movingRect.x - fixedRect.x) <= (fixedRect.width/2 + movingRect.width/2) 
  &&  (fixedRect.x - movingRect.x) <= (fixedRect.width/2 + movingRect.width/2) ){
    
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else { 
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}