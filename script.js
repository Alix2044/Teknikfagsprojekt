

//import distanceBetweenPoints from 'dist-two-points';
let p = document.getElementById("x")
let y = document.getElementById("y")




let planter =[solen = {
  x: 400,
  y:300,
  r:20,
}]

window.addEventListener("mousemove",function(e){
  p.innerHTML = e.x
  y.innerHTML = e.y
  console.log(`${e.x}${e.y}`);
 // const dist = distanceBetweenPoints(e.x,e.y , planter[0].solen.x, planter[0].solen.x);
  
})

//distance between to points ?





/*

document.getElementById("forside").addEventListener("click",function(event){
    var x = event.clientX - event.target.offsetLeft;
    var y = event.clientY - event.target.offsetTop;
    console.log("xhh",x,"yhh",y)

})
*/
/*var element = document.getElementById("forside");
if (element) {
  element.addEventListener("click", function() {
    console.log("hhh")
  });
} else {
    console.log(element)
  console.log("Elementet blev ikke fundet.");
}
*/
/*
const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
  console.log(pageX.innerHTML)
}

box.addEventListener("mousemove", updateDisplay);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
*/
/*

let x = document.getElementById("x")

('body').on('click', 'a', function(e){
  (this).offset().left; // x
  (this).offset().top; // y
});
*/

// How to get the position of the x and y?
/*
x.addEventListener('click', function(event) {
  var x = event.clientX;
  var y = event.clientY;
  console.log('Clicked at x=' + x + ', y=' + y);
  console.log("hhhh")
});

*/


