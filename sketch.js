var car,wall;
var speed,weight;
var v;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX = speed;
}

function draw() {
  background(0);  
  if(car.collide(wall)){
  v=(0.5*weight*speed*speed)/22500
  if(v<100){
    car.shapeColor="green";
  }
  if(v>=100 && v<180){
    car.shapeColor="yellow"
  }
  if(v>=180){
    car.shapeColor="red"
  }
  }
  drawSprites();

}