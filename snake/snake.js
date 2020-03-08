
class World{
  constructor(){
    this.width = 600/15;
    this.height = 600/15;
    var data = [];
  }

  generate(){
    this.data = [this.width];
    for (var i = 0; i < this.width; i += 1){
      this.data[i] = [this.height];
      for(var j = 0; j < this.height; j += 1){
        this.data[i][j] = 0;
      }
    }
  }

  draw(){
    for(var i = 0; i < this.width; i += 1){
      for(var j = 0; j < this.height; j += 1){
        fill(50, 50, 50);
        rect(i * 15, j * 15, 13, 13);
      }
    }
  }
}
class Segment {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}
class Snake {
  constructor(){
    this.x = 4;
    this.y = 5;
    this.direction = "EAST";
    this.segments = [];
    this.tailLength = 40;
    this.isLiving = true;
  }
  move(){
    if(!this.isLiving){
      return;
    }

    if (this.collidesWithWall() || this.collidesWithSelf()){
      this.die();
    }

    if(this.isLiving){
      this.segments.push(this.headToSegment());
      if (this.segments.length > snake.tailLength)
        this.cutTail(1);

      switch(snake.direction){
        case "NORTH":
          snake.y -= 1;
          break;
        case "SOUTH":
          snake.y += 1;
          break;
        case "WEST":
          snake.x -=1;
          break;
        case "EAST":
          snake.x += 1;
          break;
        default:
          break;
      }
    }else{//if snake is dead
      return;
    }
  }
  reactToKeyPress(keyCode){
    if(snake.isLiving){
      switch(keyCode){//w
        case 87://w
          if (snake.direction != "SOUTH")
            snake.direction = "NORTH";
          break;
        case 65://a
          if (snake.direction != "EAST")
            snake.direction = "WEST";
          break;
        case 83://s
          if (snake.direction != "NORTH")
            snake.direction = "SOUTH";
          break;
        case 68://d
          if (snake.direction != "WEST")
            snake.direction = "EAST";
          break;
      }
    }else{//if snake is dead
      return;
    }
  }
  headToSegment(){
    return new Segment(this.x, this.y)
  }
  cutTail(amount){
    this.segments = subset(this.segments, amount, this.segments.length)
  }
  draw(){
    this.drawTail();
    this.drawHead();
  }
  drawHead(){
    fill(256,130,130)
    rect(this.x * 15, this.y * 15, 13, 13)
  }
  drawTail(){
    if (this.isLiving){
      fill(130, 130, 256);
    }else{
      fill(200, 50, 50);
    }
    for (const segment of this.segments){
      rect(segment.x*15, segment.y*15, 13, 13)
    }
  }
  collidesWith(other){
    return (other.x == this.x && other.y == this.y)
  }
  collidesWithWall(){
    return (this.x < 0 || this.y < 0 || this.x > 600/15 - 1 || this.y > 600/15 - 1)
  }
  collidesWithSelf(){
    for(const segment of this.segments){
      if (this.collidesWith(segment)){
        return true;
      }
    }
    return false;
  }
  die(){
    snake.isLiving = false;
  }

}
class Berry{
  constructor(){
    this.x = 10;
    this.y = 10;
    this.color = new Color(130, 256, 130);
  }
  draw(){
    fill(this.color.r,this.color.g,this.color.b)
    rect(this.x * 15, this.y * 15, 13, 13)
  }
  collidesWith(other){
    return (other.x == this.x && other.y == this.y)
  }
}
