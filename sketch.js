var bg1,bg2,bg3,bg4,blue,running;
var bgSprite;

function preload(){
   bg1 = loadImage("stickman_background.jpg");
   bg2 = loadImage("stickmanbg_2.jpg");
   bg3 = loadImage("stickmanbg_3.jpg");
   bg4 = loadImage("stickmanbg_4.jpg");
   //blue = loadImage("stickman_blue.gif");
   //running = loadImage("stickamn running");
}
function setup(){
    createCanvas(1200,600)
    bgSprite = createSprite(600,300,1200,600)
    bgSprite.addImage("bgone",bg1);
}
function draw(){
    background("blue")
    bgSprite.velocityX = -2;
    if(bgSprite.x < 400){
       bgSprite.x = bgSprite.width/2
    }
    drawSprites();
}