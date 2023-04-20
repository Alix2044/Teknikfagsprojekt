let hierImg;
let hierImg2;

let cornerR;
let infoBoksX;
let infoBoksY;
let infoBoksWidth;
let infoBoksHeight;

let titleBoksX;
let titleBoksY;
let titleBoksWidth;
let titleBoksHeight;

let forrige;
let forside;

function preload() {
  hierImg = loadImage("/Formelsamling/assets/regnearternes hieraki 1.png");
  hierImg2 = loadImage("/Formelsamling/assets/regnearternes hieraki 2.png");
}

function setup() {
  createCanvas(windowWidth - 25, 315 + 1189 + 200);

  forrige = createDiv(
    "<a style='text-decoration:none' href='/Formelsamling/Sider/ligning.html'>Ligninger</a>"
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
  text("Hierarki", titleBoksX, titleBoksY);
}

function billeder() {
  let billedX = infoBoksX - infoBoksWidth / 2 + 20;
  let billedY = infoBoksY - infoBoksHeight / 2 + 10;

  image(hierImg, billedX, billedY, infoBoksWidth - 40);
  image(hierImg2, billedX, billedY + 330, infoBoksWidth - 40);
}

function knapper() {
  let forrigeKnapX = width / 6;
  let forrigeKnapY = titleBoksY;
  let forrigeKnapWidth = width / 10;
  let forrigeKnapHeight = titleBoksHeight / 1.5;

  fill(255);
  stroke(32, 56, 100);
  strokeWeight(2);

  rect(
    forrigeKnapX,
    forrigeKnapY,
    forrigeKnapWidth,
    forrigeKnapHeight,
    cornerR
  );
  square(
    forrigeKnapHeight / 2,
    forrigeKnapHeight / 2,
    forrigeKnapHeight / 1.2,
    cornerR - 5
  );

  fontsize = forrigeKnapHeight / 2.3;
  forrige.style("font-size", fontsize + "px");
  forrige.style("text-align: center");
  forrige.style("vertical-align: center");

  forrige.size(forrigeKnapWidth, forrigeKnapHeight);
  forrige.position(
    forrigeKnapX - forrigeKnapWidth / 2.3,
    forrigeKnapY - (forrigeKnapHeight - fontsize) / 4
  );

  forside.style("font-size", fontsize * 1.5 + "px");

  forside.size(forrigeKnapWidth, forrigeKnapHeight);
  forside.position(
    forrigeKnapHeight / 2 - forrigeKnapHeight / 6,
    forrigeKnapHeight / 2 - (forrigeKnapHeight - fontsize) / 2.5
  );
}
