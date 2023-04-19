let textFelter = ['Plus og Minus', 'Gange', 'Division', 'Brøker', 'Decimaltal', 'Procent', 'Ligninger','Regnehieraki'];
function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);
}

function draw() {
  //background(220)
  bokse();
}

function bokse(){
  let boksWidth = (width / 4);
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
    rect(boksWidth / 2 + (boksWidth * i), boksY, boksWidth - width / 18, boksHeight, cornerR);
  }
  //for loop for de 4 nederste
  for(let i = 0; i<=3; i++){
    rect(boksWidth / 2 + (boksWidth * i), boksY + boksHeight * 1.5, boksWidth - width / 18, boksHeight, cornerR);
  }

  textAlign(CENTER, CENTER);
  textSize(boksHeight / 5)
  noStroke();
  fill(0)
  //Tekst i boksende
  for(let i = 0; i<=3; i++){
  text(textFelter[i], boksWidth / 2 + (boksWidth * i), boksY);
  }
  for(let i = 0; i<=3; i++){
    text(textFelter[i + 4], boksWidth / 2 + (boksWidth * i), boksY + boksHeight * 1.5);
    }
  textSize(boksHeight / 4)
  text('Formelsamling', width / 2, (boksY - (boksHeight / 2)) / 2)
  
}