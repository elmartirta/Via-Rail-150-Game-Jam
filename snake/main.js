const world = new World();
const snake = new Snake();
const berry = new Berry();

function setup(){
  createCanvas(600, 600);
  world.generate();

}

function draw(){
  background(0,0,0);

  if(snake.collidesWith(berry)){
    berry.x = floor(random() * 30 + 5);
    berry.y = floor(random() * 30 + 5);
    snake.tailLength += 10;
  }

  //Render
  world.draw();
  snake.draw();
  snake.move();
  berry.draw();

}

function keyPressed(){
  snake.reactToKeyPress(keyCode);
  if (keyCode == 32 && !snake.isLiving){
    snake.tailLength = 10;
    snake.segments = [];
    snake.direction = "EAST";
    snake.x = 4;
    snake.y = 5;
    snake.isLiving = true;

    berry.x = 10;
    berry.y = 10;
  }
}
