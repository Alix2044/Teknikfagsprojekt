let proImg1;
let proImg2;
let proImg3;
let proImg4;
let proImg5;

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
  proImg1 = loadImage("/Formelsamling/assets/Procent 1.png");
  proImg2 = loadImage("/Formelsamling/assets/procent 2.png");
  proImg3 = loadImage("/Formelsamling/assets/Procent 3.png");
  proImg4 = loadImage("/Formelsamling/assets/procent 4.png");
  proImg5 = loadImage("/Formelsamling/assets/procent 5.png");
}

function setup() {
  createCanvas(windowWidth - 25, 330 + 453 + 463 + 433 + 268 + 200);

  næste = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/ligning.html'>Ligninger</a>"
  );
  forrige = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/deci.html'>Decimaltal</a>"
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
  infoBoksHeight = 330 + 453 + 463 + 433 + 268 + 50;

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
  text("Procent", titleBoksX, titleBoksY);
}

function billeder() {
  let billedX = infoBoksX - infoBoksWidth / 4;
  let billedY = infoBoksY - infoBoksHeight / 2 + 10;

  image(proImg1, billedX, billedY);
  image(proImg2, billedX, billedY + 330);
  image(proImg3, billedX, billedY + 330 + 453);
  image(proImg4, billedX, billedY + 330 + 453 + 463);
  image(proImg5, billedX, billedY + 330 + 453 + 463 + 433);
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
    næsteKnapY - (næsteKnapHeight - fontsize) / 4
  );

  forside.style("font-size", fontsize * 1.5 + "px");

  forside.size(næsteKnapWidth, næsteKnapHeight);
  forside.position(
    næsteKnapHeight / 2 - næsteKnapHeight / 6,
    næsteKnapHeight / 2 - (næsteKnapHeight - fontsize) / 2.5
  );
}
