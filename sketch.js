//rp.of_JHJH
//JHJH - NGR
//10 | 종호종호 제작!
//무단 배포및 무단 복제시
//죽여버릴거야 (=
//이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">크리에이티브 커먼즈 저작자표시-비영리-변경금지 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//비상업적
//비상업적
//비상업적
//비상업적
//비상업적
//비상업적
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .
//다음 조건에 따라:
//저작자 표시 — 적절한 크레딧을 제공하고 라이센스에 대한 링크를 제공하고 변경 사항이 있는지 //표시해야 합니다 . 귀하는 합당한 방식으로 그렇게 할 수 있지만 라이선스 제공자가 귀하 또는 //귀하의 사용을 보증한다고 제안하는 방식은 아닙니다.

//비상업적 — 자료를 상업적 목적 으로 사용할 수 없습니다 .
//
//NoDerivatives — 자료를 리믹스, 변형 또는 빌드하는 경우 수정된 자료를 배포할 수 없습니다.

//추가 제한 없음 — 다른 사람이 라이선스에서 허용하는 모든 행위를 법적으로 제한하는 법적 조건이나 기술적 조치를 적용할 수 없습니다 .


//https://jongho8965.github.io/NeoAD/

let adtime = 10; // 광고가 표시될 시간 (초)
let adText = "NeoAD"; // 표시될 광고 텍스트

let lastClickTime = 0; // 마지막 클릭 시간을 저장하는 변수
const minClickInterval = 90; // 최소 클릭 간격 (밀리초 단위)
let NOautoClick = 0
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives
//NoDerivatives

let wHeight = 2000

function setup() {
//============================================setup
  createCanvas(windowWidth, wHeight);
  fightcolorR = round(random(0,255)); 
  fightcolorG = round(random(0,255)); 
  fightcolorB = round(random(0,255)); 
//  backgroundMusic.loop() //배경음악
  backgroundMusic.onended(musicDelay)
  setInterval(updateValue, 100000); //100초마다 업데이트
  startTime = millis(); // 현재 시간 기록
  gameid = floor(random(1000000000,99999999999))
  setInterval(updateStockPrice, 2000);
  setInterval(updateNews, 60000);
//============================================setup
}
let musictimer = 3
let isMusicDelay = false
function musicDelay() {
  isMusicDelay = true
  backgroundMusic.pause()
}
//color02
//29,139,21
//color01
//47,157,39
let img
let DOBK2
let backgroundMusic //배경음악

let news = 0; // 초기값은 0으로 설정
let newss = true;
let newsss = 0;

let DBP = true
let nDBP = true
let UPD = false
let FTR = 0
let FT = 0

//sant50,sant500

let sant50 = 7

let sant500 = 370

let sants50 = 7
let sants500 = 385

let goods = true
let isGoodsAdded = 0;

let input, button, greeting;

//(타이머) - let TI = 60

let Q = 29
let W = 139
let E = 21
let ad = 0
let egg = 0
let evt1500 = 0
let good = 0

let npg = 0
let npgy = 0
let pg = 120

let startTime;
let showAlert = false;

let balance = 1000; // 초기 자본
let stockPrice = 50000; // 초기 주식 가격
let stocks = 0; // 보유 주식 수
let clicked = false; // 클릭 이벤트 처리 플래그

let Point = 0
let LUCK = 0
let LUCKS = 0
//let M = 0
let M = 3500
let DL = 0
let DLS = 0
//let LPO = 0

let jhpt = 0

let gameid = 0

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

let fightcolortime = 0.05 // 타이머 기준
let fightcolortimer = fightcolortime

let fightcolorR; 
let fightcolorG; 
let fightcolorB; 

let fighttimer = 5.5
let adtimer2 = 10

let neoAD = false


//------------------------------------------------------
//배경음악
function preload() {
  backgroundMusic = loadSound('BTNMINFOBGM_byAIVAandJHJH.mp3');
}
//배경음악
//1분31초
//------------------------------------------------------

// = round(random(0,255)
function draw() {
  background(random(0,255),random(0,255),random(0,255));
  
  if(isMusicDelay == true) {
  musictimer -= deltaTime / 1000
    
    if(musictimer <= 0) {
      musictimer = 3
      backgroundMusic.play()
      isMusicDelay = false
    }
  }
  
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
    
  }
  fill(245,245,245)
  strokeWeight(0.7)
  rect(2,2,windowWidth - 4, wHeight - 4)
  strokeWeight(1.5)
