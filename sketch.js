var ground;
var catcher1,catcher2,catcher3;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.2
	ground = new Ground(600,height,1200,40)
	catcher1 = new Catcher(800,690,200,20)
	catcher2 = new Catcher(890,600,20,150)
	catcher3 = new Catcher(710,600,20,150)
	paper = new Paper(100,100,50,50)
	
}
function draw() {
  background("white");
  Engine.update(engine);
  paper.display();
  ground.display(); 
  catcher1.display();
  catcher2.display();
  catcher3.display();
  

}
function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115})

}
}