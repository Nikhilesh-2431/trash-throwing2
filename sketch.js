
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;

var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,180,20);
	box1 = new Dustbin(1050,440,200,20);
	box2 = new Dustbin(950,400,20,100);
	box3 = new Dustbin(1150,400,20,100);

	ground1 = new Ground(500,450,1400,20);

 
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  keypressed();
  


  drawSprites();
 
}

function keypressed(){

  if (keyDown(UP_ARROW)){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  }
}

