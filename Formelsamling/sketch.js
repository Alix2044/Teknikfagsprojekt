let boksWidth;
let boksActualWidth;
let boksHeight;
let boksY;
let plus;
let gange;
let divi;
let brøk;
let deci;
let procent;
let ligning;
let hierarki

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  plus = createDiv("<a href='../Formelsamling/Sider/plus_minus.html'>Plus og Minus</a>");
  gange = createDiv("<a href='../Formelsamling/Sider/gange.html'>Gange</a>");
  divi = createDiv("<a href='../Formelsamling/Sider/divi.html'>Division</a>");
  brøk = createDiv("<a href='../Formelsamling/Sider/brøk.html'>Brøker</a>");
  deci = createDiv("<a href='../Formelsamling/Sider/deci.html'>Decimaltal</a>");
  procent = createDiv("<a href='../Formelsamling/Sider/procent.html'>Procent</a>");
  ligning = createDiv("<a href='../Formelsamling/Sider/ligning.html'>Ligninger</a>");
  hierarki = createDiv("<a href='../Formelsamling/Sider/hierarki.html'>Hierarki</a>");
}

function draw() {
  //background(220)
  bokse();
  knapper();

}

function bokse(){
  boksWidth = (width / 4);
  boksActualWidth = boksWidth - width / 18
  boksHeight = (height / 4);
  boksY = height / 4 + boksHeight / 1.5
  let cornerR = 20;
  
  
  rectMode(CENTER);
  stroke(32, 56, 100);
  strokeWeight(2);
  fill(240)

  rect(width / 2, (boksY - (boksHeight / 2)) / 2, width / 2, boksHeight - (boksHeight / 4), cornerR)

  //Bokse på skærmen, for loop for de 4 øverste
  for(let i = 0; i<=3; i++){
    rect(boksWidth / 2 + (boksWidth * i), boksY, boksActualWidth, boksHeight, cornerR);
  }
  //for loop for de 4 nederste
  for(let i = 0; i<=3; i++){
    rect(boksWidth / 2 + (boksWidth * i), boksY + boksHeight * 1.5, boksWidth - width / 18, boksHeight, cornerR);
  }

  textAlign(CENTER, CENTER);
  textSize(boksHeight / 3)
  noStroke();
  fill(0)
  text('Formelsamling', width / 2, (boksY - (boksHeight / 2)) / 2)

 /* for(let i = 0; i<=3; i++){
  text(textFelter[i], boksWidth / 2 + (boksWidth * i), boksY);
  }
  for(let i = 0; i<=3; i++){
    text(textFelter[i + 4], boksWidth / 2 + (boksWidth * i), boksY + boksHeight * 1.5);
    }
 
  

  /*topBoksYmin = boksY - boksHeight / 2;
  topBoksYmax = topBoksYmin + boksHeight
 
  bundBoksYmin = boksY + boksHeight * 1.5 - boksHeight / 2;
  bundBoksYmax = bundBoksYmin + boksHeight
  
  boks1Xmin = width / 36;
  boks1Xmax = boks1Xmin + boksActualWidth;
  
  boks2Xmin = boks1Xmax + width / 18;
  boks2Xmax = boks2Xmin + boksActualWidth;

  boks3Xmin = boks2Xmax + width / 18;
  boks3Xmax = boks3Xmin + boksActualWidth;

  boks4Xmin = boks3Xmax + width / 18;
  boks4Xmax = boks4Xmin + boksActualWidth;
  
  //console.log(boks1Xmin, boks1Xmax, mouseX);
  //console.log(boks2Xmin, mouseX)
  //Tekst i boksende
  */
}

function knapper(){
  fontsize = boksHeight / 4;
  plus.style('font-size', fontsize + 'px')
  plus.style('text-align: center');
  plus.style('vertical-align: center');

  plus.size(boksActualWidth, boksHeight);
  plus.position(boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25, boksY - boksHeight / 10);
  
  gange.style('font-size', fontsize + 'px')
  gange.style('text-align: center');
  gange.style('vertical-align: center');

  gange.size(boksActualWidth, boksHeight);
  gange.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth, boksY - boksHeight / 10);
  
  divi.style('font-size', fontsize + 'px')
  divi.style('text-align: center');
  divi.style('vertical-align: center');

  divi.size(boksActualWidth, boksHeight);
  divi.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth * 2, boksY - boksHeight / 10);
  
  brøk.style('font-size', fontsize + 'px')
  brøk.style('text-align: center');
  brøk.style('vertical-align: center');

  brøk.size(boksActualWidth, boksHeight);
  brøk.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth * 3, boksY - boksHeight / 10);
 
  deci.style('font-size', fontsize + 'px')
  deci.style('text-align: center');
  deci.style('vertical-align: center');

  deci.size(boksActualWidth, boksHeight);
  deci.position(boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25, boksY - boksHeight / 10 + boksHeight * 1.5);

  procent.style('font-size', fontsize + 'px')
  procent.style('text-align: center');
  procent.style('vertical-align: center');

  procent.size(boksActualWidth, boksHeight);
  procent.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth * 1, boksY - boksHeight / 10 + boksHeight * 1.5);

  ligning.style('font-size', fontsize + 'px')
  ligning.style('text-align: center');
  ligning.style('vertical-align: center');

  ligning.size(boksActualWidth, boksHeight);
  ligning.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth * 2, boksY - boksHeight / 10 + boksHeight * 1.5);

  hierarki.style('font-size', fontsize + 'px')
  hierarki.style('text-align: center');
  hierarki.style('vertical-align: center');

  hierarki.size(boksActualWidth, boksHeight);
  hierarki.position((boksWidth / 2 - boksActualWidth / 2 + boksActualWidth / 25) + boksWidth * 3, boksY - boksHeight / 10 + boksHeight * 1.5);
}
