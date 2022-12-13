// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 50;
  v=1
}

function draw(){
  background(160, 192, 255);
  ellipse(width / 2, height / 2, cycle+count);
  count=count+v;
  if(count>50||count<0){
    v=v*(-1);  
  }
}
function mousePressed(){v=v*2;}
function mouseReleased(){v=v/2;}
  