window.addEventListener("mousemove", function (e) {
  p.innerHTML = e.x;
  y.innerHTML = e.y;
  console.log(`${e.x}${e.y}`);
  // const dist = distanceBetweenPoints(e.x,e.y , planter[0].solen.x, planter[0].solen.x);
});
