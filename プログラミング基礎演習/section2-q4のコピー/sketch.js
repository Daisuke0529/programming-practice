//イスラエル
function setup() {
  const blue = color(0, 0, 255);
  createCanvas(270, 180);
  
  background(255);
  stroke(blue);
  fill(blue);
  rect(0,20,270,20);
  rect(0,140,270,20);

  stroke(blue);
  noFill();
  strokeWeight(5);
  triangle(100,70,170,70,135,110);
  triangle(100,100,170,100,135,60);
}
    