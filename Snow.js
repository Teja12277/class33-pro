class Snowing {
    constructor(x, y) {
        var options = {
            isStatic: false
        }
        this.r = 10

        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp")
        World.add(world, this.body)
        
     }
     display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        noStroke();
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
     }
}

