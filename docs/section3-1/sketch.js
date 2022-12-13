// 横移動、ジャンプ　ゲーム作成　ブロック押したらキノコが出て、食べると大きくなる。土管で下押すとワープ。
const g = 1;
const gk=2.5;
const jump = 25;
const ground = 20;

let size;
let x, y, vy;
let gy,a;
let kinoko,xk,yk,vxk;
let dokan,dokanvy;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  size=20;
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
  gy = height - ground;
  a=color(255,160,16);
  xk=width/3+20*3+30;
  yk=gy-125;
  kinoko=0;
  vxk=2;
  dokan=0;
  dokanvy=1;
}

function draw() {
  background(220);
  
  line(0, gy, width, gy);
  line(width/3,gy-125,width*2/3,gy-125);
  fill(255,0,0);
  ellipse(x, y, size, size);
  for(let i=0;i<width/20+1;i++){
    rect(i*20-20,gy,20,ground);
    fill(160,128,96);
  }
  for(let j=0;j<width/60;j++){
    rect(width/3+20*j,gy-125,20,20); 
    if(j==3){fill(a);}
    else{fill(160,128,96);}
  }
  fill(0,160,0);
  rect(30,gy-60,60,gy-60);
  rect(width-90,gy-60,60,gy-60);
  
  y = y+vy;
  vy = vy+g;
  
  if(y>height-ground-size/2){ 
    vy = 0;
    y = height - ground - size / 2;
  }
  x = constrain(x, 0+size/2, width-size/2);
  
  
  if((width/3-15)<x&&x<(width*2/3+15)&&(gy-125-size)<y&&y<(gy-125-size/8)){
    vy=0; 
    y=gy-125-size/2;
    y=constrain(y,0,gy-125-size/2);
  }
  
  if((width/3)<x&&x<(width*2/3)&&(gy-105)<y&&y<(gy-105+size/2)){
    vy=-0.5*vy;
    y=constrain(y,gy-105+size/2,gy-size/2);
    
  }
  
  if(x<30&&y>gy-60){x=constrain(x,0,30-size/2);}
  if(90<x&&x<width-90&&y>gy-60){x=constrain(x,90+size/2,width-90-size/2);}
  if(width-30<x&&y>gy-60){x=constrain(x,width-30+size/2,width);}
  
  if(30-10<x&&x<90+10&&gy-60-size<y&&y<(gy-60-size/8)){
    vy=0; 
    y=gy-60-size/2;
    y=constrain(y,0,gy-60-size/2);
  }
  if(width-90-10<x&&x<width-30+10&&gy-60-size<y&&y<(gy-60-size/8)){
    vy=0; 
    y=gy-60-size/2;
    y=constrain(y,0,gy-60-size/2);
  }
  


  if(dist(x,y,width/3+20*3+30,gy-105)<13){
    a=color(0,0,255);
    kinoko=kinoko+1;
  }
  if(kinoko>0){
    fill(255,0,0);
    triangle(xk,yk-20,xk-10,yk,xk+10,yk);
    xk=xk+vxk;
    yk=constrain(yk,0,height-ground);
    if(xk>width*2/3+10){
      yk=yk+gk;
    }
    if(yk>=height-ground){
        yk=height-ground;
        yk=constrain(yk,0,height-ground);
    }
    if(xk>width-100&&yk==height-ground){
      vxk=vxk*(-1);
      xk=constrain(xk,100,width-100);
    }
    if(xk<100&&yk==height-ground){
      vxk=vxk*(-1);
    xk=constrain(xk,100,width-100);
    }
    
    if(dist(x,y,xk,yk-10)<20){
      size=size*2;
      kinoko=-1;
    }
    
  }
  
  if(dokan>0){
    // y=y+dokanvy;
    // if(y<gy-60-size/2-20){
      // x=width-x;
      // dokanvy=dokanvy*(-1);
    // }
    // if(y==gy-60-size/2-20){
      // dokanvy=0;
    // }
    x=width-x;
    dokan=dokan-1;
  }
  
  
  
  if(keyIsDown(LEFT_ARROW)){ x -= 4; }
  if(keyIsDown(RIGHT_ARROW)){ x += 4; }
  
  
}

function keyPressed(){
  if(key==" "&&y==height-ground-size/2){vy = -jump;}
  if(key==" "&&y==gy-60-size/2){vy = -jump;}
  if(key==" "&&y==gy-125-size/2){vy = -jump;}
  if(keyCode==DOWN_ARROW&&y==gy-60-size/2){dokan=dokan+1;}
}