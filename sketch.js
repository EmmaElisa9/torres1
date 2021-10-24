const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, polygon;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,300,10);
  stand2 = new Stand(725,200,250,10);
 

  //torre uno
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);


  //segunda torre
  //nivel uno
  block17 = new Block(640,175,30,40);
  console.log(block1);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  block22 = new Block(790,175,30,40);
  block23 = new Block(820,175,30,40);
  //nivel dos
  block24 = new Block(670,135,30,40);
  block25 = new Block(700,135,30,40);
  block26 = new Block(730,135,30,40);
  block27 = new Block(760,135,30,40);
  block28 = new Block(790,135,30,40);
  //nivel tres
  block29 = new Block(700,95,30,40);
  block30 = new Block(730,95,30,40);
  block31 = new Block(760,95,30,40);
  //parte superior
  block32 = new Block(730,55,30,40);


  polygon = Bodies.circle(60,200,30);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:70,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("arrastra el hexagono y sueltalo para tirar los bloques",20,20);
  

  ground.display();

  //torre 1
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("purple");
  block16.display();

  //torre 2
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("yellow");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("palegreen");
  block32.display();

  //poligono
  imageMode(CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.libre();
}


function keyPressed(){

}
