const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;


function preload()
{
   
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(width / 2, height - 50, width, 10);
	// ground2 = new Ground()
	box1 = new Box(630, 235, 30, 40);
	box2 = new Box(660, 235, 30, 40);
	box3 = new Box(690, 235, 30, 40);
	box4 = new Box(720, 235, 30, 40);
	box5 = new Box(750, 235, 30, 40);
	box6 = new Box(660, 195, 30, 40);
	box7 = new Box(690, 195, 30, 40);
	box8 = new Box(720, 195, 30, 40);
	box9 = new Box(690, 155, 30, 40);

	box10 = new Box(330, 235, 30, 40);
	box11 = new Box(360, 235, 30, 40);
	box12 = new Box(390, 235, 30, 40);
	box13 = new Box(420, 235, 30, 40);
	box14 = new Box(450, 235, 30, 40);
	box15 = new Box(360, 195, 30, 40);
	box16 = new Box(390, 195, 30, 40);
	box17 = new Box(420, 195, 30, 40);
	box18 = new Box(390, 155, 30, 40);

    polygon = new Polygon(200,400,40);
	slingshot = new SlingShot(polygon.body,{x : 200, y : 50});

	base1 = new Ground(390, 260, 250, 10);
    base2 = new Ground(690, 260, 250, 10);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  polygon.display();
  slingshot.display();

  base1.display();
  base2.display();

  drawSprites();
 
}

function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}