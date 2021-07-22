var tower,towerImg;
var door,doorImg,doorGroup;
var climber,climberImg,climberGroup;
var ghost,ghostImg;
var invisibleGround,invisibleGroundGroup;
var gameState="play";


function preload(){
towerImg=loadImage("tower.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");

}



function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage("tower",towerImg);
tower.velocityY=1;

ghost=createSprite(200,200,50,50);
ghost.addImage("ghost",ghostImg);
ghost.scale=0.3;

doorGroup=new Group();
climberGroup=new Group();
invisibleGroundGroup=new Group();

}



function draw(){
background(0);
if(tower.y>400){
tower.y=300;

}
if(gameState==="play"){

    if(keyDown("left_arrow")){
   ghost.x=ghost.x -3;
    }

    if(keyDown("right_arrow")){
        ghost.x=ghost.x +3;  
    }

 if(keyDown("space")){
        ghost.velocityY=-10;
    }
    ghost.velocityY=ghost.velocityY+0.8;

spwandoors();
if(climberGroup.isTouching(ghost)){
ghost.velocityY=0;

}
if(invisibleGroundGroup.isTouching(ghost)||ghost.y>600){
ghost.destroy();
gameState="end";
}
drawSprites();
}
if(gameState==="end"){
    fill ("yellow");
    textSize(30);
text("gameOver",230,250);

}
}



function spwandoors(){
if(frameCount % 240===0){
var door=createSprite(200,-50);
door.addImage(doorImg);
var climber=createSprite(200,10);
climber.addImage(climberImg);
var invisibleGround=createSprite(200,15);


door.x=Math.round(random(100,400));
climber.x=door.x;
ghost.depth=door.depth;
ghost.depth=ghost.depth+1;
door.velocityY=1;
climber.velocityY=1;

doorGroup.add(door);
climberGroup.add(climber);
invisibleGroundGroup.add(invisibleGround);
door.lifetime=800;
climber.lifetime=800;
invisibleGround.lifetime=800;
invisibleGround.width = climber.width;
invisibleGround.height=2;
invisibleGround.velocityY=1;
}
}