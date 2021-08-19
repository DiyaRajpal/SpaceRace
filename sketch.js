const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rocket, rocketImg;
var bg;

function preload(){
  bg=loadImage("space1.jpg");
}
function setup() {
  createCanvas(600,350);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  rocket = new Rocket(400,200,150,150);
  //rocket.addImage(rocketImg);
  //rocket.scale=0.5;

}

function draw() {
  background(bg);  
  rocket.display();
  
  if(keyDown("RIGHT_ARROW")){
    Matter.Body.setVelocity(rocket.body,{x:2,y:0});
    console.log("abc");
  }
  if(keyDown("LEFT_ARROW")){
    Matter.Body.setVelocity(rocket.body,{x:-2,y:0});
  }
  if(keyDown("UP_ARROW")){
    Matter.Body.setVelocity(rocket.body,{x:0,y:-2});
  }
  if(keyDown("DOWN_ARROW")){
    Matter.Body.setVelocity(rocket.body,{x:0,y:2});
  }

  
}