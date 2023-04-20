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
  plus = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/plus_minus.html'>Plus og Minus</a>");
  gange = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/gange.html'>Gange</a>");
  divi = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/divi.html'>Division</a>");
  brøk = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/brøk.html'>Brøker</a>");
  deci = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/deci.html'>Decimaltal</a>");
  procent = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/procent.html'>Procent</a>");
  ligning = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/ligning.html'>Ligninger</a>");
  hierarki = createDiv("<a style='text-decoration:none' href='../Formelsamling/Sider/hierarki.html'>Hierarki</a>");
}

function draw() {
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
