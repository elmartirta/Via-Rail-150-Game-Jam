var dirt_brown;
var red;

var dave;

function setup(){
  dirt_brown = color(210, 190, 90);
  red = color(256, 0, 0);
  
  createCanvas(300,300);
  background(dirt_brown);

  dave = new Ant(100, 100, red);
  dave.goal = createVector(100, 150)
}

function draw(){
  background(dirt_brown);

  dave.draw();
  dave.tick();
  dave.moveToGoal();
}

function keyPressed(){
  dave.reactToKeyPress(keyCode);
}
