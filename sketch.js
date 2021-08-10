const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg ;
var ba;
function preload(){    
dATETIME()
}

function setup(){
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,30);
    platform = new Ground(180,450,360,350)
   
    box1=new Box(700,520);   
    box2=new Box(920,520);
    box3=new Box(580,520);
    box4=new Box(580,540);
    
    box5=new Glass(810,430,80,80)
    glass=new Glass(810,400,65,65)  
    glass1= new Glass(580,430,50,50)
     
    lo = new Log(810,490,300,PI/2)
    lo1 = new Log(810,420,300,PI/2)
    lo2 = new Log(760,390,150,PI+45)
    lo3 = new Log(860,390,150,PI-45)
    lo4 = new Log(580,430,300,PI/2)
    //log = new Log(150,420,150,PI/2)
    
    bird = new Bird(100,100)
    
    sling = new SlingShot(bird.body,{x:200, y:100})
  
    pi = new Pig (700,450)
    pi2 = new Pig (920,450)
    pi3 = new Pig (810,520)
    pi4 = new Pig (580,420)
  }

function draw(){
   if(ba) {
  background(ba);
   }
    Engine.update(engine);
    text(mouseX + ',' + mouseY, 30, 45);
    box1.display();
    box2.display();
    box3.display()
    box4.display()
    ground.display();
   lo.display()
    lo1.display()
    box5.display()
    glass.display()
   lo2.display()
   lo3.display()
   lo4.display()
   bird.display()
  
   platform.display()
   //log.display()
   glass1.display()
   sling.display() 
   pi3.display() 
   pi.display()
   pi2.display()
   pi4.display()
}

function mouseDragged(){
     Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   sling.fly()  
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(bird.body)
  }
}

async function dATETIME(){

var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

var js = await responce.json()

var dt = js.datetime
var cut = dt.slice(11,13)

console.log(cut)

if(cut>=06 && cut<17){
 ba=loadImage("sprites/bg.png")
}
else{
  ba=loadImage("sprites/bg2.jpg")
}

}