// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px=dx/2, py=height-scores[0]*4; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
    if(i==0){
      ellipse(px,py,10,10);
    }
    else{
      ellipse(px+dx*i,height-scores[i]*4,10,10);
      line(px+dx*i,height-scores[i]*4,px+dx*(i-1),height-scores[i-1]*4); 
      
    }
  }
}