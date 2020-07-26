 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

var engine,world;
var score=0;
var backgroundImg;
var lowground,upground;
var  hexagon,sling;
var cup1,cup2,cup3,cup4,cup5,cup6,cup7,cup8,cup9,cup10,cup11,cup12;
var cup13,cup14,cup15,cup16,cup17,cup18,cup19,cup20,cup21,cup22,cup23,cup24,cup25;

function preload(){
  getBackgroundImage();
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  lowground = new Ground(300,300,150,10);
  upground=new Ground(610,180,120,10)
  hexagon= new Polygon(100,200,50);

  sling=new SlingShot(hexagon.polygon,{x:100,y:200}) ;

  cup1=new Box(240,280,25,35);
  cup2=new Box(270,280,25,35);
  cup3=new Box(300,280,25,35);
  cup4=new Box(330,280,25,35);
  cup5=new Box(360,280,25,35);
  //second of lowground
  cup6=new Box(253,244,25,35);
  cup7=new Box(283,244,25,35);
  cup8=new Box(313,244,25,35);
  cup9=new Box(343,244,25,35);
  //third of lowground
  cup10= new Box(267,208,25,35);
  cup11= new Box(298,208,25,35);
  cup12= new Box(330,208,25,35);
  //fourth of lowground
  cup13= new Box(281,173,25,35);
  cup14= new Box(315,173,25,35);
  //fifth of lowground
  cup15= new Box(298,137,25,35);
  //first of upground
  cup16= new Box(565,160,25,35);
  cup17= new Box(595,160,25,35);
  cup18= new Box(625,160,25,35);
  cup19= new Box(655,160,25,35);
  //second of upground
  cup20= new Box(580,125,25,35);
  cup21= new Box(610,125,25,35);
  cup22= new Box(640,125,25,35);
  //third of upground
  cup23= new Box(590,90,25,35);
  cup24= new Box(623,90,25,35);
  //fourth of upground
  cup25= new Box(603,55,25,35);

}

function draw() {
  if(backgroundImg){ 
    background(backgroundImg);
   }
   noStroke();
    textSize(35);
    fill("red");
    text("score : "+ score,400,50);
    
  Engine.update(engine);
  lowground.display();
  upground.display();
  hexagon.display();
  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();
  cup11.display();
  cup12.display();
  cup13.display();
  cup14.display();
  cup15.display();
  cup16.display();
  cup17.display();
  cup18.display();
  cup19.display();
  cup20.display();
  cup21.display();
  cup22.display();
  cup23.display();
  cup24.display();
  cup25.display();

  // cup1.score();
  // cup2.score();
  // cup3.score();
  // cup4.score();
  // cup5.score();
  // cup6.score();
  // cup7.score();
  // cup8.score();
  // cup9.score();
  // cup10.score();
  // cup11.score();
  // cup12.score();
  // cup13.score();
  // cup14.score();
  // cup15.score();
  // cup16.score();
  // cup17.score();
  // cup18.score();
  // cup19.score();
  // cup20.score();
  // cup21.score();
  // cup22.score();
  // cup23.score();
  // cup24.score();
  // cup25.score();
 
  //upground.display();
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

 function keyPressed(){
   if(keyCode===32){
     sling.attach(hexagon.polygon);
   }
 }


 async function getBackgroundImage(){
   //var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var response= await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
   var responseJSON=await response.json();
    var dt=responseJSON.datetime;
    var hr=dt.slice(11,13);
    var bg;
    if(hr>=6 && hr<=19){
        bg="sky1200.jpg";
    }
    else{
        bg="nightforhwc32.jpg";
    }
    backgroundImg = loadImage(bg);
 }