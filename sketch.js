// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dinoSpeed = 5;
let pSpeed = 5;
let dinoX = 400;
let dinoY = 353;
let dinoV = 0;
let isAlive = 1;
let img;
let img1;
let img2;
let img3;
let img4;
let time = 0;


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
  // img3 = loadImage('bigCactus.png');
  // img4 = loadImage('Pterodactyl.jpg');
}

function draw() {
  background(255);
  strokeWeight(2);
  time += 1
  if(time > 5400){
    time = 0;
  }
  
  // cactus();
  // pterodactyl();

  Time(time);

  image(img, 350, dinoY, 50, 50);
  text(mouseY + ", " + mouseY, 50, 50);
  

  fill(0,0,0,0);
  rect(400, 390, 850, 30);

 
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

  dinoY += dinoV;
}

function Time(t){
  if(t > 2700){
    strokeWeight(1);
    fill("yellow");
    ellipse(775, 25, 50, 50);
  }
  if(t < 2700){
    strokeWeight(0);
    fill("grey");
    ellipse(775, 25, 50, 50);
    fill(255);
    ellipse(787.5, 25, 50, 50);
  }
}
// function cactus(){

// }

// function pterodactyl(){

// }
