//rp.of_JHJH
//JHJH - NGR
//10 | 종호종호 제작!
//무단 배포및 무단 복제시
//죽여버릴거야 (=

let lastClickTime = 0; // 마지막 클릭 시간을 저장하는 변수
const minClickInterval = 65; // 최소 클릭 간격 (밀리초 단위)
let NOautoClick = 0

function setup() {
  createCanvas(360,650);
  fightcolorR = round(random(0,255)); 
  fightcolorG = round(random(0,255)); 
  fightcolorB = round(random(0,255)); 
  backgroundMusic.loop() //배경음악
  backgroundMusic.onended(musicDelay)
  setInterval(updateValue, 120000); //120초마다 업데이트
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

let DBP = true
let UPD = false
let FTR = 0
let FT = 0


//(타이머) - let TI = 60

let Q = 29
let W = 139
let E = 21
let ad = 0
let egg = 0

let Point = 0
let LUCK = 0
let LUCKS = 0
//let M = 0
let M = 3500
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

let fightcolortime = 0.05 // 타이머 기준
let fightcolortimer = fightcolortime

let fightcolorR; 
let fightcolorG; 
let fightcolorB; 

let fighttimer = 5.5

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
  rect(2,2,356,646)
  strokeWeight(1.5)

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
  text(Point,195.3, 177);
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
  text(NOautoClick,10, 250)
  text("-",10, 260)
  text("-",10, 270)
  textSize(15)
//  text("HOW TO PLAY? - PRESS H KEY",10,640)
  text("강화 성공 수 = " + LUCKS , 17,55)
  text("광고횟수 = " + round(ad,3), 17 , 75)
  textSize(9.5)
  text("rp.of_JHJH ©",272.25,72)
  textSize(12)
  text("Ver-2",230,73.5)
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
  text(Point,195.3, 177);
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
  text(Point,195.3, 177);
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
  text(Point,195.3, 177);
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
  text(Point,195.3, 177);
  textSize (15)
  textStyle(BOLD)
  fill(255)
  text("1/4확률 복권",265.5, 230)
  pop()
//-----------------------------------------------
  
  // 점수 늘리기
  if(LUCK == 5 && SG == false) {
    LUCKS += 1
    M += LUCKS * 1200
    SG = true
  }
  
  // 안내판
  if(LUCK == 5)
    {
      push()
    fill (22)
      textSize(25)
    text("강화성공",255, 135);
      pop()
    }
  else {
    push()
    fill(22)
    textSize(25)
    text("강화실패",255, 135);
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
//------------------------------------------------------
  if(keyIsDown(67)) {
    if(keyIsDown(82)) {
      if(keyIsDown(68)) {
//crd
//======================================================//여기에 시크릿 크레딧
//secret credits
        push()
        fill(22)
        rect (0,0,360,650)
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
    text("0강 나무막대기",50,500)
    pop()
  }
    if(LUCKS == 1) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("1강 나무검",50,500)
    pop()
  }
    if(LUCKS == 2) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("2강 쓸만한 나무검",50,500)
    pop()
  }
    if(LUCKS == 3) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("3강 일반검",50,500)
    pop()
  }
    if(LUCKS == 4) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("4강 2단봉",50,500)
    pop()
  }
    if(LUCKS == 5) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("5강 3단봉",50,500)
    pop()
  }
    if(LUCKS == 6) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("6강 단단한 철검",50,500)
    pop()
  }
    if(LUCKS == 7) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("7강 금으로 만들어진검검",50,500)
    pop()
  }  if(LUCKS == 8) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("8강 루비장식이 달린 검",50,500)
    pop()
  }  if(LUCKS == 9) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("9강 다이아몬드가 박힌 붉은검루비검",50,500)
    pop()
  }
    if(LUCKS == 10) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("10강 100% 다이아몬드로만 이루어진 검 ",50,500)
    pop()
  }
    if(LUCKS == 11) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("11강 전설적인 황금의 창",50,500)
    pop()
  }
    if(LUCKS == 12) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("12강 불타는 검",50,500)
    pop()
  }
    if(LUCKS == 13) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("13강 그림자의 칼",50,500)
    pop()
  }
    if(LUCKS == 14) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("14강 어둠의 검",50,500)
    pop()
  }
    if(LUCKS == 15) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("15강 암흑의 검",50,500)
    pop()
  }
    if(LUCKS == 16) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("16강 전설의 검",50,500)
    pop()
  }
    if(LUCKS == 17) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("17강 파괴의 검",50,500)
    pop()
  }
    if(LUCKS == 18) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("18강 보이지 않는 검",50,500)
    pop()
  }  if(LUCKS == 19) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("19강 투명의 검",50,500)
    pop()
  }  if(LUCKS == 20) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("20강 물과 바람, 태양이 만들어낸 신비의 검",50,500)
    pop()
  }
    if(LUCKS == 21) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("21강 바다에서 뽑은 기운이 잠든 *해신*",50,500)
    pop()
  }
    if(LUCKS == 22) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("22강 La Vie en Rose",50,500)
    pop()
  }
    if(LUCKS == 23) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("23강 장미칼",50,500)
    pop()
  }
    if(LUCKS == 24) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("24강 天樂(천악)",50,500)
    pop()
  }
    if(LUCKS == 25) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("25강 디바인 스타 퍼니셔!!!",50,500)
    pop()
  }
    if(LUCKS == 26) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("26강 백룡의 낫",50,500)
    pop()
  }
    if(LUCKS == 27) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("27강 $$$ 돈의-권력 $$$",50,500)
    pop()
  }
  if(LUCKS == 28) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("28강 공허의 빛",50,500)
    pop()
  }
  if(LUCKS == 29) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("29강 우라늄 검",50,500)
    pop()
  }
  if(LUCKS == 30) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("30강 시공간을 가르는 힘",50,500)
    pop()
  }
  if(LUCKS == 31) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("31강 수령동지님이 쓰시던(?) 검",50,500)
    pop()
  }
  if(LUCKS == 32) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("32강 삼성 회장의 골프채",50,500)
    pop()
  }
  if(LUCKS == 33) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("33강 해리포터의 마법지팡이",50,500)
    pop()
  }
  if(LUCKS == 34) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("34강 덤블도어의 마법지팡이",50,500)
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
    text("36강 태극기",50,500)
    pop()
  }
  if(LUCKS == 37) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("37강 더블 태극기",50,500)
    pop()
  }
  if(LUCKS == 38) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("38강 더블-더블 태!극!기!",50,500)
    pop()
  }
  if(LUCKS == 39) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("39강 (정치)암살용 도네(?)",50,500)
    pop()
  }
  if(LUCKS == 40) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("40강 마법진 (그리는 도구)",50,500)
    pop()
  }
  if(LUCKS == 41) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("41강 메태오(1회용)",50,500)
    pop()
  }
  if(LUCKS == 42) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("42강 고려대의 위엄",50,500)
    pop()
  }
  if(LUCKS == 43) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("43강 연세대의 위엄",50,500)
    pop()
  }
  if(LUCKS == 44) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("44강 서울대의 위엄",50,500)
    pop()
  }
  if(LUCKS == 45) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("45강 SKY - 서 | 고 | 연, 모두 모였다!",50,500)
    pop()
  }
  if(LUCKS == 46) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("46강 bell",50,500)
    pop()
  }
    if(LUCKS == 47) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("47강개",50,500)
    pop()
  }
    if(LUCKS == 48) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("48강 더블-번개",50,500)
    pop()
  }
    if(LUCKS == 49) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("49강 더블-더블 번개",50,500)
    pop()
  }
    if(LUCKS == 50) {
    push()
    fill(22)
    textSize(15)
    textStyle(BOLD)
    text("50강 번개의 신이여 온 세상을 흔드리라",50,500)
  }

  
  
  
  
  
  
  
  
  
  
  
//게임오버
  if(M<=0) {
    fill (139,0,0)
    strokeWeight(0)
    rect (-1,-1,1000,1000)
    fill (255,255,255)
    textSize(25)
    textStyle(BOLD)
    text("GAME OVER", 104, 290)
    textSize(20)
    text("새로고침하여 다시시작", 81.6, 310)
  }
  if(NOautoClick >= 12) {
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
    rect(0,0,360,650)
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
        FTR = 0
        DBP = true
      }
    }
    pop()
  }
  //여기에 코드
//=========================================================
}

function mousePressed()
{
  if(mouseX > 150 && mouseX < 250 && mouseY > 100 &&   mouseY < 150) {
    if(DBP == true) {
      LUCK = floor(random(1,6 + LUCKS * 10));
      M -= floor(random(0,700))
      SG = false
      Point = LUCK //임시
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
      }
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