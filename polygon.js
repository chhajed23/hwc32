class Polygon {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        // this.width = width;
        // this.height = height;
        //this.poly=polygon;
      this.polygon=Bodies.circle(50,200,20,options);
      this.image = loadImage("polygon.png");
      World.add(world,this.polygon);

      
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var angle = this.polygon.angle;
      push();
      translate(0,0);
      rotate(angle);
      imageMode(CENTER);
      //fill("yellow")
      image(this.image,this.polygon.position.x,this.polygon.position.y,40,40)
      pop();

      
      
    }
  }



  