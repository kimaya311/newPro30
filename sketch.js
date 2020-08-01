
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body =  Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1;

var block1,block2,block3,block4,block5,block6,block7, 
block8,block9,block10,block11,block12;

var block13,block14,block15,block22,block23,block24;
var block16,block17,block18,block19,block20,block21;

var block25;
var polygon,slingshot;
//define gamestate
var gameState = "onSling";
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(400,400,800,10);

  stand1 = new Ground(340,360,250,10);
  stand2 = new Ground(650,200,230,10);

  polygon = new Polygon(50,200,20);
slingshot = new SlingShot(polygon.body,{x:100,y:200});

  console.log(polygon.body.position);
//color baby blue
    block1 = new Block1(248,334,30,40);
    block2 = new Block1(278,334,30,40);
    block3 = new Block1(308,334,30,40); 
    block4 = new Block1(338,334,30,40);
    block5 = new Block1(368,334,30,40);
    block6 = new Block1(398,334,30,40);
    block7 = new Block1(428,334,30,40);
    block8 = new Block1(590,174,30,40);
    block9 = new Block1(620,174,30,40); 
   block10 = new Block1(650,174,30,40);
   block11 = new Block1(680,174,30,40);
   block12 = new Block1(710,174,30,40);
//color pink
   block13 = new Block2(620,132,30,40);
   block14 = new Block2(650,132,30,40);
   block15 = new Block2(680,132,30,40);
   block22 = new Block2(308,250,30,40);
   block23 = new Block2(338,250,30,40);
   block24 = new Block2(368,250,30,40);
//color turquoise
   block16 = new Block3(650,90,30,40);
   block17 = new Block3(278,292,30,40);
   block18 = new Block3(308,292,30,40); 
   block19 = new Block3(338,292,30,40);
   block20 = new Block3(368,292,30,40);
   block21 = new Block3(398,292,30,40);
//color grey
   block25 = new Block4(338,208,30,40);

   Engine.run(engine);   

}

function draw() {
  Engine.update(engine);
  background(54, 45, 44);  
  rectMode(CENTER);
  text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",150,20);
ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

stand1.display();
stand2.display();

polygon.display();
slingshot.display();



}

function mouseDragged(){
  if (gameState ==="onSling"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
    slingshot.fly();
  gameState ="launched";
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100});
slingshot.attach(polygon.body);
gameState ="onSling";
  }
}