//-------------------------------------------------
    if (stockPrice <= 0 ) {
      stockPrice = 0
    }
//-------------------------------------------------
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
//  text(Point,195.3, 177);
//  text("당첨횟수 : " + LUCKS,10,30);
  text("돈 : " + M,15,32);
  textSize (40)
  textStyle(BOLD)
  text("검-키우기",160,60)
  textSize(15)
  M = floor(M)
  text("강화하기 버튼",153, 130)
  textSize(10)
  text("이 게임은 미완성 작품입니다.",10, 130)
  text("버그,오류,밸런스 에 문제가",10, 140)
  text("있을수도 있습니다.",10, 150)
  text("휴대폰 화면에 최적화 하기위해",10, 160)
  text("화면이 PC 버전에 최적화 되있지",10, 170)
  text("않을수 있습니다.",10, 180)
  text("----------------------------------",10, 190)
  text("",10, 220)
  textSize(13)
  text("공지사항 :",10, 205)
  textSize(10)
  text("지금은 업데이트중 입니다.",10, 220)
  text("게임에 오류가 발생할수",10, 230)
  text("있습니다.",10, 240)
  text("오토클릭 감지횟수 : " + NOautoClick + " / 15",10, 250)
  text("2.3.1 ~ 2.4.2 업뎃 : bug-fix & 밸런스 조절",10, 260)
  text("2.4.3 업데이트 예정 : 뉴스 추가 ",10, 270)
  text("공식 사이트로 접속시 업데이트가 느릴수 있음",10, 290)
  textSize(15)
//  text("HOW TO PLAY? - PRESS H KEY",10,640)
  text("강화 성공 수 = " + LUCKS , 17,55)
  text("광고횟수 = " + round(ad,3), 17 , 75)
  text("명성 = " + good, 17 , 95)
  text("방지권 = " + npg, 17 , 115)
  text("사용가능 방지권 = " + npgy, 187 , 175)
//  text("JH.point = " + jhpt, 20 , 335)
  //jhpt
  textSize(9.5)
  text("rp.of_JHJH ©",272.25,72)
  textSize(12)
  text("Ver-2.4.2",215,73.5)
  textSize(12)
  text("GAME_ID : "+ gameid,200,90)
//  text(LUCKS * 10,100,100) - 테스터
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
//  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  textSize(11.5)
  text("광고하기(가격UP)",154, 229)
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
//  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("1vs1 (AI)",168.3, 331)
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
  
  rect(260,300,97,50);
  
  push();
  textSize(20);
  fill(0)
//  text(Point,195.3, 177);
  textSize (14)
  textStyle(BOLD)
  fill(255)
  text("강화 검",284.55, 322)
  text("팔기",295, 338)
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
  
  rect(260,200,97,50);
  
  push();
  textSize(20);
  fill(0)
//  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("1/4확률 복권",265.5, 230)
  pop()
//-----------------------------------------------
  push();
  strokeWeight(10); 
  pop();
  
  if(mouseX > 260 && mouseX < 360 
     && mouseY > 400 && mouseY < 450) 
  {
    fill(204,102,0)
  }
  else{
    fill(255,153,0)
  }
  
  rect(260,400,97,50);
  
  push();
  textSize(20);
  fill(0)
//  text(Point,195.3, 177);
  textSize (11)
  textStyle(BOLD)
  fill(255)
  text("방지권 사용하기",267, 430)
  pop()
//-----------------------------------------------
    push();
  strokeWeight(10); 
  pop();
  
//  if(mouseX > 150 && mouseX < 250 
//     && mouseY > 300 && mouseY < 350) 
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 400 && mouseY < 450) 
  {
    fill(204,102,0)
  }
  else{
    fill(255,153,0)
  }
  
  rect(150,400,97,50);
  
  push();
  textSize(20);
  fill(0)
//  text(Point,195.3, 177);
  textSize (11)
  textStyle(BOLD)
  fill(255)
  text("방지권 구매하기",157, 430)
  pop()
