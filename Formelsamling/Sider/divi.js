let diviImg


let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

function preload(){
    diviImg = loadImage('/Formelsamling/assets/Division.png');
    
}

function setup(){
  createCanvas(windowWidth - 25, 1251 + 200);
  bokse();
  billeder();  
}

function bokse(){
   infoBoksX = width / 2;
   infoBoksY = height / 2 + 50;
   infoBoksWidth = width - (width / 5);
   infoBoksHeight = height - 150
   
   let titleBoksX = infoBoksX;
   let titleBoksY = (infoBoksY - (infoBoksHeight / 2)) / 2;
   let titleBoksHeight = ((height - infoBoksHeight) / 1.7);
   let titleBoksWidth = width / 2;
   let cornerR = 20;

   rectMode(CENTER)
   fill(255);
   stroke(32, 56, 100);
   strokeWeight(2);

   rect(infoBoksX, infoBoksY, infoBoksWidth, infoBoksHeight, cornerR);
   rect(titleBoksX, titleBoksY, titleBoksWidth, titleBoksHeight, cornerR);

   textSize(titleBoksHeight - titleBoksHeight / 4);
   fill(0);
   strokeWeight(4);
   noStroke()
   textAlign(CENTER, CENTER);
   text("Division", titleBoksX, titleBoksY);

}

function billeder(){
    let billedX = infoBoksX - infoBoksWidth / 3;
    let billedY = infoBoksY - infoBoksHeight / 2 + 10;
    
    image(diviImg, billedX, billedY);
}