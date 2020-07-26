class Box  {
    constructor(x, y, width, height){
      var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
    
    this.width = width;
    this.height = height;
    this.visibility=255;
    this.image = loadImage("box1.png");
    World.add(world, this.body);
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      
      if(this.body.speed < 3){
        push();
        var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);

      imageMode(CENTER);
      fill("orange")
      image( this.image,0, 0, this.width, this.height);
      
      pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.visibility = this.visibility - 7;
         tint(255,this.visibility);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
         pop();

       }

    if(this.visibility<0 && this.visibility>-105){

      score=score+2;
    }
     
      

      
     
      
    }
  };
  