//-----------------------------------------------
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 500 && mouseY < 550) 
  {
    fill(0,51,255)
  }
  else{
    fill(0,102,255)
  }
  
  rect(150,500,97,50);
  
  if(mouseX > 260 && mouseX < 360 
     && mouseY > 500 && mouseY < 550) 
  {
    fill(0,51,255)
  }
  else{
    fill(0,102,255)
  }
  
  rect(260,500,97,50);
  
  push();
  textSize(20);
  fill(0)
//  text(Point,195.3, 177);
  textSize (12)
  textStyle(BOLD)
  fill(255)
  text("주식 구매하기",160, 530)
  text("주식 판매하기",270, 530)
  fill(22)
  textSize(15);

  text(`1주당 가격: $${stockPrice.toFixed(2)}`, 180, 490);
  text("보유개수 " + stocks + " 주", 205, 570);
  pop()
  
  
//-----------------------------------------------
  
  // 점수 늘리기
  if(LUCK == 5 && SG == false) {
    LUCKS += 1
    jhpt += LUCKS
    M += LUCKS * 1200
    SG = true
  }
  
  //검 파괴
  if(LUCK == pg && SG == false) {
    if(npgy == 0) {
      LUCKS = 0
      jhpt = 0
      SG = true
    }
    else
      npgy -= 1
      SG = true
  }
  
  // 안내판
  if(LUCK == 5) {
    push()
    fill (22)
    textSize(25)
    text("강화성공",255, 135);
    pop()
  }
  if(LUCK !== 5 && LUCK !== 30) {
    push()
    fill(22)
    textSize(25)
    text("강화실패",255, 135);
    pop()
  }
  if(LUCK == pg) {
    push()
    fill(22)
    textSize(25)
    text("검 파괴",255, 135);
    pop()
  }
//-----------------------------------------------
  //(타이머) - TI -= deltaTime / 1000
//-----------------------------------------------
//=========================================================
  //여기에 코드
  
//이스터에그(돈코드)
  if(keyIsDown(77)) {
    if(keyIsDown(79)) {
      if(keyIsDown(78)) {
        if(keyIsDown(69)) {
          if(keyIsDown(89)) {
            if(keyIsDown(79)) {
              if(keyIsDown(80)) {
                if(egg == 0) {
                  M += 800000
                  egg = 1
                }
              }
            }
          }
        }
      }
    }
  }
//=====================================================
//이스터에그(1500)
  if(keyIsDown(86)) {
    if(keyIsDown(84)) {
      if(keyIsDown(49)) {
        if(keyIsDown(69)) {
          if(keyIsDown(48)) {
            if(keyIsDown(53)) {
              if(egg == 0) {
                LUCKS = 15
                good = 2
                evt1500 = 1
              } 
            }
          }
        }
      }
    }
  }
//------------------------------------------------------
  if(keyIsDown(67)) {
    if(keyIsDown(82)) {
      if(keyIsDown(68)) {
//crd
//======================================================//여기에 시크릿 크레딧
//secret credits
        push()
        fill(22)
        rect (0,0,windowWidth, windowHeight)
        textSize(25)
        fill(random(0,255),random(0,255),random(0,255))
        text ("secret-credits-!",50,50)
        fill (255,255,255)
        text ("secret-credits-!",50,57)
        textSize(10)
        text ("rp.of_JHJH ©",220,53.5)
        textSize(13)
        text ("GAME made by - JHJH",50,75)
        text ("BGM by - AIVA | JHJH",50,85)
        text ("IDEA by - rp.of_JHJH | SAIPAN-  member",50,95)
        text ("thank you - Digipen CAMP | SAIPAN CAMP",50,105)
        text ("종호종호공화국!",50,115)
        text ("종호종호공화국!!!",50,125)
        text ("종호종호공화국!!!!!",50,135)
        text ("종호종호공화국!!!!!!!",50,145)
        text ("종호종호공화국!!!!!!!!!",50,155)
        text ("종호종호공화국!!!!!!!!!!!",50,165)
        text ("종호종호공화국!!!!!!!!!!!!!",50,175)
        text ("종호종호공화국!!!!!!!!!!!!!!!",50,185)
        text ("종호종호공화국!!!!!!!!!!!!!!!!!",50,195)
        text ("종호종호공화국!!!!!!!!!!!!!!!!!!!",50,205)
        text ("종호종호공화국!!!!!!!!!!!!!!!!!!!!!!!!",50,215)
        text ("종호종호공화국!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",50,225)
        pop()
//여기에 시크릿 크래딧
//======================================================
      }
    }
  }
