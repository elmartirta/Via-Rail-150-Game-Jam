
class Ant {
  constructor(x=0, y=0, color){
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.xgoal = undefined;
    this.ygoal = undefined;
    this.color = color;

  }
  draw(){
    fill(this.color.r, this.color.g, this.color.b)
    stroke(this.color.r, this.color.g, this.color.b)
    rect(this.x, this.y, 2, 2);
  }
  moveTo(xloc, yloc){
    if(xloc == this.x && yloc == this.y){
      return;
    }
    const distanceToGoal = new Vector(xloc - this.x, yloc - this.y);
    if (distanceToGoal.cheap_length() < 2){
      var movementToGoal = distanceToGoal;
    }else{
      var movementToGoal = distanceToGoal.set_length(2);
    }
    movementToGoal.push(this);
  }
  moveToGoal(){
    if (this.xgoal == undefined || this.ygoal == undefined){
      return;
    }else{
      this.moveTo(this.xgoal, this.ygoal);
      fill(0,100,0);
      stroke(0,100,0);
      rect(this.xgoal, this.ygoal,2,2);
    }
  }
  tick(){
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  reactToKeyPress(keyCode){
    switch(keyCode){//w
      case 87://w
        this.ygoal -= 100;
        break;
      case 65://a
        this.xgoal -= 100;
        break;
      case 83://s
        this.ygoal += 100;
        break;
      case 68://d
        this.xgoal += 100;
        break;
    }
  }
}
