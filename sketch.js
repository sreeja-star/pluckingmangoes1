
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,treeImg,ground,boy,tree;
var stone1,rope1,mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,b1,b2,b3,b4;
function preload()
{
	boyImg=loadImage("images/boy.png");
	treeImg=loadImage("images/tree.png");
	b1=loadImage("images/v8.jpg");
	b2=loadImage("images/v2.jpg");
	b3=loadImage("images/v3.jpg");
	b4=loadImage("images/v4.jpeg");
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy=createSprite(150,570,100,300)
	boy.addImage(boyImg);
	boy.scale=0.15;

	tree=createSprite(780,370,300,600);
	tree.addImage(treeImg);
	tree.scale=0.47;

    ground=new Ground(500,650,1000,20)
	stone1=new stone(80,470,40);
	rope1=new rope(stone1.body,{x:80,y:470})
	rope1.depth=boy.depth+1;
	mango1=new mango(700,300,30);
	mango2=new mango(900,200,32);
	mango3=new mango(650,350,32);
	mango4=new mango(780,300,32);
	mango5=new mango(650,220,32);
	mango6=new mango(750,200,32);
	mango7=new mango(900,250,32);
	mango8=new mango(760,120,32);
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(b1);
 
  //console.log(stone1.x);
  drawSprites();
 // ground.display();
  stone1.display();
  rope1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  detectCollision(stone1,mango1); 
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3); 
  detectCollision(stone1,mango4); 
  detectCollision(stone1,mango5); 
  detectCollision(stone1,mango6); 
  detectCollision(stone1,mango7); 
  detectCollision(stone1,mango8);
 
}

 

function mouseDragged(){ 
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){ 
	rope1.fly(); 
}

function detectCollision(lstone,lmango){ 
	mangoBodyPosition=lmango.body.position; 
	stoneBodyPosition=lstone.body.position; 
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y); 
	if(distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false); 
		} 
	}
	function keyPressed(){
		if(keyCode===32){ 
			rope1.attach(stone1.body); 
		   } 
	   }