//------------------------------------------------------
  //code =
  if(UPD == true) {
    fill(0,0,0)
    rect(-1,-1,1000,1000)
    textSize(25)
    textStyle(BOLD)
    fill(255,255,255)
    text("지금은 업데이트중", 104, 290)
    textSize(20)
    text("지금은 업데이트중", 81.6, 310)
  }
//------------------------------------------------------
  //여기에 코드 작성 (draw)
  if(LUCKS == 0) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("0강 나무막대기",sant50,sant500)
    pop()
  }
    if(LUCKS == 1) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("1강 나무검",sant50,sant500)
    pop()
  }
    if(LUCKS == 2) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("2강 쓸만한 나무검",sant50,sant500)
    pop()
  }
    if(LUCKS == 3) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("3강 일반검",sant50,sant500)
    pop()
  }
    if(LUCKS == 4) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("4강 2단봉",sant50,sant500)
    pop()
  }
    if(LUCKS == 5) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("5강 3단봉",sant50,sant500)
    pop()
  }
    if(LUCKS == 6) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("6강 단단한 철검",sant50,sant500)
    pop()
  }
    if(LUCKS == 7) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("7강 금으로 만들어진 검",sant50,sant500)
    pop()
  }  if(LUCKS == 8) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("8강 루비장식이 달린 검",sant50,sant500)
    pop()
  }  if(LUCKS == 9) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("9강 다이아몬드가 박힌 붉은검루비검",sant50,sant500)
    pop()
  }
    if(LUCKS == 10 && isGoodsAdded == 0) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("10강 100% 다이아몬드로만 이루어진 검 ",sant50,sant500)
    good += 1
    jhpt += 100
    isGoodsAdded = 1;
    pop()
  }
    if(LUCKS == 10) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("10강 100% 다이아몬드로만 이루어진 검 ",sant50,sant500)
    pop()
  }
    if(LUCKS == 11) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("11강 전설적인 황금의 창",sant50,sant500)
    pop()
  }
    if(LUCKS == 12) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("12강 불타는 검",sant50,sant500)
    pop()
  }
    if(LUCKS == 13) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("13강 그림자의 칼",sant50,sant500)
    pop()
  }
    if(LUCKS == 14) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("14강 어둠의 검",sant50,sant500)
    pop()
  }
    if(LUCKS == 15) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("15강 암흑의 검",sant50,sant500)
    pop()
  }
    if(LUCKS == 16) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("16강 DARK SOULS SOWRD",sant50,sant500)
    pop()
  }
    if(LUCKS == 17) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("17강 어두운 자들의 힘",sant50,sant500)
    pop()
  }
    if(LUCKS == 18) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("18강 보이지 않는 검",sant50,sant500)
    pop()
  }  if(LUCKS == 19) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("19강 투명의 검",sant50,sant500)
    pop()
  }  
    if(LUCKS == 20 && isGoodsAdded == 1) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("20강 물과 바람, 태양이 만들어낸 신비의 검",sant50,sant500)
    good += 1
    isGoodsAdded = 2;
    jhpt += 500
    pop()
  }
  if(LUCKS == 20) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("20강 물과 바람, 태양이 만들어낸 신비의 검",sant50,sant500)
    pop()
  }
    if(LUCKS == 21) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("21강 바다에서 뽑은 기운이 잠든 *해신*",sant50,sant500)
    pop()
  }
    if(LUCKS == 22) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("22강 장미칼",sant50,sant500)
    pop()
  }
    if(LUCKS == 23) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("23강 La Vie en Rose",sant50,sant500)
    pop()
  }
    if(LUCKS == 24) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("24강 天樂(천악)",sant50,sant500)
    pop()
  }
    if(LUCKS == 25) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("25강 디바인 스타 퍼니셔!!!",sant50,sant500)
    pop()
  }
    if(LUCKS == 26) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("26강 백룡의 낫",sant50,sant500)
    pop()
  }
    if(LUCKS == 27) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("27강 $$$ 돈의-권력 $$$",sant50,sant500)
    pop()
  }
  if(LUCKS == 28) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("28강 공허의 빛",sant50,sant500)
    pop()
  }
  if(LUCKS == 29) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("29강 우라늄 검",sant50,sant500)
    pop()
  }
  if(LUCKS == 30) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("30강 시공간을 가르는 힘",sant50,sant500)
    pop()
  }
  if(LUCKS == 31) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("31강 수령동지님이 쓰시던(?) 검",sant50,sant500)
    pop()
  }
  if(LUCKS == 32) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("32강 삼성 회장의 골프채",sant50,sant500)
    pop()
  }
  if(LUCKS == 33) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("33강 해리포터의 마법지팡이",sant50,sant500)
    pop()
  }
  if(LUCKS == 34) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("34강 덤블도어의 마법지팡이",sant50,sant500)
    pop()
  }
  if(LUCKS == 35) {
    push()
    fill(22)
    textSize(13)
    textStyle(BOLD)
    text("35강 흑과 백 - 지나가는 자들을 흑으로, 백으로 묶는 실 ",20,500)
    pop()
  }
  if(LUCKS == 36) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("36강 태극기",sant50,sant500)
    pop()
  }
  if(LUCKS == 37) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("37강 더블 태극기",sant50,sant500)
    pop()
  }
  if(LUCKS == 38) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("38강 더블-더블 태!극!기!",sant50,sant500)
    pop()
  }
  if(LUCKS == 39) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("39강 (정치)암살용 도네(?)",sant50,sant500)
    pop()
  }
  if(LUCKS == 40) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("40강 마법진 (그리는 도구)",sant50,sant500)
    pop()
  }
  if(LUCKS == 41) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("41강 메태오(1회용)",sant50,sant500)
    pop()
  }
  if(LUCKS == 42) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("42강 고려대의 위엄",sant50,sant500)
    pop()
  }
  if(LUCKS == 43) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("43강 연세대의 위엄",sant50,sant500)
    pop()
  }
  if(LUCKS == 44) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("44강 서울대의 위엄",sant50,sant500)
    pop()
  }
  if(LUCKS == 45) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("45강 SKY - 서 | 고 | 연, 모두 모였다!",sant50,sant500)
    pop()
  }
  if(LUCKS == 46) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("46강 bell",sant50,sant500)
    pop()
  }
    if(LUCKS == 47) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("47강 번개",sant50,sant500)
    pop()
  }
    if(LUCKS == 48) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("48강 더블-번개",sant50,sant500)
    pop()
  }
    if(LUCKS == 49) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("49강 더블-더블 번개",sant50,sant500)
    pop()
  }
    if(LUCKS == 50 && isGoodsAdded == 2) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    good += 2
    jhpt += 500
    isGoodsAdded = 3;
    text("50강 번개의 신이여 온 세상을 흔드리라",sant50,sant500)
  }
    if(LUCKS == 51) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("51강 공허의 신이여 온 세상을 삼켜라",sant50,sant500)
    pop()
  }
    if(LUCKS == 52) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("52강 트럼프의 골프채",sant50,sant500)
    pop()
  }
    if(LUCKS == 53) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("53강 미국의 권력",sant50,sant500)
    pop()
  }
    if(LUCKS == 54) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("54강 Black Void Chain",sant50,sant500)
    pop()
  }
    if(LUCKS == 55) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("55강 Red Void Chain",sant50,sant500)
    pop()
  }
    if(LUCKS == 56) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("56강 한-방 검 (1회용)",sant50,sant500)
    pop()
  }
    if(LUCKS == 57) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("57강 아이스크림 숫가락",sant50,sant500)
    pop()
  }
    if(LUCKS == 58) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("58강 나무막대기",sant50,sant500)
    pop()
  }
    if(LUCKS == 59) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("59강 빠빨간맛! 북! 조-선 빼빼로",sant50,sant500)
    pop()
  }
    if(LUCKS == 60 && isGoodsAdded == 3){
    push()
    fill(22)
    good += 3
    isGoodsAdded = 4;
    textSize(15)
    textStyle(BOLD)
    text("60강 치킨(파닭파닭)",sant50,sant500)
    pop()
  }
    if(LUCKS == 61) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("61강 전봇대",sant50,sant500)
    pop()
  }
    if(LUCKS == 62) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("62강 전광판",sant50,sant500)
    pop()
  }
    if(LUCKS == 63) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("63강 으악!!!불편해",sant50,sant500)
    pop()
  }
    if(LUCKS == 64) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("64강 펀-안",sant50,sant500)
    pop()
  }
    if(LUCKS == 65) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("65강 한 학생의 분노를 담은 연필",sant50,sant500)
    pop()
  }
    if(LUCKS == 66) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("66강 도시락 폭탄",sant50,sant500)
    pop()
  }
    if(LUCKS == 67) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("67강 도시-폭탄 (?)",sant50,sant500)
    pop()
  }
    if(LUCKS == 68) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("68강 더블 장미칼",sant50,sant500)
    pop()
  }
    if(LUCKS == 69) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("69강 ROSE SWORD - POWER",sant50,sant500)
    pop()
  }
    if(LUCKS ==70 && isGoodsAdded == 4) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("70강 70조 짜리 아파트",sant50,sant500)
    good += 5
    jhpt += 1000
    isGoodsAdded = 5;
    pop()
  }
    if(LUCKS == 71) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("71강 Duptil, Cutlass of the Night",sant50,sant500)
    pop()
  }
    if(LUCKS == 72) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("72강 強すぎて無駄な剣",sant50,sant500)
    pop()
  }
    if(LUCKS == 73) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("73강 सुपर आइडल पानी की बोतल",sant50,sant500)
  }
    if(LUCKS == 74) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("74강",sant50,sant500)
    pop()
  }
    if(LUCKS == 75) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("75강",sant50,sant500)
    pop()
  }
    if(LUCKS == 76) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("76강",sant50,sant500)
    pop()
  }
    if(LUCKS == 77) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("77강",sant50,sant500)
    pop()
  }
    if(LUCKS == 78) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("78강",sant50,sant500)
    pop()
  }
    if(LUCKS == 79) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("79강",sant50,sant500)
    pop()
  }
    if(LUCKS == 80) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("80",sant50,sant500)
    pop()
  }
    if(LUCKS == 81) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("81",sant50,sant500)
    pop()
  }
    if(LUCKS == 82) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("82",sant50,sant500)
    pop()
  }
    if(LUCKS == 83) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("83",sant50,sant500)
    pop()
  }
    if(LUCKS == 84) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("84",sant50,sant500)
    pop()
  }
    if(LUCKS == 85) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("85",sant50,sant500)
    pop()
  }
    if(LUCKS == 86) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("86",sant50,sant500)
    pop()
  }
    if(LUCKS == 87) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("87",sant50,sant500)
    pop()
  }
    if(LUCKS == 88) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("88",sant50,sant500)
    pop()
  }
    if(LUCKS == 89) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("89",sant50,sant500)
    pop()
  }
    if(LUCKS == 90) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("90",sant50,sant500)
    pop()
  }
