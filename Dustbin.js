class Dustbin {
    constructor(x, y) {
        var options;
        
        this.body = Bodies.rectangle(x, y, 200, 20, options);
        this.width = 200;
        this.height = 20;
        
        World.add(world, this.body);
      }
      display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
    
