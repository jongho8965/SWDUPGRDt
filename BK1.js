function setup() {
  createCanvas(500, 400);
}

//color02
//29,139,21
//color01
//47,157,39
let img
let DOBK2
//(타이머) - let TI = 60

let Q = 29
let W = 139
let E = 21

let Point = 0
let LUCK = 0
let LUCKS = 0
//let M = 0
let M = 350000
let DL = 0
let DLS = 0
//let LPO = 0

let redColor = 0;
let yPos = 0;
let xPos = 0;

let AXpos = 100;
let AYpos = 200;
let AWidth = 50;
let AHeight = 80;


let BXpos = 250
let BYpos = 150;
let BWidth = 50;
let BHeight = 80;

let HP = 10

let Xpo = 50
let Ypo = 50
let Xsp = 5
let Ysp = 7

let SG = false


function draw() {
  background(random,random,random);
  
  let ALeft = AXpos
  let ARight = AXpos + AWidth
  let AUp = AYpos
  let ABottom = AYpos + AHeight


  let BLeft = BXpos
  let BRight = BXpos + BWidth
  let BUp = BYpos
  let BBottom = BYpos + BHeight
  
      var step;
    for (step = 0; step < random(1,1); step++) {

      let q = Math.random()
      let w = random(1,400)
      let e = random(0,200)
      let r = random(1,255)
        
//-------------------------------------------------
//배경
      
      fill(q,w,q)
      circle(w,w,q)
      fill(e,w,q)
      circle(q,w,w)
      fill(q+w,q,e)
      circle(w,w,w)
      fill(q,e,w+q)
      circle(w,100,q)
      circle(q,q,w)
      circle(e,q,w)
      circle(e,w,w)
      fill(q+w,q,e)
      circle(e,e,w)
      circle(e,e,e)
      fill(q,w,e)
      circle(e,q,w)
      circle(q,w,e)
      fill(r,r,r)
      circle(e,q,e)
      fill(q+w,q,e)
      circle(e,q,q) 
      fill(r,e,w + q)
      rect(2,2,500,400)
    
  }
  fill(245,245,245)
  strokeWeight(0.7)
  rect(2,2,496,396)
  strokeWeight(1.5)

//---------------------------------------------------
  
  //버튼 오브젝트
  push();
  strokeWeight(10);
  pop();
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 100 && mouseY < 150) 
  {
    fill(200, 200, 200)
  }
  else{
    fill(255, 255, 255)
  }
  
  rect(150,100,100,50);
  
  push();
  textSize(20);
  fill(0)
  text(Point,195.3, 177);
  text("당첨횟수 : " + LUCKS,10,30);
  text("돈 : " + M,10,53);
  textSize (15)
  textStyle(BOLD)
  text("복권구매 버튼",153, 130)
  textSize(14)
//  text("위험한 복권은 70만원의 가격으로 3/1 확률로 100만원 당첨",12, 300)
//  text("또는 전재산을 가져가는 매우 위험한 버튼입니다.",46, 317)
  pop()
//---------------------------------------------------
  push();
  strokeWeight(10); 
  pop();
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 200 && mouseY < 250) 
  {
    fill(228,43,43)
  }
  else{
    fill(255, 0, 0)
  }
  
  rect(150,200,100,50);
  
  push();
  textSize(20);
  fill(0)
  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("복권 5개 구매",153, 230)
  pop()
//-------------------------------------------------
    push();
  strokeWeight(10); 
  pop();
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 300 && mouseY < 350) 
  {
    fill(29,139,21)
  }
  else{
    fill(47,157,39)
  }
  
  rect(150,300,100,50);
  
  push();
  textSize(20);
  fill(0)
  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("돈 벌기",174, 331)
  pop()
//-----------------------------------------------
      push();
  strokeWeight(10); 
  pop();
  
  if(mouseX > 260 && mouseX < 360 
     && mouseY > 300 && mouseY < 350) 
  {
    fill(29,139,21)
  }
  else{
    fill(47,157,39)
  }
  
  rect(260,300,100,50);
  
  push();
  textSize(20);
  fill(0)
  text(Point,195.3, 177);
  textSize (14)
  textStyle(BOLD)
  fill(255)
  text("당첨횟수로",275, 322)
  text("돈 충전",287, 336)
  pop()
//-----------------------------------------------
    push();
  strokeWeight(10); 
  pop();
  
  if(mouseX > 260 && mouseX < 360 
     && mouseY > 200 && mouseY < 250) 
  {
    fill(228,43,43)
  }
  else{
    fill(255, 0, 0)
  }
  
  rect(260,200,100,50);
  
  push();
  textSize(20);
  fill(0)
  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("4/1_DOBK2X",264, 230)
  pop()
//-----------------------------------------------
  
  // 점수 늘리기
  if(LUCK == 5 && SG == false) {
    LUCKS += 1
    M += 700000
    SG = true
  }
  
  // 안내판
  if(LUCK == 5)
    {
          fill (22)
    text("당첨",295, 135);
    }
  else {
    fill(22)
    textSize(30)
    text("꽝",295, 135);
  }
  
  if(M<=0) {
    fill (139,0,0)
    strokeWeight(0)
    rect (2,2,500,400)
    fill (255,255,255)
    textSize(25)
    textStyle(BOLD)
    text("GAME OVER", 178, 200)
  }
//-----------------------------------------------
  //(타이머) - TI -= deltaTime / 1000
//-----------------------------------------------
}

function mousePressed()
{
  if(mouseX > 150 && mouseX < 250 && mouseY > 100 &&   mouseY < 150){
    LUCK = floor(random(1,250));
    M -= floor(random(1,10000))
    SG = false
    Point = LUCK //임시
    //round(숫자or랜덤()) <- 반올림
    //floor(숫자or랜덤()) <- 내림
    //ceil(숫자or랜덤()) <- 올림
    //nofill() <- 안에 투명
  }
//------------------------------------------------if2
  
  if(mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 250) {

    LUCK = floor(random(0,55));
    M -= floor(random(1,10000))
    M -= floor(random(1,10000))
    M -= floor(random(1,10000))
    M -= floor(random(1,10000))
    M -= floor(random(1,10000))
    SG = false
    Point = LUCK
    
  }
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 300 && mouseY < 350) {
    M += floor(random(1,700))
  }
  
   if(mouseX > 260 && mouseX < 360 
     && mouseY > 300 && mouseY < 350) {
     if(LUCKS >= 1) {
      M += 700000
      LUCKS -= 1
     }
   }
  if(mouseX > 260 && mouseX < 360 && mouseY > 200 && mouseY < 250) {
    M -= M-floor(M/2)
    DOBK2 = floor(random(1,5))
      if(DOBK2 == 1) {
        DOBK = 0
        M = M*4
      }
  }
//----------------------------------------------if2
}

function preload() {
  img = loadImage("KONGSAN.jpg")
}

let SUD1;

function setup() {
  createCanvas (500,400)
  
}