//===========================================
  //주식 뉴스 코드
  //let sants50 = 20
  //
  //let sants500 = 370
  //주식 뉴스 코드
//===========================================
  
  
//    if (M > 800000000) { // M이 10억을 초과하면 메시지와 사각형을 표시
//    fill(255, 0, 0); // 빨간색으로 설정
//    rect(-1, -1, 2000, 1000); // (100, 150) 위치에 가로 200, 세로 100 크기의 사각형 그리기
//
//    textSize(24);
//    textAlign(CENTER, CENTER);
//    fill(255); // 흰색으로 설정
//    text("비정상적인 활동 감지 - 인증서 필요", width / 2, height / 2);
//  }
  
  // 10초 이내에 M이 8만을 초과하면 showAlert를 true로 설정
  if (millis() - startTime < 10000 && M > 80000) {
    showAlert = true;
  }
  
    if (showAlert) {
    fill(255, 0, 0); // 빨간색으로 설정
    rect(0, 0, width, height); // 화면 전체 크기의 빨간색 사각형 그리기

    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255); // 흰색으로 설정
    text("비정상적인 활동 감지", width / 2, height / 2);
  }
  
// M += 1000; // 예시로 1000씩 증가시켜 봅니다. //테스트용
  
  
//===========================================
  
//게임오버
  if(M<=0) {
    fill (139,0,0)
    strokeWeight(0)
    rect (-1,-1,windowWidth, windowHeight)
    fill (255,255,255)
    textSize(25)
    textStyle(BOLD)
    text("GAME OVER", windowWidth / 2 -20 , windowHeight / 2)
    textSize(20)
    text("새로고침하여 다시시작", windowWidth / 2 - 45, windowHeight / 2 - 20)
  }
  if(NOautoClick >= 15) {
    push()
    fill(0,0,0)
    rect(-1,-1,1000,1000)
    textSize(25)
    textStyle(BOLD)
    fill(255,255,255)
    text("오토클릭 사용 감지됨", 60, 290)
    textSize(17)
    text("오토클릭 사용이 감지되어", 81.6, 310)
    text("사용이 제한되었습니다.", 90, 330)
    pop()
  }
  //여기에 코드 작성 (draw)
