// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(0, 100);// 60以上100未満のランダムな数を代入
  }
  scores=sort(scores);
  scores=reverse(scores);
  console.log(scores);

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total=total+scores[i];
  }
  let start=-PI/2;
  for(let i=0;i<scores.length;i++){
    arc(width/2,height/2,width*0.8,height*0.8,start,start+TWO_PI*scores[i]/total,PIE);
  start=start+TWO_PI*scores[i]/total;
  console.log(start);
  }
  
  
  
  
}
