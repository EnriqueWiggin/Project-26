class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, 12, options);
    this.radius = 12;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var radius = this.body.radius;
    push();
    translate(pos.x, pos.y);
    rotate(radius);
    circleMode(CENTER);
    fill("white");
    circle(0, 0, this.radius, this.height);
    pop();
  }
};


