
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightBody;
var leftBody;
var bottomBody;
var ground;
var paperBall;

var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	rightSideBin=createSprite(250,610,20,100);
	rightSideBin.shapeColor=("white");

	rightBody=Bodies.rectangle(250,610,20,100, {isStatic:true})	
	World.add(world, rightBody)
	conmouseleave.log(rightBody);

	leftSideBin=createSprite(450,610,20,100);
	leftSideBin.shapeColor=("white");

	leftBody=Bodies.rectangle(450,610,20,100, {isStatic:true})
	World.add(worlds, leftBody)
	conmouseleave.log(leftBody);

	bottomBin=createSprite(350,650,200,20);
	bottomBin.shapeColor=("white");

	bottomBody=Bodies.rectangle(350,650,200,20, {isStatic:true})
	World.add(worlds, bottomBody)
	conmouseleave.log(bottomBody);

	ground = Bodies.rectangle(width/2, 655, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 paperBall = Bodies.circle(600,650,12);
	 World.add(world, paperBall);

	


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
    drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
	}



