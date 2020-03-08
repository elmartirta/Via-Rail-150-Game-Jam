/**
* In this game, the player controls a set of ants, 
* which gather food, attack enemy ant nests, and 
* build structures in their home to grow larger and
* stronger.
*/
class Ant {
  constructor(x=0, y=0, color){
    //Ants have position
    this.x = x;
    this.y = y;
    
    //Ants have a current speed
    this.xspeed = 0;
    this.yspeed = 0;
    
    //Ants have goals
    this.xgoal = undefined;
    this.ygoal = undefined;
    
    //Ants have colors
    this.color = color;

  }
  /**
  * Draws the ant on the p5.js canvas
  */
  draw(){
    fill(this.color.r, this.color.g, this.color.b)
    stroke(this.color.r, this.color.g, this.color.b)
    rect(this.x, this.y, 2, 2);
  }
  /**
  * Direct the ant towards a goal position
  */
  moveTo(goalx, goaly){
    if(goalx == this.x && goaly == this.y){
      return;
    }
    const distanceToGoal = new Vector(goalx - this.x, goaly - this.y);
    if (distanceToGoal.cheap_length() < 2){
      var movementToGoal = distanceToGoal;
    }else{
      var movementToGoal = distanceToGoal.set_length(2);
    }
    movementToGoal.push(this);
  }
  /**
  * Direct the ant to its own internal goal state.
  */
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
  /**
  * Run this function every tick
  */
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
