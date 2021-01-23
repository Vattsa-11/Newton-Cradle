
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	beam = new Beam(400,200,500,80);
	ball1 = new Ball(800,550);
	ball2 = new Ball(560,550);
	wire1 = new Wire(ball1.body,{x:620,y:200});
	wire2 = new Wire(ball2.body,{x:560,y:200});
	ball3 = new Ball(500,550);
	wire3 = new Wire(ball3.body,{x:500,y:200});
	ball4 = new Ball(440,550);
	wire4 = new Wire(ball4.body,{x:440,y:200});
	ball5 = new Ball(380,550);
	wire5 = new Wire(ball5.body,{x:380,y:200});
	ball6 = new Ball(320,550);
	wire6 = new Wire(ball6.body,{x:320,y:200});
	ball7 = new Ball(260,550);
	wire7 = new Wire(ball7.body,{x:260,y:200});
	ball8 = new Ball(200,550);
	wire8 = new Wire(ball8.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  //World.update(engine);
  
  beam.display();
  ball1.display();
  wire1.display();
  ball2.display();
  wire2.display();
  ball3.display();
  wire3.display();
  ball4.display();
  wire4.display();
  ball5.display();
  wire5.display();
  ball6.display();
  wire6.display();
  ball7.display();
  wire7.display();
  ball8.display();
  wire8.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY}); 
} 

