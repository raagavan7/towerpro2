const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;

var block10, block11, block12, block13, block14, block15, block16,block17,block18;
var polygonimg,chain;
var ground1, ground2, ground3;
var ball;


function preload(){
  polygonimg = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);


  
  engine = Engine.create();
    world = engine.world;
    

  block1 = new Block(540,260,25,35);
  block2 = new Block(570,260,25,35);
  block3 = new Block(600,260,25,35);
  block4 = new Block(630,260,25,35);
  block5 = new Block(660,260,25,35);

  bolck10 = new Block(600,170,25,35);
  block11 = new Block(570,180,25,35);
  block12 = new Block(630,180,25,35);

  block13 = new Block(600,140,25,35);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(900,170,25,35);
  block15 = new Block(930,170,25,35);
  block16 = new Block(870,170,25,35);
  block17 = new Block(840,170,25,35);
  block18 = new Block(960,170,25,35);

  block19 = new Block(900,140,25,35);
  block20 = new Block(930,140,25,35);
  block21 = new Block(870,140,25,35);

  block22 = new Block(900,110,25,35);

 

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  chains = new Chain(this.ball,{x:150, y:160});


}

function draw() {
  background("white");
  Engine.update(engine);

  textSize(20);
  fill("black");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",100,30);
  fill("black")
text("press space button to get a second chance to play",800,30)
  imageMode(CENTER);
  image(polygonimg,ball.position.x,ball.position.y,40,40);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("pink");
  bolck10.display();
  block11.display();
  block12.display();
  fill("brown");
  block13.display();
  fill("yellow");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("orange");
  block19.display();
  block20.display();
  block21.display();
  fill("violet");
  block22.display();
  fill("brown")
  ground1.display();
  ground2.display();
  ground3.display();
  chains.display();

}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chains.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chains.attach(this.ball);
  }
}