//------------------------------------------------------
    if(keyIsDown(72)) {
      push()
      fill(200,200,200)
      rect(-1,-1,1000,1000)
        textSize(25)
        fill (0,0,255)
        text ("HOW TO PLAY?",10,57)
        textSize(5)
        text ("rp.of_JHJH ©",187,55)
        textSize(12)
        text ("먼저 강화하기 버튼을 눌러줍니다.",10,75)
        text ("강화 성공 횟수가 1 이상이 되면",10,90)
        text ("광고하기 버튼을 충분히 눌러줍니다.",10,105)
        text ("광고하기 버튼을 눌렀다면 강화검 팔기 버튼을 눌러 판매합니다.",10,120)
        text ("이걸 반복하면 돈을 많이 얻을수 있습니다.",10,135)
        text ("1/4확률 랜덤박스는 1/4확률로 돈이 2배가 될수있게 해줍니다.",10,150)
        text ("하지만 3/4확률로 돈을 잃게 됩니다.",10,165)
        text ("1vs1은 강화 성공 횟수가 대결하는 상대 보다 더 높으면",10,180)
        text ("승리하여 돈, 광고횟수, 강화성공 수 를 얻을수 있습니다.",10,195)
        text ("실패하면 강화 성공 수가 초기화 됩니다.",10,210)
        text ("*스페셜 코드*를 입력하면 더 많은 돈을 얻을수 있습니다.",10,225)
      textSize(10)
        text ("이 게임은 미완성 게임입니다 버그, 밸러스 에 문제가 있을수도 있습니다.",10,240)
      pop()
    }
