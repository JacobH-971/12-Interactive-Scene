// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dinoSpeed = 5;
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
let cactusX = 850;
let cactusY = 350;
let pX = 850;
let pY = 330;
let duckX = 125;
let duckY = 600;


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

function preload(){
  img = loadImage('dino.png');
  img1 = loadImage('duckingDino.png');
  img2 = loadImage('cactus.png');
  img3 = loadImage('Pterodacty.jpg');
  img4 = loadImage('duck2.png');
}

function draw() {
  background(255);
  strokeWeight(2);

  //time reset
  score += 2;
  time += 1
  if(time > 5400){
    time = 0;
  }
  //cactus collision
  cactusX -= speed;
  if(dinoX > cactusX - 25 && dinoX < cactusX + 25 && dinoY > cactusY - 25 && dinoY < cactusY + 25){
    print("dead");
  }

  //pterodactyl collision
  if(score > 1000){
    pX -= speed;
    if(dinoX > pX - 25 && dinoX < pX + 25 && dinoY > pY - 25 && dinoY < pY + 25){
      print("dead");
    }
  }

  //some functions
  cactus(cactusX, cactusY);
  pterodactyl(pX, pY);
  Time(time);
  
  fill(0);
  image(img, dinoX, dinoY, 50, 50);
  image(img4, duckX, duckY, 35, 35);
  text(score + ", " + mouseY, 50, 50);

  fill(0,0,0,0);
  rect(400, 390, 850, 30);

  //movement/jump
  if(isAlive === 1){
    if(keyIsPressed && key === "w" && dinoY === 353){
      dinoV = -12;
    }
    else if (dinoY < 353){
      dinoV += 1;
    }
  
    if(dinoY >= 354){
      dinoV = 0;
      dinoY = 353;
    }
  }
  //duck
  //get it? }:)
  if(keyIsPressed && key === "s"){
    dinoY = 500;
    duckY = 360;
  }
  else{
    dinoY = 353;
    duckY = 500;
  }

  dinoY += dinoV;
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
  // if(x < -10) {
  //   x = 825;
  // }
}

//Spawns the pterodactyl after 1000 ticks
function pterodactyl(x, y ){
  image(img3, x, y, 50, 50);
  if(x < -10) {
    x = 825;
  }
}
