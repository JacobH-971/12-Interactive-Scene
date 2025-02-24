// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dinoSpeed = 5;
let pSpeed = 5;
let img;
let img1;
let img2;
let img3;
let img4;

function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  //Set the number of frames per second
  frameRate(15);
}

function preload(){
  img = loadimage('dino2.png');
  img1 = loadimage('duckingDino.png');
  img2 = loadimage('cactus.png');
  img3 = loadImage('bigCactus');
  img4 = loadImage('pterodactyl.png');
}

function draw() {
  background(220);
  strokeWeight(2);
  fill(0,0,0,0);
  rect(400, 390, 850, 30);
  cactus();
  pterodactyl();

  image(img, 50, 50);
}

function cactus(){
  
}

function pterodactyl(){

}
