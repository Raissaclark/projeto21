
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var parede1
var parede2
var solo
var engine,world
function preload()
{
	
}

function setup() {
createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
var ball_Options={
restitution:1,
density:1,

}
var solo_options={
isStatic:true	

}



//Create the Bodies Here.
ball=Bodies.circle(220,650,30,ball_Options);
World.add(world,ball)
solo=Bodies.rectangle(400,height-10,width,5,solo_options)
World.add(world,solo)	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    drawSprites();
 ellipse(ball.position.x,ball.position.y,30)
 rect(solo.position.x,solo.position.y,width,5)
}