//------------------------------------------------------
  if(FT == 1) {
//------------------------------------------------------
  //fightingGUI
    push()
    DBP = false
    fill(160,160,)
    rect(0,0,windowWidth, windowHeight)
    textStyle(BOLD)
    fill(255,0,0)
    text("PVB",49,50)
    textSize(17)
    fill(160,0,0)
    text("Player VS Bot",50,64)
    textSize(30)
    if(fightcolortimer >= 0) {
      fightcolortimer -= deltaTime / 1000
    }
    else
      {
          fightcolorR = round(random(0,255));
          fightcolorG = round(random(0,255));
          fightcolorB = round(random(0,255));
          fightcolortimer = fightcolortime
      }
    fill(fightcolorR,fightcolorG,fightcolorB)
    text("싸우는 중...",50,100)
    
    if(fighttimer >= 0) {
      fighttimer -= deltaTime / 1000
    }
    else {
      FT = 0
      fighttimer = 5.5
  //fightingGUI
//---------------------------------------------------------

      FTR = floor(random(0,4*LUCKS))
      if(FTR > LUCKS) {
        LUCKS = 0
        ad = 0
        FTR = 0
        DBP = true
      }
      else {
        LUCKS += FTR
        M += floor(random(0,50000)) * FTR
        ad += floor(M/25)
        if (floor(random(1,10)) == 7) {
        good += 1
          }
        FTR = 0
        DBP = true
      }
    }
    pop()
  }
  //여기에 코드
