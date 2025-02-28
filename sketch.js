// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let speed = 5;
let dinoX = 125;
let dinoY = 353;
let dinoV = 0;
let isAlive = 1;
let img;
let img1;
let img2;
let img3;
let img4;
let time = 2701;
let score = 0;
let hScore = 0;
let cactusX = 850;
let cactusY = 350;
let cactusX2 = 1150;
let cactusY2 = 350;
let pX = 850;
let pY = 330;
let duckX = 125;
let duckY = 600;
let check = 1;
let rockX = 550; 
let rockY = -50;

function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  //Set the number of frames per second
  frameRate(45);
}
//load images
function preload(){
  img = loadImage('dino.png');
  img1 = loadImage('duckingDino.png');
  img2 = loadImage('cactus.png');
  img3 = loadImage('Pterodacty.jpg');
  img4 = loadImage('duck2.png');
}

function draw() {
  background(255);
  strokeWeight(0);
  textSize(12);
  fill(0, 0, 0, 0);
  rect(cactusX, cactusY, 200, 200);
  rect(cactusX2, cactusY2, 200, 200);
  strokeWeight(2);
  //incrementing speed as you get farther
  speed = speed + score/500000;

  //move the pterodactyl if its too close to the cactus
  if(pX > cactusX - 100 && pX < cactusX + 100 || pX > cactusX2 - 100 && pX < cactusX2 + 100){
    pX += speed;
  }

  //time reset
 if(isAlive === 1){
  score += 1;
  time += 1
  if(time > 5400){
    time = 0;
  }
 }
  // Press R to reset the game if you die
  if (keyIsDown(82)) {
    isAlive = 1;
    score = 0;
    cactusX = 850;
    cactusX2 = 1150;
    pX = 850;
    rockX = 550;
    rockY = -50;
  }

  //cactus collision
 if(isAlive === 1){
    cactusX -= speed;
    if(dinoX > cactusX - 25 && dinoX < cactusX + 25 && dinoY > cactusY - 25 && dinoY < cactusY + 25){
      print("dead");
      isAlive = 0;
   }
   cactusX2 -= speed;
   if(dinoX > cactusX2 - 25 && dinoX < cactusX2 + 25 && dinoY > cactusY2 - 25 && dinoY < cactusY2 + 25){
      print("dead");
      isAlive = 0;
   }
    //respawn
   if(cactusX < -25) {
      cactusX = random(925, 1125);
   }
   if(cactusX2 < -25) {
      cactusX2 = random(950, 1150);
   }
 }

  //pterodactyl collision
  if(score > 500){
   if(isAlive === 1){
     pX -= speed;
     if((dinoX > pX - 25 && dinoX < pX + 25 && dinoY > pY - 25 && dinoY < pY + 25) || (duckX > pX - 25 && duckX < pX + 25 && duckY > pY - 25 && duckY < pY + 25)){
       print("dead");
       isAlive = 0;
      }
      
      if(pX < -25){
        pX = random(925, 1125);
      }
    }
  }

  //some functions
  cactus(cactusX, cactusY);
  cactus(cactusX2, cactusY2);
  pterodactyl(pX, pY);
  Time(time);
  
  fill(0);
  image(img, dinoX, dinoY, 50, 50);
  image(img4, duckX, duckY, 35, 35);

  // text(mouseX + ", " + mouseY, 50, 150);
  text("score " + score, 43, 15);
  text("high score " + hScore, 17, 30);

  fill(0,0,0,0);
  rect(400, 390, 850, 30);

  //movement/jump     
  if(isAlive === 1){
    if((keyIsPressed && key === "w" && dinoY === 353) || (keyIsPressed && key === UP_ARROW && dinoY === 353)){
      dinoV = -12;
    }
    else if (dinoY < 353){
      dinoV += 1;
    }
  
    if(dinoY >= 354){
      dinoV = 0;
      dinoY = 353;
    }

    //duck
    //get it? }:)
    if(keyIsPressed && key === "s"){
      dinoY = 500;
      duckY = 360;
      check = 1;
      if((duckX > cactusX - 25 && duckX < cactusX + 25 && duckY > cactusY - 25 && duckY < cactusY + 25) || (duckX > cactusX2 - 25 && duckX < cactusX2 + 25 && duckY > cactusY2 - 25 && duckY < cactusY2 + 25)){
        isAlive = 0;
      }
    }
    else if(check === 1){
     dinoY = 353;
     duckY = 500;
     check = 0;
    }
  }
  
  dinoY += dinoV;
  // funny die easter eggs
  if(keyIsDown && key === "d"){
    isAlive = 0;
  }

  if(keyIsDown && key === "p"){
    speed += 5;
  }

  if(speed > 25){
    speed = 5;
  }

  // Rock makes dino DIE
 if(isAlive === 0){
   if(score > hScore){
     hScore = score;
   }
   duckY = 500;
   dinoY = 353;
   fill(250, 83,0);
   triangle(rockX - 17, rockY - 18, rockX + 18, rockY + 18, rockX + 85, rockY - 70);
   fill("grey")
   ellipse(rockX, rockY, 50, 50);
   if(rockX > dinoX + 40){
      rockX -= 25;
      rockY += 25;
    }
    fill(0);
    text("press R to restart", 365, 250);
    textSize(50);
    text("YOU DIED", 300, 180);
  }
}

//Sets the time
function Time(t){
  if(t > 2700){
    strokeWeight(1);
    fill("yellow");
    ellipse(775, 25, 50, 50);
  }

  if(t < 2701){
    strokeWeight(0);
    fill("grey");
    ellipse(775, 25, 50, 50);
    fill(255);
    ellipse(787.5, 25, 50, 50);
  }
}
// spawns the cactus
function cactus(x, y){
  image(img2, x, y, 30, 50);
  if(x < -10) {
    x = 825;
  }
}

//Spawns the pterodactyl after 500 ticks
function pterodactyl(x, y ){
  image(img3, x, y, 50, 50);
}







































































































































































































































































































































































































































































































































































































































































































































































































//you made it to the bottom
//or did you???