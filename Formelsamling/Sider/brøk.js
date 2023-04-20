let brøkImg;
let brøkImg2;
let brøkImg3;
let brøkImg4;

let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

function preload(){
    brøkImg = loadImage('/Formelsamling/assets/plus brøker.png');
    brøkImg2 = loadImage('/Formelsamling/assets/minus brøker.png');
    brøkImg3 = loadImage('/Formelsamling/assets/gange brøker.png');
    brøkImg4 = loadImage('/Formelsamling/assets/division brøker.png');

}

function setup(){
  createCanvas(windowWidth - 25, 853 + 607 + 383 + 1075 + 200);
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
   text("Brøker", titleBoksX, titleBoksY);

}

function billeder(){
    let billedX = infoBoksX - infoBoksWidth / 2 + 20;
    let billedY = infoBoksY - infoBoksHeight / 2 + 10;
    
    image(brøkImg, billedX, billedY, infoBoksWidth - 40);
    image(brøkImg2, billedX, billedY + 860, infoBoksWidth - 40);
    image(brøkImg3, billedX, billedY + 860 + 620, infoBoksWidth - 40);
    image(brøkImg4, billedX, billedY + 860 + 620 + 400, infoBoksWidth - 40);

}