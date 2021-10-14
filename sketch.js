var bgimg;


function preload (){
  
  snow1= loadImage("snow1.jpg");
  snow2= loadImage("snow2.jpg");
  snow3= loadImage("snow3.jpg")

}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  
  background(bgimg);  
  drawSprites();
}

function keyPressed(){
  
  if  (keyCode=== 32 ){
    //space bar
    snow1.loadImage();
    bgimg= snow1;
  }  else if (keyCode===37){
    //left arrow;
    snow2.loadImage();
    bgimg= snow2;
  } else (keyCode===39);{
    //right arrow;
    snow3.loadImage();
    bgimg= snow3;
  }
  
}

