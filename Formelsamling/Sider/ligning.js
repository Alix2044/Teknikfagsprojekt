let ligImg;
let ligImg2;
let ligImg3;


let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

function preload(){
    ligImg = loadImage('/Formelsamling/assets/ligning 1.png');
    ligImg2 = loadImage('/Formelsamling/assets/ligning 2.png');
    ligImg3 = loadImage('/Formelsamling/assets/ligning 3.png');

}

function setup(){
  createCanvas(windowWidth - 25, 652 + 771 + 724 + 200);
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
   text("Ligninger", titleBoksX, titleBoksY);

}

function billeder(){
    let billedX = infoBoksX - infoBoksWidth / 2 + 20;
    let billedY = infoBoksY - infoBoksHeight / 2 + 10;
    
    image(ligImg, billedX, billedY, infoBoksWidth - 40);
    image(ligImg2, billedX, billedY + 670, infoBoksWidth - 40);
    image(ligImg3, billedX, billedY + 665 + 780, infoBoksWidth - 40);
}