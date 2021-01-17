var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,Engine,myground,world; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
	
	var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    myground = new ground(200,500,1000,10);
    box1= new box(200,200,20,80);
    box2 = new box(200,10,80,20);
    box3= new box(200,200,20,80);
  console.log(box1);
  console.log(box2);
  console.log(box3);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("white");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  background("white");
  Engine.update(engine);

 
 
  myground.display();
 box1.display();
 box2.display();  
 box3.display();
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



