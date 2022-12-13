// チェッカー
function setup() {
  createCanvas(200, 200);
  let size=width/8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill((i+j)%2==0?255:180);
      rect(i*size,j*size,size,size);
      let xzahyou=size/2+i*size;
      let yzahyou=size/2+j*size;
      if(j<3&&(i+j)%2==1){
        fill(255,0,0);
        ellipse(xzahyou,yzahyou,width/10);
        }
      else if(j>4&&(i+j)%2==1){
        fill(0);
        ellipse(xzahyou,yzahyou,width/10);
        }
    }
  }
}
