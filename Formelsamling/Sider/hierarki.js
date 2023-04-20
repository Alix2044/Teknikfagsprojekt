let hierImg;
let hierImg2;


let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

function preload(){
    hierImg = loadImage('/Formelsamling/assets/regnearternes hieraki 1.png');
    hierImg2 = loadImage('/Formelsamling/assets/regnearternes hieraki 2.png');

}

function setup(){
  createCanvas(windowWidth - 25, 315 + 1189 + 200);
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
   text("Hierarki", titleBoksX, titleBoksY);

}

function billeder(){
    let billedX = infoBoksX - infoBoksWidth / 2 + 20;
    let billedY = infoBoksY - infoBoksHeight / 2 + 10;
    
    image(hierImg, billedX, billedY, infoBoksWidth - 40);
    image(hierImg2, billedX, billedY + 330, infoBoksWidth - 40);
}