//=========================================================
//=========================================================
}
function mousePressed()
{
  if(mouseX > 150 && mouseX < 250 && mouseY > 100 &&   mouseY < 150) {
    if(DBP == true) {
      LUCK = floor(random(1,6 + LUCKS * 10));
      M -= floor(random(0,700))
      SG = false
//      Point = LUCK //임시
    //round(숫자or랜덤()) <- 반올림
    //floor(숫자or랜덤()) <- 내림
    //ceil(숫자or랜덤()) <- 올림
    //nofill() <- 안에 투명
    }
  }
//-------------------------------------------------
//
//-------------------------------------------------
  
  if(mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 250) {
    if(DBP == true) {
      ad += 4
      ad += good * 2
    }
  }
  if(mouseX > 260 && mouseX < 360 
     && mouseY > 400 && mouseY < 450) {
      if(DBP == true) {
        //방지권 사용가능
        if (npg >= 1) {
          npg -= 1
          npgy += 1
        }
      }
    }
//-------------------------------------------------

if(mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
  if(DBP == true) {
    if(LUCKS >= 1) {
// 1ㄷ1 code
//window.open("https://media.tenor.com/Vw94Uu3OJcEAAAAd/bad-acting.gif","Test","width=400,height=340, top=206, left=290");
        FT = 1
      }
    }
  }
  
   if(mouseX > 260 && mouseX < 360 && mouseY > 300 && mouseY < 350) {
     if(DBP == true) {
       if(LUCKS >= 1) {
        M += LUCK * 1000 + ad * LUCK + floor(random(0,100))
        LUCKS = 0
        ad = 0
       }
     }
   }
  if(mouseX > 260 && mouseX < 360 && mouseY > 200 && mouseY < 250) {
    if(DBP == true) {
      M -= M-floor(M/2)
      DOBK2 = floor(random(1,5))
        if(DOBK2 == 1) {
          DOBK = 0
          M = M*4
        }
        else {
          if (floor(random(1,20)) == 5) {
            M -= floor((good * M) / 2)
            good = 0
          }
        }
      }
    }
    if(mouseX > 150 && mouseX < 250 
     && mouseY > 400 && mouseY < 450) {
      push()
        if(DBP == true) {
          if(M >= 25000 + 10000 * npg + (LUCKS * 100) + 1) {
            //방지권 구매
            //방지권 변수 npg
            //사용가능 방지권 변수 npgy
            M -= 25000 + 10000 * npg + (LUCKS * 100)
            npg += 1
          }
          else {
            color(255,0,0)
            textStyle(BOLD)
            text("에러! 돈 부족 최소 10000 + 1000 * npg + (LUCKS * 100) 이상",50,50)
          }
        }
      pop()
    }
    if(mouseX > 150 && mouseX < 250 
     && mouseY > 500 && mouseY < 550 && M > stockPrice) {
      //주식 구매
        stocks++;
        M -= stockPrice;
        clicked = true; // 클릭 이벤트 처리 플래그 설정
    }
    if(mouseX > 260 && mouseX < 360 
     && mouseY > 500 && mouseY < 550 && 0 < stocks) {
      // 주식 판매
        stocks--;
        M += stockPrice;
        clicked = true; // 클릭 이벤트 처리 플래그 설정
      }
    
//----------------------------------------------if2
  
  // 다른코드 지역 (여기에 코드 X) - cd = mouseCLICK
  
//-------------------------------------------------
}
function mouseClicked() {
  // 현재 시간과 마지막 클릭 시간 사이의 간격을 계산
  let currentTime = millis();
  let timeSinceLastClick = currentTime - lastClickTime;
  
  // 최소 클릭 간격보다 짧은 간격으로 클릭이 일어나면 무시
  if (timeSinceLastClick < minClickInterval) {
    console.log("Auto-click detected, ignoring click.");
    NOautoClick += 1
    return false; // 클릭 무시
  }
  
  // 정상적인 클릭이면 동작 수행
  lastClickTime = currentTime; // 마지막 클릭 시간 업데이트
  console.log("Valid click!");
}

function updateValue() {
  if(NOautoClick >= 1) {
  NOautoClick -= 1; // 20초마다 NOautoClick 변수 값을 -1로 업데이트
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 주식 가격 업데이트 함수
function updateStockPrice() {
  stockPrice += random(-10000,10000);
}

function updateNews() {
  // 1에서 5까지의 랜덤한 숫자 생성
  news = Math.floor(random(1, 6));
}
//http://creativecommons.org/licenses/by-nc-nd/4.0/
