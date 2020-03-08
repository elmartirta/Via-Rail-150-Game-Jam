class Entity{
  constructor(x, y){
      this.x = x;
      this.y = y;
      this.xspeed = 0;
      this.yspeed = 0;
  }

  bounce_away(other){
    const repulsiveForce = this.vector_from(other).set_length(2);
    repulsiveForce.push(this);
  }
  chase(other){
    const attractiveForce = this.vector_to(other).set_length(1);
    attractiveForce.push(this);
  }
  run_from(other){
    const attractiveForce = this.vector_from(other).set_length(1);
    attractiveForce.pull(this);
  }
  vector_to(other){
    //this ===> other
    return new Vector(other.x - this.x, other.y - this.y);
  }
  vector_from(other){
    //this <=== other
    return new Vector(this.x - other.x, this.y - other.y);
  }
}

class Character extends Entity{
  constructor(x, y, width=64, height=64){
    super(x, y);
    this.width = width;
    this.height = height;
    this.color = new Color(40, 40, 200);
  }

  draw(sprite=undefined){
    if(sprite != undefined){
      image(sprite, this.x, this.y);
      rect(this.x, this.y, 2, 2);
    }else{
      fill(this.color.r, this.color.g, this.color.b)
      rect(this.x - 20, this.y - 50, 40, 100);

      fill(200, 40, 40)
      rect(this.x, this.y, 2, 2);
    }
  }
  collides_with(other){
    const xseperation = this.x - other.x;
    const yseperation = this.y - other.y;
    if(
           (abs(xseperation) < (this.width  / 2 + other.width  / 2))
        && (abs(yseperation) < (this.height / 2 + other.height / 2))
      )
      return true;
    return false;
  }
}
