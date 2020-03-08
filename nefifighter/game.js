
const speed = 3;
var nefi = new Player(100, 100);

var zombies = [
  new Zombie(100, 200),
  new Zombie(100, 200),
  new Zombie(120, 200),
  new Zombie(120, 200),
  new Zombie(120, 200),
  new Zombie(120, 210),
  new Zombie(120, 210),
  new Zombie(120, 210),
  new Zombie(120, 210),
  new Zombie(120, 210),
  new Zombie(120, 212),
  new Zombie(120, 212),
  new Zombie(120, 212),
  new Zombie(120, 212),
  new Zombie(120, 212),
  new Zombie(120, 212),
  new Zombie(100, 200),
];

for (index in zombies){
  zombies[index].color = new Color(0, 60, 0);
}
var zombieImage;
var nefiImage;
function setup(){
  createCanvas(1200,600);
  zombieImage = loadImage("./images/zombie.png");
  nefiImage = loadImage("./images/Nefi_Run_0.png");
}

function draw(){
  background(240,240,240);

  nefi.draw(nefiImage);

  for (index in zombies){
    zombies[index].draw(zombieImage);
  }


  //Reset speedd
  nefi.yspeed = 0;
  nefi.xspeed = 0;

  //read inputs
  if (keyIsDown(87))
    nefi.yspeed = -speed;
  if (keyIsDown(65))
    nefi.xspeed = -speed;
  if (keyIsDown(83))
    nefi.yspeed = speed;
  if (keyIsDown(68))
    nefi.xspeed = speed;
  if (keyIsDown(32)){//spacebar
  }


  //update player position from player speed
  nefi.x += nefi.xspeed;
  nefi.y += nefi.yspeed;


  //zombie code
  for (index in zombies){
    const zombie = zombies[index];
    zombie.chase(nefi);
    //nefi collision
    if(zombie.collides_with(nefi)){
      zombie.bounce_away(nefi);
      nefi.bounce_away(zombie)
    }
    //other zombie collision
    for(otherindex in zombies){
      other = zombies[otherindex];
      if(zombie.collides_with(other)){
        if(index != otherindex)
          zombie.bounce_away(other)
      }
    }
  }
}
function keyPressed(){
  if (keyCode == 32){//spacebar
    for (index in zombies){
      const zombie = zombies[index]
      const pushForce = zombie.vector_from(nefi).normalize().multiply(100);
      pushForce.push(zombie);
      console.log("SPACEBAR PUSH");
    }
  }
}
