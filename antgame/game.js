const brightness = 30;
const DIRT_BROWN = {r: 180 + brightness, g: 140 + brightness, b: 60 + brightness};
const RED = {r: 256, g: 0, b: 0};

var dave;

function setup(){
  createCanvas(300,300);
  background(DIRT_BROWN.r, DIRT_BROWN.g, DIRT_BROWN.b);

  dave = new Ant(100, 100, RED);
  dave.xgoal = 100;
  dave.ygoal = 150;
}
function draw(){
  background(DIRT_BROWN.r, DIRT_BROWN.g, DIRT_BROWN.b);

  dave.draw();
  dave.tick();
  dave.moveToGoal();
}
function keyPressed(){
  dave.reactToKeyPress(keyCode);
}
