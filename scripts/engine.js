class Color{
  constructor(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

class Vector {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  length(){
    return sqrt(abs(this.x * this.x + this.y * this.y));
  }
  cheap_length(){
    return abs(this.x) + abs(this.y);
  }
  normalize(){
    if (this.length() == 0){
      console.error("DIVIDE BY ZERO")
    }
    const length = this.length();
    this.x = this.x / length;
    this.y = this.y / length;
    return this;
  }
  multiply(factor){
    this.x = this.x * factor;
    this.y = this.y * factor;
    return this;
  }
  push(object){
    object.x += this.x;
    object.y += this.y;
  }
  pull(object){
    object.x -= this.x;
    object.y -= this.y;
  }
  set_length(length){
    this.normalize().multiply(length);
    return this;
  }
}
