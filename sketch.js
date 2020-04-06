var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var x;

function setup() {
  createCanvas(1300,800);

  mercury = createSprite(250,400,10,10);
  mercury.shapeColor = "gray";
  
  venus = createSprite(350,400,50,50);
  venus.shapeColor = "#ff5050";

  earth = createSprite(450,400,50,50);
  earth.shapeColor = "blue";

  mars = createSprite(550,400,20,20);
  mars.shapeColor = "red";

  jupiter = createSprite(700,400,100,100);
  jupiter.shapeColor = "orange";

  saturn = createSprite(900,400,85,85);
  saturn.shapeColor = "#ffcc66";

  uranus = createSprite(1100,400,75,75);
  uranus.shapeColor = "#4dd2ff";

  neptune = createSprite(1300,400,75,75);
  neptune.shapeColor = "#0066ff";

}

function draw() {
  background(0,0,0); 

  sun = createSprite(100,400,frameCount,frameCount);
  sun.shapeColor = "yellow";
  
  drawSprites();


}