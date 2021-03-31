var fixedSprite1,fixedSprite2,fixedSprite3,fixedSprite4;
var movingSprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingSprite = createSprite(random(10,750),300,20,20);
    movingSprite.shapeColour ="white";
    movingSprite.velocityX =3;
    movingSprite.velocityY = 3;

    fixedSprite1 = createSprite(100,590,180,20);
    fixedSprite1.shapeColour="red";

    fixedSprite2= createSprite(300,590,180,20);
    fixedSprite2.shapeColour="green";

    fixedSprite3= createSprite(500,590,180,20);
    fixedSprite3.shapeColour="blue";

    fixedSprite4 = createSprite(700,590,180,20)
    fixedSprite4.shapeColour="purple";



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(movingSprite.x<0){
        music.stop();
        movingSprite.velocityX=-3
    }else if(movingSprite.x>800){
        music.stop();
        movingSprite.velocityX=-3
    }

    if(movingSprite.isTouching(fixedSprite4))
    {
        music.stop();
        movingSprite.shapeColour="purple"
      movingSprite.bounceOff(fixedSprite4) 
    }

    else if(movingSprite.isTouching(fixedSprite3))
    {
        music.stop();
        movingSprite.shapeColour="blue"
       movingSprite.bounceOff(fixedSprite3)
    }
    
    
    else if(movingSprite.isTouching(fixedSprite2))
    {
        music.stop()
        movingSprite.shapeColour="green"
       movingSprite.bounceOff(fixedSprite2)
       movingSprite.velocityX=0;
       movingSprite.velocityY=0;
    }

    else if(movingSprite.isTouching(fixedSprite1)){
        music.stop();
        movingSprite.shapeColour="red"
       movingSprite.bounceOff(fixedSprite1)
    }

    if(movingSprite.y<0){
        music.stop();
        movingSprite.velocityY=3;

    }

    drawSprites()
}
