class Player{
  constructor(){
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    let x = this.x;
    let y = this.y
    let width = this.width;
    let height = this.height;
    
    fill(200, 100, 100);
    rect(x - width/2, y - height/2, width, height);
    fill(50, 255, 50);
    rect(x - width/2, y - height/2, 2, 2);
    fill(50, 50, 255);
    rect(x, y, 2, 2);
    
  }
}

const player = new Player();

function setup(){
  createCanvas(600, 600);
  
}


function draw(){
  background(255,255,255);
  player.draw();
}

function keyPressed(){
  let w = 87;
  let a = 65;
  let s = 83;
  let d = 68;
  
  console.info(keyCode);
  
  switch(keyCode){
    case w:
      console.info("W");
      player.y -= 5;
      break;
    case a:
      console.info("A");
      player.x -= 5;
      break;
    case s:
      console.info("S");
      player.y += 5;
      break;
    case d:
      console.info("D");
      player.x += 5;
      break;
  }
}