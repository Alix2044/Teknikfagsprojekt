let plusImg;
let minusImg;

let cornerR;

let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

let titleBoksX;
let titleBoksY;
let titleBoksWidth;
let titleBoksHeight;

let næste;
let forside;

function preload() {
  plusImg = loadImage("/Formelsamling/assets/Plus.png");
  minusImg = loadImage("/Formelsamling/assets/minus.png");
}

function setup() {
  createCanvas(windowWidth - 25, 1210 + 810 + 200);
  næste = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/gange.html'>Gange</a>"
  );
  forside = createDiv(
    "<a style='text-decoration:none' href='../Formelsamling_forside.html'>←</a>"
  );

  bokse();
  billeder();
  knapper();
}

function bokse() {
  infoBoksX = width / 2;
  infoBoksY = height / 2 + 50;
  infoBoksWidth = width - width / 5;
  infoBoksHeight = height - 150;

  titleBoksX = infoBoksX;
  titleBoksY = (infoBoksY - infoBoksHeight / 2) / 2;
  titleBoksHeight = (height - infoBoksHeight) / 1.7;
  titleBoksWidth = width / 2;
  cornerR = 20;

  rectMode(CENTER);
  fill(255);
  stroke(32, 56, 100);
  strokeWeight(2);

  rect(infoBoksX, infoBoksY, infoBoksWidth, infoBoksHeight, cornerR);
  rect(titleBoksX, titleBoksY, titleBoksWidth, titleBoksHeight, cornerR);

  textSize(titleBoksHeight - titleBoksHeight / 4);
  fill(0);
  strokeWeight(4);
  noStroke();
  textAlign(CENTER, CENTER);
  text("Plus og Minus", titleBoksX, titleBoksY);
}

function billeder() {
  let billedX = infoBoksX - infoBoksWidth / 2 + 20;
  let billedY = infoBoksY - infoBoksHeight / 2 + 10;

  image(plusImg, billedX, billedY, infoBoksWidth - 40);
  image(minusImg, billedX, billedY + 815, infoBoksWidth - 40);
}

function knapper() {
  let næsteKnapX = width - width / 6;
  let næsteKnapY = titleBoksY;
  let næsteKnapWidth = width / 10;
  let næsteKnapHeight = titleBoksHeight / 1.5;

  fill(255);
  stroke(32, 56, 100);
  strokeWeight(2);

  rect(næsteKnapX, næsteKnapY, næsteKnapWidth, næsteKnapHeight, cornerR);
  square(
    næsteKnapHeight / 2,
    næsteKnapHeight / 2,
    næsteKnapHeight / 1.2,
    cornerR - 5
  );

  fontsize = næsteKnapHeight / 2.3;
  næste.style("font-size", fontsize + "px");
  næste.style("text-align: center");
  næste.style("vertical-align: center");

  næste.size(næsteKnapWidth, næsteKnapHeight);
  næste.position(
    næsteKnapX - næsteKnapWidth / 2.3,
    næsteKnapY - (næsteKnapHeight - fontsize) / 4
  );

  forside.style("font-size", fontsize * 1.5 + "px");

  forside.size(næsteKnapWidth, næsteKnapHeight);
  forside.position(
    næsteKnapHeight / 2 - næsteKnapHeight / 6,
    næsteKnapHeight / 2 - (næsteKnapHeight - fontsize) / 2.5
  );
}
