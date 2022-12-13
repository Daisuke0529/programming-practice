//野球ゲーム　ホームラン競争
let x0,y0,x01,y01,vx0,vy0,ax0,ay0,k,kx,ky;
let p1,p2;
let x1,y1,vx1,vy1,ax1,ay1;
let scene;
let timing,time,jou;
let g;
let score1,score2,tama;
let bat1,bat2,kuru,kai;
let pit1,pit2;
let gatya1,gatya2,gatya3,gatya4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  x0=width/2-30;y0=height/8-10;
  vx0=0;
  vy0=0;
  ax0=0;
  ay0=0;
  x1=width/20;
  y1=height*(1-1/8)+10;
  vx1=0;
  vy1=0;
  ax1=0;
  ay1=0;
  k=0;
  jou=0;
  scene=-2;
  timing=3;
  time=0;
  count=0;
  score1=0;score2=0;
  tama=0;
  bat1=-1;bat2=-1;kuru=0,kai=0;
  pit1=-1;pit2=-1;
}
//バッター　イラスト
//大山
const data_oyama = [
  [0,6,6,0,0,0,0,0,0,9,9,9,9,9,0,0,0,0],
  [8,7,6,6,0,0,0,0,9,3,3,9,9,9,9,0,0,0],
  [8,7,6,6,0,0,0,9,3,9,9,9,9,9,9,10,0,0],
  [0,8,7,6,6,0,0,9,9,9,9,9,9,9,9,9,0,0],
  [0,0,8,7,6,0,0,9,9,9,9,9,10,10,10,10,10,10],
  [0,0,0,8,7,6,0,9,9,9,9,9,5,5,5,5,0,0],
  [0,0,0,0,8,7,0,9,9,4,4,9,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,9,9,4,4,4,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,0,9,9,4,4,4,4,4,4,0,0],
  [0,0,0,0,9,9,4,4,2,9,4,4,4,4,4,0,0,0],
  [0,0,0,0,9,9,4,7,9,2,9,9,1,1,0,0,0,0],
  [0,0,0,0,2,2,2,2,9,9,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,9,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,2,2,2,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,9,3,9,3,9,3,9,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0],
  [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0],
  [0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0],
  [0,0,0,0,0,0,9,9,0,0,0,0,0,9,9,0,0,0],
  [0,0,0,0,0,9,9,9,0,0,0,0,0,9,9,9,0,0],
];
function batta_oyama(mx, my){
  const h_m1 = 200 / data_oyama.length;
  for(let i = 0; i <  data_oyama.length; i++){
    const row = data_oyama[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_oyama[i][j] == 1){fill(255,215,0);}
        else if(data_oyama[i][j] == 2){fill(255,215,0);}
        else if(data_oyama[i][j] == 3){fill(255);}
        else if(data_oyama[i][j] == 4){fill(255, 222, 173);}
        else if(data_oyama[i][j] == 5){fill(222, 184, 135);}
        else if(data_oyama[i][j] == 6){fill(237, 175, 104);}
        else if(data_oyama[i][j] == 7){fill(218, 165, 32);}
        else if(data_oyama[i][j] == 8){fill(184, 134, 11);}
        else if(data_oyama[i][j] == 9){fill(0);}
        else if(data_oyama[i][j]==10){fill(255,215,0);}
        else{noFill();}
    square(mx + j * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function batta_oyama2(mx, my){
  const h_m1 = 50 / data_oyama.length;
  for(let i = 0; i <  data_oyama.length; i++){
    const row = data_oyama[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_oyama[i][j] == 1){fill(255,215,0);}
        else if(data_oyama[i][j] == 2){fill(255,215,0);}
        else if(data_oyama[i][j] == 3){fill(255);}
        else if(data_oyama[i][j] == 4){fill(255, 222, 173);}
        else if(data_oyama[i][j] == 5){fill(222, 184, 135);}
        else if(data_oyama[i][j] == 6){fill(237, 175, 104);}
        else if(data_oyama[i][j] == 7){fill(218, 165, 32);}
        else if(data_oyama[i][j] == 8){fill(184, 134, 11);}
        else if(data_oyama[i][j] == 9){fill(0);}
        else if(data_oyama[i][j]==10){fill(255,215,0);}
        else{noFill();}
    square(mx + j * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
//大谷
const data_otani = [
  [0,6,6,0,0,0,0,0,0,19,19,19,19,19,0,0,0,0],
  [8,7,6,6,0,0,0,0,19,3,3,19,19,19,19,0,0,0],
  [8,7,6,6,0,0,0,19,3,19,19,19,19,19,19,10,0,0],
  [0,8,7,6,6,0,0,19,19,19,19,19,19,19,19,19,0,0],
  [0,0,8,7,6,0,0,19,19,19,19,19,10,10,10,10,10,10],
  [0,0,0,8,7,6,0,19,19,19,19,19,5,5,5,5,0,0],
  [0,0,0,0,8,7,0,19,19,4,4,19,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,9,9,4,4,4,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,0,9,9,4,4,4,4,4,4,0,0],
  [0,0,0,0,3,3,4,4,2,9,4,4,4,4,4,0,0,0],
  [0,0,0,0,3,3,4,7,3,2,9,9,1,1,0,0,0,0],
  [0,0,0,0,2,2,2,2,3,3,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,3,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,2,2,2,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,9,3,9,3,9,3,9,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0],
  [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0],
  [0,0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0],
  [0,0,0,0,0,0,9,9,0,0,0,0,0,9,9,0,0,0],
  [0,0,0,0,0,9,9,9,0,0,0,0,0,9,9,9,0,0],
];
function batta_otani(mx, my){
  const h_m1 = 200 / data_otani.length;
  for(let i = 0; i <  data_otani.length; i++){
    const row = data_otani[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_otani[i][j] == 1){fill(255,0,0);}
        else if(data_otani[i][j] == 2){fill(255,0,0);}
        else if(data_otani[i][j] == 3){fill(255);}
        else if(data_otani[i][j] == 4){fill(255, 222, 173);}
        else if(data_otani[i][j] == 5){fill(222, 184, 135);}
        else if(data_otani[i][j] == 6){fill(237, 175, 104);}
        else if(data_otani[i][j] == 7){fill(218, 165, 32);}
        else if(data_otani[i][j] == 8){fill(184, 134, 11);}
        else if(data_otani[i][j] == 9){fill(0);}
        else if(data_otani[i][j]==10){fill(255,0,0);}
        else if(data_otani[i][j]==19){fill(255,0,0);}
        else{noFill();}
    square(mx + (18-j) * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function batta_otani2(mx, my){
  const h_m1 = 50 / data_otani.length;
  for(let i = 0; i <  data_otani.length; i++){
    const row = data_otani[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_otani[i][j] == 1){fill(255,0,0);}
        else if(data_otani[i][j] == 2){fill(255,0,0);}
        else if(data_otani[i][j] == 3){fill(255);}
        else if(data_otani[i][j] == 4){fill(255, 222, 173);}
        else if(data_otani[i][j] == 5){fill(222, 184, 135);}
        else if(data_otani[i][j] == 6){fill(237, 175, 104);}
        else if(data_otani[i][j] == 7){fill(218, 165, 32);}
        else if(data_otani[i][j] == 8){fill(184, 134, 11);}
        else if(data_otani[i][j] == 9){fill(0);}
        else if(data_otani[i][j]==10){fill(255,0,0);}
        else if(data_otani[i][j]==19){fill(255,0,0);}
        else{noFill();}
    square(mx + (18-j) * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
//大川
const data_1 = [
  [0,6,6,0,0,0,0,0,0,9,9,9,9,9,0,0,0,0],
  [8,7,6,6,0,0,0,0,9,3,3,9,9,9,9,0,0,0],
  [8,7,6,6,0,0,0,9,3,9,9,9,9,9,9,9,0,0],
  [0,8,7,6,6,0,0,9,9,9,9,9,9,9,9,9,0,0],
  [0,0,8,7,6,0,0,9,9,9,9,9,9,9,9,9,9,9],
  [0,0,0,8,7,6,0,9,9,9,9,9,5,5,5,5,0,0],
  [0,0,0,0,8,7,0,9,9,4,4,9,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,9,9,4,4,4,4,4,9,4,4,0],
  [0,0,0,0,0,4,4,0,9,9,4,4,4,4,4,4,0,0],
  [0,0,0,0,9,9,4,4,2,9,4,4,4,4,4,0,0,0],
  [0,0,0,0,9,9,4,7,9,2,9,9,1,1,0,0,0,0],
  [0,0,0,0,2,2,2,2,9,9,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,9,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,2,2,2,2,2,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,9,1,9,3,9,1,9,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,2,2,2,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,2,0,0,0,2,1,1,0,0,0],
  [0,0,0,0,0,0,9,9,0,0,0,0,0,9,9,0,0,0],
  [0,0,0,0,0,9,9,9,0,0,0,0,0,9,9,9,0,0],
];
function batta_okawa(mx, my){
  const h_m1 = 200 / data_1.length;
  for(let i = 0; i <  data_1.length; i++){
    const row = data_1[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_1[i][j] == 1){fill(192);}
        else if(data_1[i][j] == 2){fill(105);}
        else if(data_1[i][j] == 3){fill(255);}
        else if(data_1[i][j] == 4){fill(255, 222, 173);}
        else if(data_1[i][j] == 5){fill(222, 184, 135);}
        else if(data_1[i][j] == 6){fill(237, 175, 104);}
        else if(data_1[i][j] == 7){fill(218, 165, 32);}
        else if(data_1[i][j] == 8){fill(184, 134, 11);}
        else if(data_1[i][j] == 9){fill(0);}
        else{noFill();}
    square(mx + j * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function batta_okawa2(mx, my){
  const h_m1 = 50 / data_1.length;
  for(let i = 0; i <  data_1.length; i++){
    const row = data_1[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_1[i][j] == 1){fill(192);}
        else if(data_1[i][j] == 2){fill(105);}
        else if(data_1[i][j] == 3){fill(255);}
        else if(data_1[i][j] == 4){fill(255, 222, 173);}
        else if(data_1[i][j] == 5){fill(222, 184, 135);}
        else if(data_1[i][j] == 6){fill(237, 175, 104);}
        else if(data_1[i][j] == 7){fill(218, 165, 32);}
        else if(data_1[i][j] == 8){fill(184, 134, 11);}
        else if(data_1[i][j] == 9){fill(0);}
        else{noFill();}
    square(mx + j * h_m1 - 100, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
//ピッチャー　イラスト
//伊藤
const data_ito = [
  [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,3,3,3,1,1,1,1,1,3,3,3,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,3,3,1,1,1,1,1,1,1,1,1,3,3,0,0,0],
  [0,0,0,0,0,0,0,0,3,3,1,1,1,1,7,7,7,1,1,1,1,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,1,1,1,1,5,1,7,1,5,1,1,1,1,3,0,0],
  [0,0,0,0,0,0,0,0,3,1,1,1,1,5,5,7,5,5,1,1,1,1,3,0,0],
  [0,0,0,0,0,0,0,3,3,1,1,1,1,5,1,7,1,5,1,1,1,1,3,0,0],
  [0,0,0,0,0,3,3,3,5,1,1,1,5,6,6,6,5,5,5,1,1,1,3,0,0],
  [0,0,0,0,3,3,5,5,5,4,6,6,6,6,6,6,5,5,5,5,5,4,3,3,0],
  [0,0,0,3,3,5,5,5,10,4,6,6,6,4,4,4,4,4,5,5,5,4,10,3,3],
  [0,0,3,3,5,5,6,10,9,3,4,4,4,10,10,10,10,10,4,4,4,3,9,10,3],
  [0,0,3,5,5,6,5,10,8,3,9,9,9,3,9,9,9,3,9,9,9,3,9,10,3],
  [0,3,3,5,5,6,5,10,8,10,9,8,8,3,8,8,8,3,8,8,9,10,9,10,3],
  [0,3,2,3,6,5,6,5,10,10,9,8,8,8,8,8,8,8,8,8,9,10,10,3,3],
  [0,3,2,3,6,5,6,5,6,10,9,9,8,8,11,11,11,8,8,8,9,10,3,3,0],
  [3,3,2,2,2,6,5,6,6,6,10,10,9,9,11,11,11,9,9,10,10,3,3,0,0],
  
  [3,2,2,2,3,1,1,1,1,6,6,6,10,10,10,10,10,10,10,5,5,1,3,0,0],
  [3,2,2,7,2,7,3,3,1,1,1,6,6,1,6,1,12,13,12,1,1,1,3,0,0],
  [3,2,2,2,7,2,7,1,1,1,1,1,1,6,1,3,12,13,13,3,3,3,3,0,0],
  [3,2,2,2,7,2,2,2,2,2,2,2,1,1,3,1,3,12,3,3,3,3,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,3,3,3,7,3,10,10,10,10,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,7,3,3,3,9,8,8,9,10,3,0,0],
  [3,3,7,7,7,7,3,3,7,7,7,7,7,7,7,3,3,9,8,8,10,3,3,0,0],
  [0,3,1,1,1,1,3,3,1,2,2,7,2,7,2,2,3,10,9,9,9,10,7,0,0],
  [0,3,3,1,1,3,3,3,3,1,2,2,2,2,1,3,3,3,10,10,10,10,3,0,0],
  [0,0,3,3,3,3,0,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,3,3,7,7,3,3,3,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,1,2,2,2,2,1,3,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,1,1,7,7,7,7,1,1,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,1,1,1,1,1,1,1,1,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,3,1,1,1,1,1,1,3,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
];
function pitya_ito(mx, my){
  const h_m1 = 150 / data_ito.length;
  for(let i = 0; i <  data_ito.length; i++){
    const row = data_ito[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_ito[i][j] == 1){fill(0);}
        else if(data_ito[i][j] == 2){fill(192);}
        else if(data_ito[i][j] == 3){fill(0);}
        else if(data_ito[i][j] == 4){fill(255, 180, 0);}
        else if(data_ito[i][j] == 5){fill(255, 215, 0);}
        else if(data_ito[i][j] == 6){fill(255, 255, 0);}
        else if(data_ito[i][j] == 7){fill(255);}
        else if(data_ito[i][j] == 8){fill(255, 228, 196);}
        else if(data_ito[i][j] == 9){fill(255, 222, 179);}
        else if(data_ito[i][j]==10){fill(210,180,140);}
        else if(data_ito[i][j]==11){fill(210,105,30);}
        else if(data_ito[i][j]==12){fill(205,133,63);}
        else if(data_ito[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + (24-j) * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function pitya_ito2(mx, my){
  const h_m1 = 37.5 / data_ito.length;
  for(let i = 0; i <  data_ito.length; i++){
    const row = data_ito[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_ito[i][j] == 1){fill(0);}
        else if(data_ito[i][j] == 2){fill(192);}
        else if(data_ito[i][j] == 3){fill(0);}
        else if(data_ito[i][j] == 4){fill(255, 180, 0);}
        else if(data_ito[i][j] == 5){fill(255, 215, 0);}
        else if(data_ito[i][j] == 6){fill(255, 255, 0);}
        else if(data_ito[i][j] == 7){fill(255);}
        else if(data_ito[i][j] == 8){fill(255, 228, 196);}
        else if(data_ito[i][j] == 9){fill(255, 222, 179);}
        else if(data_ito[i][j]==10){fill(210,180,140);}
        else if(data_ito[i][j]==11){fill(210,105,30);}
        else if(data_ito[i][j]==12){fill(205,133,63);}
        else if(data_ito[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + (24-j) * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
//大谷
const data_otani2 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,3,3,3,6,6,6,6,6,3,3,3,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,3,3,6,6,6,6,6,6,6,6,6,3,3,0,0,0],
  [0,0,0,0,0,0,0,0,3,3,6,6,6,6,6,5,6,6,6,6,6,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,6,6,6,6,6,6,5,6,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,0,0,0,3,6,6,6,6,6,5,6,5,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,0,0,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,3,3,3,5,6,6,6,5,5,5,5,5,5,5,6,6,6,3,0,0],
  [0,0,0,0,3,3,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4,3,3,0],
  [0,0,0,3,3,5,5,5,10,4,5,5,5,4,4,4,4,4,5,5,5,4,10,3,3],
  [0,0,3,3,5,5,6,10,9,3,4,4,4,10,10,10,10,10,4,4,4,3,9,10,3],
  [0,0,3,5,5,6,5,10,8,3,9,9,9,3,9,9,9,3,9,9,9,3,9,10,3],
  [0,3,3,5,5,6,5,10,8,10,9,8,8,3,8,8,8,3,8,8,9,10,9,10,3],
  [0,3,2,3,6,5,6,5,10,10,9,8,8,8,8,8,8,8,8,8,9,10,10,3,3],
  [0,3,2,3,6,5,6,5,6,10,9,9,8,8,11,11,11,8,8,8,9,10,3,3,0],
  [3,3,2,2,2,6,5,6,6,6,10,10,9,9,11,11,11,9,9,10,10,3,3,0,0],
  
  [3,2,2,2,3,1,1,1,1,6,6,6,10,10,10,10,10,10,10,5,5,1,3,0,0],
  [3,2,2,7,2,7,3,3,1,1,1,6,6,1,6,1,12,13,12,1,1,1,3,0,0],
  [3,2,2,2,7,2,7,1,1,1,1,1,1,6,1,3,12,13,13,3,3,3,3,0,0],
  [3,2,2,2,7,2,2,2,2,2,2,2,1,1,3,1,3,12,3,3,3,3,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,3,3,3,7,3,10,10,10,10,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,7,3,3,3,9,8,8,9,10,3,0,0],
  [3,3,7,7,7,7,3,3,7,7,7,7,7,7,7,3,3,9,8,8,10,3,3,0,0],
  [0,3,1,1,1,1,3,3,1,2,2,7,2,7,2,2,3,10,9,9,9,10,7,0,0],
  [0,3,3,1,1,3,3,3,3,1,2,2,2,2,1,3,3,3,10,10,10,10,3,0,0],
  [0,0,3,7,7,3,0,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,3,3,7,7,3,3,3,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,7,2,2,2,2,7,3,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,7,7,7,7,7,7,7,7,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,7,7,7,7,7,7,7,7,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,3,7,7,7,7,7,7,3,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
];
function pitya_otani(mx, my){
  const h_m1 = 150 / data_otani2.length;
  for(let i = 0; i <  data_otani2.length; i++){
    const row = data_otani2[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_otani2[i][j] == 1){fill(0);}
        else if(data_otani2[i][j] == 2){fill(192);}
        else if(data_otani2[i][j] == 3){fill(0);}
        else if(data_otani2[i][j] == 4){fill(178, 34, 34);}
        else if(data_otani2[i][j] == 5){fill(178, 34, 34);}
        else if(data_otani2[i][j] == 6){fill(255, 0, 0);}
        else if(data_otani2[i][j] == 7){fill(255);}
        else if(data_otani2[i][j] == 8){fill(255, 228, 196);}
        else if(data_otani2[i][j] == 9){fill(255, 222, 179);}
        else if(data_otani2[i][j]==10){fill(210,180,140);}
        else if(data_otani2[i][j]==11){fill(210,105,30);}
        else if(data_otani2[i][j]==12){fill(205,133,63);}
        else if(data_otani2[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + j * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function pitya_otani2(mx, my){
  const h_m1 = 37.5 / data_otani2.length;
  for(let i = 0; i <  data_otani2.length; i++){
    const row = data_otani2[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_otani2[i][j] == 1){fill(0);}
        else if(data_otani2[i][j] == 2){fill(192);}
        else if(data_otani2[i][j] == 3){fill(0);}
        else if(data_otani2[i][j] == 4){fill(178, 34, 34);}
        else if(data_otani2[i][j] == 5){fill(178, 34, 34);}
        else if(data_otani2[i][j] == 6){fill(255, 0, 0);}
        else if(data_otani2[i][j] == 7){fill(255);}
        else if(data_otani2[i][j] == 8){fill(255, 228, 196);}
        else if(data_otani2[i][j] == 9){fill(255, 222, 179);}
        else if(data_otani2[i][j]==10){fill(210,180,140);}
        else if(data_otani2[i][j]==11){fill(210,105,30);}
        else if(data_otani2[i][j]==12){fill(205,133,63);}
        else if(data_otani2[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + j * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
//三浦
const data_miura = [
  [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,3,3,3,6,6,6,6,6,3,3,3,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,3,3,6,6,6,6,6,6,6,6,6,3,3,0,0,0],
  [0,0,0,0,0,0,0,0,3,3,6,6,6,6,6,6,6,6,6,6,6,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,0,0,0,3,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,0,0,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0],
  [0,0,0,0,0,3,3,3,5,6,6,6,3,3,3,3,3,3,3,6,6,6,3,0,0],
  [0,0,0,0,3,3,5,5,5,4,3,3,3,3,3,3,3,3,3,3,3,4,3,3,0],
  [0,0,0,3,3,5,5,5,10,4,3,3,3,4,4,4,4,4,3,3,3,4,10,3,3],
  [0,0,3,3,5,5,6,10,9,3,4,4,4,10,10,10,10,10,4,4,4,3,9,10,3],
  [0,0,3,5,5,6,5,10,8,3,9,9,9,3,9,9,9,3,9,9,9,3,9,10,3],
  [0,3,3,5,5,6,5,10,8,10,9,8,8,3,8,8,8,3,8,8,9,10,9,10,3],
  [0,3,2,3,6,5,6,5,10,10,9,8,8,8,8,8,8,8,8,8,9,10,10,3,3],
  [0,3,2,3,6,5,6,5,6,10,9,9,8,8,11,11,11,8,8,8,9,10,3,3,0],
  [3,3,2,2,2,6,5,6,6,6,10,10,9,9,11,11,11,9,9,10,10,3,3,0,0],
  
  [3,2,2,2,3,1,1,1,1,6,6,6,10,10,10,10,10,10,10,5,5,1,3,0,0],
  [3,2,2,7,2,7,3,3,1,1,1,6,6,1,6,1,12,13,12,1,1,1,3,0,0],
  [3,2,2,2,7,2,7,1,1,1,1,1,1,6,1,3,12,13,13,3,3,3,3,0,0],
  [3,2,2,2,7,2,2,2,2,2,2,2,1,1,3,1,3,12,3,3,3,3,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,3,3,3,7,3,10,10,10,10,3,0,0],
  [3,7,7,7,7,7,7,3,3,7,7,7,7,7,3,3,3,9,8,8,9,10,3,0,0],
  [3,3,7,7,7,7,3,3,7,7,7,7,7,7,7,3,3,9,8,8,10,3,3,0,0],
  [0,3,1,1,1,1,3,3,1,2,2,7,2,7,2,2,3,10,9,9,9,10,7,0,0],
  [0,3,3,1,1,3,3,3,3,1,2,2,2,2,1,3,3,3,10,10,10,10,3,0,0],
  [0,0,3,3,3,3,0,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,0,0],
  [0,0,0,0,0,0,0,0,3,3,3,7,7,3,3,3,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,3,2,2,2,2,3,3,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,5,5,7,7,7,7,5,5,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,5,5,5,5,5,5,5,5,3,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,5,5,5,5,5,5,5,5,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
];
function pitya_miura(mx, my){
  const h_m1 = 150 / data_miura.length;
  for(let i = 0; i <  data_miura.length; i++){
    const row = data_miura[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_miura[i][j] == 1){fill(0);}
        else if(data_miura[i][j] == 2){fill(192);}
        else if(data_miura[i][j] == 3){fill(0);}
        else if(data_miura[i][j] == 4){fill(128);}
        else if(data_miura[i][j] == 5){fill(100);}
        else if(data_miura[i][j] == 6){fill(255);}
        else if(data_miura[i][j] == 7){fill(255);}
        else if(data_miura[i][j] == 8){fill(255, 228, 196);}
        else if(data_miura[i][j] == 9){fill(255, 222, 179);}
        else if(data_miura[i][j]==10){fill(210,180,140);}
        else if(data_miura[i][j]==11){fill(210,105,30);}
        else if(data_miura[i][j]==12){fill(205,133,63);}
        else if(data_miura[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + j * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}
function pitya_miura2(mx, my){
  const h_m1 = 37.5 / data_miura.length;
  for(let i = 0; i <  data_miura.length; i++){
    const row = data_miura[i];
    strokeWeight(0);
    for(let j =0; j <  row.length; j++){
        if(data_miura[i][j] == 1){fill(0);}
        else if(data_miura[i][j] == 2){fill(192);}
        else if(data_miura[i][j] == 3){fill(0);}
        else if(data_miura[i][j] == 4){fill(128);}
        else if(data_miura[i][j] == 5){fill(100);}
        else if(data_miura[i][j] == 6){fill(255);}
        else if(data_miura[i][j] == 7){fill(255);}
        else if(data_miura[i][j] == 8){fill(255, 228, 196);}
        else if(data_miura[i][j] == 9){fill(255, 222, 179);}
        else if(data_miura[i][j]==10){fill(210,180,140);}
        else if(data_miura[i][j]==11){fill(210,105,30);}
        else if(data_miura[i][j]==12){fill(205,133,63);}
        else if(data_miura[i][j]==13){fill(244,164,96);}
        else{noFill();}
    square(mx + j * h_m1 - 100 / 2, my + i * h_m1 - 100 - 10, h_m1);
    }
  }
}

function draw() {
  //スタート
  if(scene==-2){
    background(255);
    textSize(32);
    fill(255,0,0);
    fill(0);
    text("Click to start", width / 2, height*7/8);
    textSize(100);
    fill(255,0,0);
    stroke(255, 165, 0);
    text("ホームランダービー", width / 2, height / 2);
    noStroke();
  }
  //操作説明
  if(scene==-2.1){
    background(245,245,220);
    jou+=1;
    textSize(32);
    fill(255,0,0);
    text("操作説明",width/4,height/4);
    fill(0);
    text("Aで投げる",width/2,height/2-40);
    text("カーソルを合わせてタイミング良くクリックすると打つ",width/2,height/2);
    text("選手によって球速や弾道が変化するよ!",width/2,height/2+40);
    text("Click to next",width/2,height*7/8);
  }
  //先攻バッターガチャ
  if(scene==-1){
    background(245,245,220);
    textSize(32);
    fill(0);
    text("Aを押してバッターを決めよう!",width/2,height/8);
    textSize(50);
    text("先攻",width/8,height/8);
    kuru+=1;
    if(kuru%3==0&&bat1==-1){batta_okawa(width/2,height/2);textSize(50);fill(0);text("野球少年 大川",width/2,height*3/4);}
    if(kuru%3==1&&bat1==-1){batta_oyama(width/2,height/2);textSize(50);fill(0);text("プロ野球選手 大山",width/2,height*3/4);}
    if(kuru%3==2&&bat1==-1){batta_otani(width/2,height/2);textSize(50);fill(0);text("最強打者 大谷",width/2,height*3/4);}
    if(gatya1<0.25){bat1=0;batta_okawa(width/2,height/2);textSize(50);fill(255,0,0);text("野球少年 大川",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.25<=gatya1&&gatya1<0.85){bat1=1;batta_oyama(width/2,height/2);textSize(50);fill(255,0,0);text("プロ野球選手 大山",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.85<=gatya1){bat1=2;batta_otani(width/2,height/2);textSize(50);fill(255,0,0);text("最強打者 大谷",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}

    if(kai==0&&keyIsDown("A".charCodeAt(0))){
      gatya1=random(0,1);
      kai+=1;
    }
  }
  //先攻ピッチャーガチャ
  if(scene==-1.1){
    background(245,245,220);
    textSize(32);
    fill(0);
    text("Aを押してピッチャーを決めよう!",width/2,height/8);
    textSize(50);
    text("先攻",width/8,height/8);
    kuru+=1;
    if(kuru%3==0&&pit1==-1){pitya_miura(width/2,height/2);textSize(50);fill(0);text("少年野球のエース 三浦",width/2,height*3/4);}
    if(kuru%3==1&&pit1==-1){pitya_ito(width/2,height/2);textSize(50);fill(0);text("プロ野球選手 伊藤",width/2,height*3/4);}
    if(kuru%3==2&&pit1==-1){pitya_otani(width/2,height/2);textSize(50);fill(0);text("最強投手 大谷",width/2,height*3/4);}
    if(gatya3<0.25){pit1=0;pitya_miura(width/2,height/2);textSize(50);fill(255,0,0);text("少年野球のエース 三浦",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.25<=gatya3&&gatya3<0.85){pit1=1;pitya_ito(width/2,height/2);textSize(50);fill(255,0,0);text("プロ野球選手 伊藤",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.85<=gatya3){pit1=2;pitya_otani(width/2,height/2);textSize(50);fill(255,0,0);text("最強投手 大谷",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}

    if(kai==1&&keyIsDown("A".charCodeAt(0))){
      gatya3=random(0,1);
      kai+=1;
    }
  }
  //後攻バッターガチャ
  if(scene==-1.2){
    background(245,245,220);
    textSize(32);
    fill(0);
    text("Aを押してバッターを決めよう!",width/2,height/8);
    textSize(50);
    text("後攻",width/8,height/8);
    kuru+=1;
    if(kuru%3==0&&bat2==-1){batta_okawa(width/2,height/2);textSize(50);fill(0);text("野球少年 大川",width/2,height*3/4);}
    if(kuru%3==1&&bat2==-1){batta_oyama(width/2,height/2);textSize(50);fill(0);text("プロ野球選手 大山",width/2,height*3/4);}
    if(kuru%3==2&&bat2==-1){batta_otani(width/2,height/2);textSize(50);fill(0);text("最強打者 大谷",width/2,height*3/4);}
    if(gatya2<0.25){bat2=0;batta_okawa(width/2,height/2);textSize(50);fill(255,0,0);text("野球少年 大川",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.25<=gatya2&&gatya2<0.85){bat2=1;batta_oyama(width/2,height/2);textSize(50);fill(255,0,0);text("プロ野球選手 大山",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.85<=gatya2){bat2=2;batta_otani(width/2,height/2);textSize(50);fill(255,0,0);text("最強打者 大谷",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}

    if(kai==2&&keyIsDown("A".charCodeAt(0))){
      gatya2=random(0,1);
      kai+=1;
    }
  }
  //後攻ピッチャーガチャ
  if(scene==-1.3){
    background(245,245,220);
    textSize(32);
    fill(0);
    text("Aを押してピッチャーを決めよう!",width/2,height/8);
    textSize(50);
    text("後攻",width/8,height/8);
    kuru+=1;
    if(kuru%3==0&&pit2==-1){pitya_miura(width/2,height/2);textSize(50);fill(0);text("少年野球のエース 三浦",width/2,height*3/4);}
    if(kuru%3==1&&pit2==-1){pitya_ito(width/2,height/2);textSize(50);fill(0);text("プロ野球選手 伊藤",width/2,height*3/4);}
    if(kuru%3==2&&pit2==-1){pitya_otani(width/2,height/2);textSize(50);fill(0);text("最強投手 大谷",width/2,height*3/4);}
    if(gatya4<0.25){pit2=0;pitya_miura(width/2,height/2);textSize(50);fill(255,0,0);text("少年野球のエース 三浦",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.25<=gatya4&&gatya4<0.85){pit2=1;pitya_ito(width/2,height/2);textSize(50);fill(255,0,0);text("プロ野球選手 伊藤",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}
    if(0.85<=gatya4){pit2=2;pitya_otani(width/2,height/2);textSize(50);fill(255,0,0);text("最強投手 大谷",width/2,height*3/4);textSize(32);fill(0);text("Click to next",width/2,7/8*height);}

    if(kai==3&&keyIsDown("A".charCodeAt(0))){
      gatya4=random(0,1);
      kai+=1;
    }
  }
  //打撃
  if(scene==0){
    //グラウンド　芝
    background(50, 205, 50);
    //グラウンド　土
    noStroke();
    fill(139, 69, 19);
    ellipse(width/2,height*7/8,700,400);
    ellipse(width/2,height/9,400,200);
    //ホームベース
    fill(255);
    rect(width/2-60, height*7/8-60,120,30);
    triangle(width/2-60,height*7/8-30,width/2+60,height*7/8-30,width/2,height*7/8);
    rect(width/2-30,height/9-40,60,10);
    //バッターボックス
    strokeWeight(5);
    stroke(255);
    noFill();
    rect(width/2+100, height*7/8-80,120,140);
    rect(width/2-220, height*7/8-80,120,140);
    line(width/2+160,height*7/8-80,width,height*1/3);
    line(width/2-160,height*7/8-80,0,height*1/3);
    line(width/2+120,height*7/8+60,width/2+120,height);
    line(width/2-120,height*7/8+60,width/2-120,height);

    strokeWeight(3);
    textSize(32);
    if(tama<5){
      noStroke();
      fill(255,0,0);
      rect(3/4*width-70,height/4-15,5,30);
      fill(255);
      stroke(0);
      text("残り"+floor(5-tama)+"球",3/4*width,height/4-50);
      if(bat1==0){batta_okawa(width/2-165,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大川",3/4*width,3/4*height);}
      if(bat1==1){batta_oyama(width/2-165,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大山",3/4*width,3/4*height);}
      if(bat1==2){batta_otani(width/2+175,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大谷",3/4*width,3/4*height);}
      if(pit2==0){pitya_miura(width/2,height/8);strokeWeight(2);textSize(32);fill(255);text("三浦",1/4*width,1/4*height);}
      if(pit2==1){pitya_ito(width/2-20,height/8);strokeWeight(2);textSize(32);fill(255);text("伊藤",1/4*width,1/4*height);}
      if(pit2==2){pitya_otani(width/2,height/8);strokeWeight(2);textSize(32);fill(255);text("大谷",1/4*width,1/4*height);}
    }
    else if(tama>4){ 
      noStroke();
      fill(255,0,0);
      rect(3/4*width-70,height/4+20,5,30);
      fill(255);
      stroke(0);
      text("残り"+floor(10-tama)+"球",3/4*width,height/4-50);
      if(bat2==0){batta_okawa(width/2-165,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大川",3/4*width,3/4*height);}
      if(bat2==1){batta_oyama(width/2-165,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大山",3/4*width,3/4*height);}
      if(bat2==2){batta_otani(width/2+175,height*7/8-80);strokeWeight(2);textSize(32);fill(255);text("大谷",3/4*width,3/4*height);}
      if(pit1==0){pitya_miura(width/2,height/8);strokeWeight(2);textSize(32);fill(255);text("三浦",1/4*width,1/4*height);}
      if(pit1==1){pitya_ito(width/2-20,height/8);strokeWeight(2);textSize(32);fill(255);text("伊藤",1/4*width,1/4*height);}
      if(pit1==2){pitya_otani(width/2,height/8);strokeWeight(2);textSize(32);fill(255);text("大谷",1/4*width,1/4*height);}
    }
    fill(255);
    strokeWeight(2);
    stroke(0);
    text("先攻 : "+floor(score1),3/4*width,height/4);
    text("後攻 : "+floor(score2),3/4*width,height/4+35);
    
    time=0;
    x0+=vx0;
    y0-=vy0;
    vx0+=ax0;
    vy0-=ay0;

    //カーソル　バット
    noStroke();
    fill('rgba(160, 192, 255,1)');
    mouseX=constrain(mouseX,width/2-60,width/2+60);
    mouseY=constrain(mouseY,height/2,height/2+160);
    if(tama<6){
      if(bat1!=2){quad(mouseX-90,mouseY-7, mouseX+50,mouseY-12,mouseX+50,mouseY+12,mouseX-90,mouseY+7);}
      if(bat1==2){quad(mouseX+90,mouseY+7, mouseX-50,mouseY+12,mouseX-50,mouseY-12,mouseX+90,mouseY-7);}
    }
    if(tama>5){
      if(bat2!=2){quad(mouseX-90,mouseY-7, mouseX+50,mouseY-12,mouseX+50,mouseY+12,mouseX-90,mouseY+7);}
      if(bat2==2){quad(mouseX+90,mouseY+7, mouseX-50,mouseY+12,mouseX-50,mouseY-12,mouseX+90,mouseY-7);}
    }
    //カーソル　中心
    fill(255);
    strokeWeight(1);
    ellipse(mouseX,mouseY,3,3);
    strokeWeight(3);
    stroke(255);
    //カーソル　丸
    noFill();
    ellipse(mouseX,mouseY,25);

    //ストライクゾーン
    strokeWeight(1);
    stroke(255);
    noFill();
    rect(width/2-60,height/2,120,160);
    
    //投げるボール
    noStroke();
    fill(255);
    strokeWeight(3);
    ellipse(x0,y0,15);
    //球速変更
    if(pit1==0){p1=70;}
    if(pit1==1){p1=50;}
    if(pit1==2){p1=35;}
    if(pit2==0){p2=70;}
    if(pit2==1){p2=50;}
    if(pit2==2){p2=35;}
    if(count==0&&keyIsDown("A".charCodeAt(0))){
      kx=random(-50,50);
      ky=random(10,150);
      count+=1;
      tama+=1;
      if(tama<6){
        vx0=(kx+width/2-x0)/p2;
        vy0=-(ky+height/2-y0)/p2;
      }
      if(tama>5){
        vx0=(kx+width/2-x0)/p1;
        vy0=-(ky+height/2-y0)/p1;
      }
    } 
    //ゾーンのボール
    stroke(0);
    fill(255);
    ellipse(kx+width/2,ky+height/2,22);
    //空降り
    if(y0>height){timing=4;scene=1;}
  }
  //打球
  if(scene==1){
    console.log(timing);
    time+=1;
    background(160,192,255);
    //スタンド　奥
    fill(200);
    rect(0,height/2,width,500);
    //内野
    fill(139, 69, 19);
    rect(0,height-40,width*7/24,50);
    //外野
    fill(50, 205, 50);
    rect(width*7/24,height-40,14/24*width,50);
    //スタンド　手前
    fill(128);
    triangle(7/8*width+50,height,width,height-200,width,height);
    rect(width*7/8,height-40,width/4,50);
    rect(3/4*width,height/2-100,20,100);
    rect(3/4*width-60,height/2-200,140,100);
    for(let i=0;i<6;i++){
      rect(20+200*i,height/2+20,130,130);
    }
    //ライト
    fill(255);
    for(let j=0;j<5;j++){
      for(let i=0;i<7;i++){
        ellipse(3/4*width-60+10+20*i,height/2-200+10+20*j,15,15);
      }
    }
    //フェンス
    fill(0,100,0);
    rect(7/8*width,height-100,20,100);
    fill(0,128,0);
    rect(7/8*width+10,height-170,10,70);
    fill(255,215,0);
    rect(7/8*width+10,height-180,10,10);
    
    
    noStroke();
    fill(255);
    ellipse(x1,y1,15);
    x1+=vx1;
    y1-=vy1;
    vx1+=ax1;
    vy1-=ay1;
    ax1-=k*vx1;
    ay1+=k*vy1;
    g1=0.2;
    if(tama<6){
      //少年　大川　一人目
      if(bat1==0){
        batta_okawa2(120,height+20);
        strokeWeight(1);
        //フライ1
        if(timing==0){
          vx1=7;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //フライ2
        if(timing==1){
          vx1=10;vy1=12;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //ホームラン
        if(timing==2){
          vx1=10;vy1=14;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=12;vy1=4;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      //プロ　大山　一人目
      if(bat1==1){
        batta_oyama2(120,height+20);
        strokeWeight(1);
        //フライ
        if(timing==0){
          vx1=8;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //ホームラン1
        if(timing==1){
          vx1=9.5;vy1=15.2;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ホームラン2
        if(timing==2){
          vx1=11;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=14;vy1=6;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      ///最強　大谷　一人目
      if(bat1==2){
        batta_otani2(120,height+20);
        strokeWeight(1);
        //ホームラン3
        if(timing==0){
          vx1=10;vy1=17;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ホームラン1
        if(timing==1){
          vx1=10;vy1=15.2;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ホームラン2
        if(timing==2){
          vx1=11;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
          score1+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=20;vy1=6;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      //少年　三浦
      if(pit2==0){pitya_miura2(width/6,height+34);strokeWeight(1);}
      //プロ　伊藤
      if(pit2==1){pitya_ito2(width/6,height+34);strokeWeight(1);}
      //最強　大谷
      if(pit2==2){pitya_otani2(width/6,height+34);strokeWeight(1);}
    }
    if(tama>5){
      //少年　大川　二人目
      if(bat2==0){
        batta_okawa2(120,height+20);
        strokeWeight(1);
        //フライ1
        if(timing==0){
          vx1=7;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //フライ2
        if(timing==1){
          vx1=10;vy1=12;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //ホームラン
        if(timing==2){
          vx1=10;vy1=14;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=12;vy1=4;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      //プロ　大山　二人目
      if(bat2==1){
        batta_oyama2(120,height+20);
        strokeWeight(1);
        //フライ
        if(timing==0){
          vx1=8;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
        //ホームラン1
        if(timing==1){
          vx1=9.5;vy1=15.2;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ホームラン2
        if(timing==2){
          vx1=11;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=14;vy1=6;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      ///最強　大谷　二人目
      if(bat2==2){
        batta_otani2(120,height+20);
        strokeWeight(1);
        //ホームラン3
        if(timing==0){
          vx1=10;vy1=17;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ホームラン1
        if(timing==1){
          vx1=10;vy1=15.2;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ホームラン2
        if(timing==2){
          vx1=11;vy1=16;
          ay1=g1;
          k=0.00005;
          timing=100;
          score2+=1;
        }
        //ゴロ
        if(timing==3){
          vx1=20;vy1=6;
          ay1=g1;
          k=0.00005;
          timing=100;
        }
      }
      //少年　三浦
      if(pit1==0){pitya_miura2(width/6,height+34);strokeWeight(1);}
      //プロ　伊藤
      if(pit1==1){pitya_ito2(width/6,height+34);strokeWeight(1);}
      //最強　大谷
      if(pit1==2){pitya_otani2(width/6,height+34);strokeWeight(1);}
    }
    //空振り
    if(timing==4){
      timing=100;
    }
    if(7/8*width<x1&&x1<7/8*width+20&&y1>height-185){vx1=vx1*(-1);}
    if(y1>height-40){vy1=vy1*(-0.3);vx1=vx1*(0.9);y1=constrain(y1,-100,height-40);}
    if(x1>7/8*width+20&&y1==height-40){x1=constrain(x1,7/8*width+40,7/8*width+100);}
    if(time>200&&7/8*width+20<x1){
      textSize(100);
      fill(255,0,0);
      stroke(255, 165, 0);
      strokeWeight(3);
      text("ホームラン!",width/2,height*3/8);
      noStroke();
    }
    if(350<time&&time<450){scene=0;x0=width/2-30;y0=height/8-10;vx0=0;vy0=0;ax0=0;ay0=0;
    x1=width/20;y1=height*(1-1/8);vx1=0;vy1=0;ax1=0;ay1=0;count=0;
    if(tama<6&&pit2==1){x0=width/2+30;y0=height/8-10;}
    if(tama>5&&pit1==1){x0=width/2+30;y0=height/8-10;}
    if(tama==10){scene=2;}
  }

  }
  //結果　前
  if(scene==2){
    background(245,245,220);
    fill(0);
    textSize(100);
    text("結果発表!",width/2,height/2);
    textSize(20);
    text("Click to next",width/2,3/4*height);
  }
  //結果　後
  if(scene==3){
    background(221, 160, 221);
    stroke(0);
    fill(0);
    textSize(50);
    strokeWeight(1);
    text("先攻",width/4,height/4);
    text("後攻",3/4*width,height/4);
    if(bat1==0){textSize(32);text("バッター : 大川",1/4*width,3/4*height);}
    if(bat1==1){textSize(32);text("バッター : 大山",1/4*width,3/4*height);}
    if(bat1==2){textSize(32);text("バッター : 大谷",1/4*width,3/4*height);}
    if(pit1==0){textSize(32);text("ピッチャー : 三浦",1/4*width,3/4*height+50);}
    if(pit1==1){textSize(32);text("ピッチャー : 伊藤",1/4*width,3/4*height+50);}
    if(pit1==2){textSize(32);text("ピッチャー : 大谷",1/4*width,3/4*height+50);}
    if(bat2==0){textSize(32);text("バッター : 大川",3/4*width,3/4*height);}
    if(bat2==1){textSize(32);text("バッター : 大山",3/4*width,3/4*height);}
    if(bat2==2){textSize(32);text("バッター : 大谷",3/4*width,3/4*height);}
    if(pit2==0){textSize(32);text("ピッチャー : 三浦",3/4*width,3/4*height+50);}
    if(pit2==1){textSize(32);text("ピッチャー : 伊藤",3/4*width,3/4*height+50);}
    if(pit2==2){textSize(32);text("ピッチャー : 大谷",3/4*width,3/4*height+50);}
    textSize(200);
    fill(255, 215, 0);
    stroke(255, 165, 0);
    strokeWeight(5);
    text(floor(score1),width/4,height/2);
    text(floor(score2),3/4*width,height/2);
    rect(width/2-45,height/2-10,90,20);
    if(score1>score2){
      textSize(100);
      text("WIN!",width/4+100,height/4-60);
    }
    if(score1<score2){
      textSize(100);
      text("WIN!",width*3/4+100,height/4-60);
    }
    if(score1==score2){
      textSize(100);
      stroke(50, 205, 50);
      fill(152, 251, 152);
      text("DRAW!",width/2,height/4-50);
    }
  }
}
function mouseClicked() {
  if(scene==-2){scene=-2.1;}
  if(scene==-2.1&&jou>10){scene=-1;}
  if(scene==-1&&0<=bat1){scene=-1.1;}
  if(scene==-1.1&&0<=pit1){scene=-1.2;}
  if(scene==-1.2&&0<=bat2){scene=-1.3;}
  if(scene==-1.3&&0<=pit2){
    if(pit2==1){x0=width/2+30;y0=height/8-10;}
    scene=0;}
  if(scene==0){
    //フライ
    if(12<dist(x0,y0,mouseX,mouseY)&&dist(x0,y0,mouseX,mouseY)<=22&&dist(mouseX,mouseY,kx+width/2,ky+height/2)<=25){timing=0;scene=1;}
    //ホームラン1
    if(7<dist(x0,y0,mouseX,mouseY)&&dist(x0,y0,mouseX,mouseY)<=12&&dist(mouseX,mouseY,kx+width/2,ky+height/2)<=12){timing=1;scene=1;}
    //ホームラン2
    if(dist(x0,y0,mouseX,mouseY)<=7&&dist(mouseX,mouseY,kx+width/2,ky+height/2)<=8){timing=2;scene=1;}
    //ゴロ
    if(22<dist(x0,y0,mouseX,mouseY)&&dist(x0,y0,mouseX,mouseY)<=50&&dist(mouseX,mouseY,kx+width/2,ky+height/2)<=60){timing=3;scene=1;}
  }
  if(scene==2){scene=3;}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}