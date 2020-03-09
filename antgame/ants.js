/**
* In this game, the player controls a set of ants, 
* which gather food, attack enemy ant nests, and 
* build structures in their home to grow larger and
* stronger.
*/
class Ant {
  constructor(x=0, y=0, color){
    this.pos = createVector(x,y);
    this.speed = createVector(0,0);
    this.goal = createVector(undefined,undefined)
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
  * Move the ant towards a goal position
  */
  moveTo(goal){
    if(goal.equals(this.pos)){
      return;
    }
    
    let movement = goal.copy().sub(this.pos).limit(2);
    this.pos.add(movement);
  }
  /**
  * Move the ant to its own internal goal state.
  */
  moveToGoal(){
    this.moveTo(this.goal);
    
    //[DEBUGGING] Draw Goal Node
    fill(0,100,0);
    stroke(0,100,0);
    rect(this.goal.x, this.goal.y,2,2);
  }
  /**
  * Run this function every tick
  */
  tick(){
    this.pos.add(this.speed);
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
