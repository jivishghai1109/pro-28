
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy,tree;
var slingshot;
var m1;
 
function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(800,600,1600,100);  
boy = new Boy(200,500,200,200);
tree = new Tree(1200,350,400,400);
m1 = new Mango(1200,200,400,1);
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background = "pink";
  ground.display();
  boy.display();
  tree.display();
  m1.display();
  drawSprites();
 
}



