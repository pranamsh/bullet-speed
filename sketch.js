var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(600,400);

  speed=random(223,321)
  weight=random(30,52)

  thickness=random(22,83)

 bullet=createSprite(50, 20, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor="white";

 wall=createSprite(1500, 200,thickness,height/2);
 wall.shapeColor="white";
 }

function draw() {
  background("white"); 

 
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

 if(damage>10){
   wall.shapeColor="green"
 } 

 if(damage<10){
   wall.shapeColor="red"
 }
}
 drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
