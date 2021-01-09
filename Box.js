class Box {
     constructor(x,y,width,height) {
          //properties of the object
          //use the keyword 'this' to refer to the property of the object of this class

          var options = {
               restitution: 0.8
          }

          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
     }

     display() {
          var pos = this.body.position;
          var angle = this.body.angle;
          push ();
          translate (pos.x,pos.y);
          rotate (angle);
          fill(100,120,130);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop ();
     }
}