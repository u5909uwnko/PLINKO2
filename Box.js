class Block{
    constructor(x, y, width, height){
  
      var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':1.0
    }
  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
  this.Visibility = 255
      World.add(world, this.body);
    }
  
    display(){
      var pos = this.body.position;
  if(this.body.speed<8){
    push();
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
  pop();
  }
  else{
    push();
    World.remove(world,this.body)
    this.Visibility = this.Visibility - 0.5
    tint(255,this.visibility)
    pop();
  }
    }
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
  }
  }
  }