//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let a;
let time;
let count;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  time=0;
  count=0;
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    noStroke();
    fill(255);
    ellipse(b.x, b.y, b.size);
    b.x=b.x+b.vx;
    b.y=b.y+b.vy;
  }
  a={x:random(0,width),y:0,vx:random(-1.5,1.5),
  vy:random(0,3),size:random(10,20)};
  if(random(0,1)<0.5){balls.push(a);}


  time=time+1;
  if(time%100==99){count=count+5;}
  fill(255);
  rect(0,height-count,width,count);
  
  //strokeweight(5);
  //line(width/6,height-count-70-20,width/6+200,height-count-70-20-200);
  //fill(255);
  stroke(180);
  ellipse(width/6,height-count-70+20,140,140);
  ellipse(width/6,height-count-140-50+20,100,100);
  fill(0);
  ellipse(width/6-18,height-count-140-50-18+20,15,15);
  ellipse(width/6+18,height-count-140-50-18+20,15,15);
  fill(255,0,0);
  ellipse(width/6,height-count-70-17+20,20,20);
  ellipse(width/6,height-count-70+17+20,20,20);
  fill(255,140,0);
  triangle(width/6,height-count-140-50-5+20,width/6-5,height-count-140-50+20+20,width/6+5,height-count-140-50+20+20);
  fill(255,102,153);
  ellipse(width/6+45,height-count-140+20+20,20,30);
  rect(width/6-40,height-count-140+20-10,90,20);
  


}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
