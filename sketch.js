
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj
var world;


function setup() {
	createCanvas(1100, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(900,550,550);
	paperObj=new Paper(150,0,50);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1100,
			height:600,
			wireframes:false
		}

	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:40,y:-49})
	}
}

