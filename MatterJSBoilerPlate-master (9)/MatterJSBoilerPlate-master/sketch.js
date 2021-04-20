var paperIMG,dustbinIMG,paperLoad,dustbinLoad;
const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    paperIMG=loadImage("paper.png")
	dustbinIMG=loadImage("dustbingreen.png")
}
  
function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

    paperLoad=createSprite(100,600,5,5);
	paperLoad.addImage(paperIMG)

	dustbinLoad=createSprite(1000,500,5,5);
    dustbinLoad.addImage(dustbinIMG)

    groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

//dustbinsprite.createSprite(550,100,100,100);
//dustbinSprite.addImage(dustbinIMG)
}

	
function draw() {
  rectMode(CENTER);
  background(100);

  //paperLoad.x= packageBody.position.x 
  //paperLoad.y= packageBody.position.y 

paperLoad.display();
dustbinLoad.display();

 //drawSprites(); 
}
  
 function keyPressed(){
 if(keyCode === UP_ARROW){
 //  Matter.Body.applyForce(paperLoad.Body,paperLoad.Body.position,{x:130,y:-145});
     Matter.Body.applyForce(paperLoad.Body.position,{x:130,y:-145});
    }
   
 }
