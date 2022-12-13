// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();
  for(let i=1;i<11;i++){
    if(i<6){
      stroke(0,0,255);
      ellipse(50,50,i*5);
      }
    else{
      stroke(255,0,0);
      ellipse(50,50,i*5);
      }
  }
}
