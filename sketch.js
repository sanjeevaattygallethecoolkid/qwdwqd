var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage =  loadAnimation("red1.png","red2.png","red3.png","red4.png");
  green_balloonImage = loadAnimation("green1.png","green2.png","green3.png","green4.png","green5.png","green6.png");
  pink_balloonImage =  loadAnimation("red1.png","red2.png","red3.png","red4.png");
  blue_balloonImage = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //creating background
  // scene = createSprite(width,height/2,width+100,height+100);
  // // scene.addImage(backgroundImage);
  // scene.scale = 2
  // scene.x = scene.width /2;
  // creating bow to shoot arrow
  bow = createSprite(width-100,220,40,120);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(backgroundImage);
  // moving ground
  // scene.velocityX = -2 

  // if (scene.x < 20){
  //   scene.x = scene.width;
  // }
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
    
    redB.destroyEach();
    //redB.destroy();
    //redB.Each();
    //ballon.destroyEach();
    
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 670)), 20, 0);
  red.addAnimation("flying",red_balloonImage);
  red.velocityX = 6;
  red.lifetime = width/6;
  red.scale = 0.3;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 670)), 20, 20);
  blue.addAnimation("flying",blue_balloonImage);
  blue.velocityX = 6;
  blue.lifetime = width/3;
  blue.scale = 0.5;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 670)), 20, 20);
  green.addAnimation("flying",green_balloonImage);
  green.velocityX = 6;
  green.lifetime = width/6;
  green.scale = 0.4;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 670)), 20, 20);
  pink.addAnimation("flyingpink",pink_balloonImage);
  pink.velocityX =6;
  pink.lifetime = width/6;
  pink.scale = 0.5
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 90, 15);
  arrow.addImage(arrowImage);
  arrow.x = width-100;
  arrow.y=bow.y;
  arrow.velocityX = -6;
  arrow.lifetime = width/3;
  arrow.scale = 0.3;
  
  // arrowGroup.addGroup(arrow);
  //arrow.add(arrowGroup);
  //arrowGroup.add();
  arrowGroup.add(arrow);
   
}