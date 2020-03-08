/**
* In this game, the player controls a set of ants, 
* which gather food, attack enemy ant nests, and 
* build structures in their home to grow larger and
* stronger.
*/
class Ant {
  constructor(x=0, y=0, color){
    //Ants have position
    this.pos = createVector(x,y);
    
    //Ants have a current speed
    this.speed = createVector(0,0);
    
    //Ants have goals
    this.goal = createVector(undefined,undefined)
    
    //Ants have colors
    this.color = color;

  }
  /**
  * Draws the ant on the p5.js canvas
  */
  draw(){
    fill(this.color)
    stroke(this.color)
    rect(this.pos.x, this.pos.y, 2, 2);
  }
  /**
  * Direct the ant towards a goal position
  */
  moveTo(goal){
    if(goal.x == this.pos.x && goal.y == this.pos.y){
      return;
    }
    const distanceToGoal = new Vector(goal.x - this.pos.x, goal.y - this.pos.y);
    if (distanceToGoal.cheap_length() < 2){
      var movementToGoal = distanceToGoal;
    }else{
      var movementToGoal = distanceToGoal.set_length(2);
    }
    movementToGoal.push(this.pos);
  }
  /**
  * Direct the ant to its own internal goal state.
  */
  moveToGoal(){
    if (this.goal.x == undefined || this.goal.y == undefined){
      return;
    }else{
      this.moveTo(this.goal);
      fill(0,100,0);
      stroke(0,100,0);
      rect(this.goal.x, this.goal.y,2,2);
    }
  }
  /**
  * Run this function every tick
  */
  tick(){
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }
  reactToKeyPress(keyCode){
    switch(keyCode){//w
      case 87://w -> up -> (-y)
        this.goal.y -= 100;
        break;
      case 65://a -> left -> (-x)
        this.goal.x -= 100;
        break;
      case 83://s -> down -> (+y)
        this.goal.y += 100;
        break;
      case 68://d -> right -> (+x)
        this.goal.x += 100;
        break;
    }
  }
}
