let gangeImg;

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
let forrige;
let forside;

function preload() {
  gangeImg = loadImage("/Formelsamling/assets/gange.png");
}

function setup() {
  createCanvas(windowWidth - 25, 1423 + 200);
  næste = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/divi.html'>Division</a>"
  );
  forrige = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/plus_minus.html'>Plus og Minus</a>"
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
  text("Gange", titleBoksX, titleBoksY);
}

function billeder() {
  let billedX = infoBoksX - infoBoksWidth / 2 + 20;
  let billedY = infoBoksY - infoBoksHeight / 2 + 10;

  image(gangeImg, billedX, billedY, infoBoksWidth - 40);
}

function knapper() {
  let næsteKnapX = width - width / 6;
  let næsteKnapY = titleBoksY;
  let næsteKnapWidth = width / 10;
  let næsteKnapHeight = titleBoksHeight / 1.5;
  let forrigeKnapX = width / 6;

  fill(255);
  stroke(32, 56, 100);
  strokeWeight(2);

  rect(næsteKnapX, næsteKnapY, næsteKnapWidth, næsteKnapHeight, cornerR);
  rect(forrigeKnapX, næsteKnapY, næsteKnapWidth, næsteKnapHeight, cornerR);
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

  forrige.style("font-size", fontsize + "px");
  forrige.style("text-align: center");
  forrige.style("vertical-align: center");

  forrige.size(næsteKnapWidth, næsteKnapHeight);
  forrige.position(
    forrigeKnapX - næsteKnapWidth / 2.3,
    næsteKnapY - næsteKnapHeight / 2.5
  );

  forside.style("font-size", fontsize * 1.5 + "px");

  forside.size(næsteKnapWidth, næsteKnapHeight);
  forside.position(
    næsteKnapHeight / 2 - næsteKnapHeight / 6,
    næsteKnapHeight / 2 - (næsteKnapHeight - fontsize) / 2.5
  );
}
