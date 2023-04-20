let proImg1;
let proImg2;
let proImg3;
let proImg4;
let proImg5;
let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

function preload(){
    proImg1 = loadImage('/Formelsamling/assets/Procent 1.png');
    proImg2 = loadImage('/Formelsamling/assets/procent 2.png');
    proImg3 = loadImage('/Formelsamling/assets/Procent 3.png');
    proImg4 = loadImage('/Formelsamling/assets/procent 4.png');
    proImg5 = loadImage('/Formelsamling/assets/procent 5.png');
}

function setup(){
  createCanvas(windowWidth - 25, 330 + 453 + 463 + 433 + 268 + 200);
  bokse();
  billeder();  
}

function bokse(){
   infoBoksX = width / 2;
   infoBoksY = height / 2 + 50;
   infoBoksWidth = width - (width / 5);
   infoBoksHeight = 330 + 453 + 463 + 433 + 268 + 50
   
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
   text("Procent", titleBoksX, titleBoksY);

}

function billeder(){
    let billedX = infoBoksX - infoBoksWidth / 4;
    let billedY = infoBoksY - infoBoksHeight / 2 + 10;
    
    image(proImg1, billedX, billedY);
    image(proImg2, billedX, billedY + 330);
    image(proImg3, billedX, billedY + 330 + 453);
    image(proImg4, billedX, billedY + 330 + 453+ 463);
    image(proImg5, billedX, billedY + 330 + 453 + 463 + 433);

    

}