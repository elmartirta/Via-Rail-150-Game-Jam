var dirt_brown;
var red;

var dave;

function setup(){
  //Set up colors
  dirt_brown = color(210, 190, 90);
  red = color(256, 0, 0);
  
  //Initialize Canvas
  createCanvas(300,300);
  background(dirt_brown);

  //Initialize Dave the Ant
  dave = new Ant(100, 100, red);
  dave.goal = createVector(100, 150)
}

function draw(){
  //Redraw background
  background(dirt_brown);
  
  //Draw Dave the Ant
  dave.draw();
  dave.tick();
  dave.moveToGoal();
}

function keyPressed(){
  dave.reactToKeyPress(keyCode);
}
