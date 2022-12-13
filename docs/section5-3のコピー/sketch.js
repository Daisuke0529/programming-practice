const a = ["月", "火", "水", "木", "金", "土","日",];
function setup(){
  createCanvas(525, 500);
  let tuki=int(random(1,12));
  if(2<tuki&&tuki<6){background(255,192,203);}
  else if(5<tuki&&tuki<9){background(176,224,230);}
  else if(8<tuki&&tuki<12){background(222,184,135);}
  else{background(220,220,220);}
  calendar(2022,tuki);
}

function calendar(y, m){
  text(y+"年"+m+"月",width/4,15);
  for(let j=0;j<7;j++){
    text(a[j],width/14+width*j/7-7,34+25/2);
    fill(0);
    if(j==5){fill(255,0,0);}
    if(j==4){fill(0,0,255);}
  }
  for(let j=0;j<6;j++){
    line(0,30,width,30);
    line(0,55+75*j,width,55+75*j);
  }
  for(let j=0;j<6;j++){line(width*(j+1)/7,30,width*(j+1)/7,height);}
  let shu=0;
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    if(dayOfWeek(y,m,d)==5){fill(0,0,255);}
    else if(dayOfWeek(y,m,d)==6){fill(255,0,0);}
    else{fill(0);}
    text(d,width/14+width*dayOfWeek(y,m,d)/7-5,55+75/2+75*shu+2);
    if(dayOfWeek(y,m,d)==6){shu=shu+1;}
  }
  
}


function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y)?366:365;
  
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let sum=0;
  for(let i=2000;i<y;i++){
    sum=sum+daysInYear(i);
  }
  return (sum+dayOfYear(y, m, d)+4)%7;
}

function dayOfWeekAsString(dow){
  //const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
