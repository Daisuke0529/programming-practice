// テキスト「キーボード操作に反応する」 
//簡単なゲームにしました　障害物に当たったら赤くなります
let x, y,v,a,b,c,d,e,f,g,sum,i;

function setup(){
  createCanvas(windowWidth, windowHeight/2);
  x = 300;
  y = height-10;
  v=8;
  a=width-100;
  b=height-60;
  b2=height-110;
  c=color(255);
  d=width+150;
  e=width+400;
  f=width+650;
  g=width+900;
  sum=0;
  i=0;
}

function draw(){
  background(160, 192, 255);
  fill(c);
  ellipse(x, y, 20);
  x = constrain(x, 0, width);
  rect(a,b,50,60);
  rect(d,b2,100,40);
  rect(e,b,30,60);
  rect(f,b2,30,40);
  rect(g,b,40,60);
  a=a-v;
  d=d-v;
  e=e-v;
  f=f-v;
  g=g-v;
  if(a<0){
    a=width;
    v=v+1;
    sum=sum+1;
  }
  if(d<0){d=width;}
  if(e<0){e=width;}
  if(f<0){f=width;}
  if(g<0){g=width;}
  
  
  
  if(dist(x,y,a+25,b+30)<35&&sum<10){c=color(255,0,0);i++;}
  if(dist(x,y,d+50,b2+20)<60&&sum<10){c=color(255,0,0);i++;}
  if(dist(x,y,e+15,b+30)<25&&sum<10){c=color(255,0,0);i++;}
  if(dist(x,y,f+15,b2+20)<25&&sum<10){c=color(255,0,0);i++;}
  if(dist(x,y,g+20,b+30)<30&&sum<10){c=color(255,0,0);i++;}

  if(i>0){text("残念！", width * 0.5, height * 0.5);}
  if(i==0&&sum>10){
    text("CLEAR", width * 0.5, height * 0.5);
  }

  
  
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
}

function keyPressed(){
  if(key==" "){y=y-80;}
}

function keyReleased(){
  if(key==" "){y=y+80;}
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
