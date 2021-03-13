
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world, trash, trashImg, paperr, papImg, pap;

function preload(){
	trashImg=loadImage("dustbingreen.png");
	papImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);

/*pap=createSprite(400,630);
pap.addImage(papImg);
pap.scale=0.5;*/
paperr=new Paper(200,450,70);
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.run(engine);
//paperr.position.x=pap.x;
//paperr.position.y=pap.y;
dustbinObj.display();
groundObject.display();
paperr.display();
drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperr.body,paperr.body.position,{x:800,y:-900});
	}
}

