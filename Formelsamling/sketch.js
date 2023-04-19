let boksWidth;
let boksActualWidth;
let boksHeight;
let boksY;
//let knapværdi


let textFelter = ['Plus og Minus', 'Gange', 'Division', 'Brøker', 'Decimaltal', 'Procent', 'Ligninger','Regnehieraki'];
function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
  
  //let txt = createDiv("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!"); 
  plus = createButton("<a href='../Formelsamling/Sider/plus_minus.html'>Plus og Minus</a>");
  gange = createButton("<a href='/Formelsamling/Sider/gange.html'>Gange</a>");
  divi = createButton("<a href='/Formelsamling/Sider/divi.html'>Division</a>");
  brøk = createButton("<a href='/Formelsamling/Sider/brøk.html'>Brøker</a>");
  deci = createButton("<a href='/Formelsamling/Sider/deci.html'>Decimaltal</a>");
  procent = createButton("<a href='/Formelsamling/Sider/procent.html'>Procent</a>");
  ligning = createButton("<a href='/Formelsamling/Sider/ligning.html'>Ligninger</a>");
  hiereaki = createButton("<a href='/Formelsamling/Sider/hierarki.html'>Hierarki</a>");
}

function draw() {
  //background(220)
  bokse();
  knapper();
}

function bokse(){
  let boksWidth = (width / 4);
  let boksActualWidth = boksWidth - width / 18
  let boksHeight = (height / 4);
  let boksY = height / 4 + boksHeight / 1.5
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
  textSize(boksHeight / 5)
  noStroke();
  fill(0)
  for(let i = 0; i<=3; i++){
  text(textFelter[i], boksWidth / 2 + (boksWidth * i), boksY);
  }
  for(let i = 0; i<=3; i++){
    text(textFelter[i + 4], boksWidth / 2 + (boksWidth * i), boksY + boksHeight * 1.5);
    }
  textSize(boksHeight / 4)
  text('Formelsamling', width / 2, (boksY - (boksHeight / 2)) / 2)


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
  
}
