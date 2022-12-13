// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300,200);
  background(0,0,128);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = width/2 + cos(theta) * height/3;
    let y = height/2 + sin(theta) * height/3;
    star(x, y, height/18);
  }
}

function star(cx, cy, r){
  noStroke();
  fill(255,215,0);
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
