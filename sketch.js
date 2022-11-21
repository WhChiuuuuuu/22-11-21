var face_x = []
var face_y = []
var face_size = []


function preload(){
  song = loadSound ("368 - Dyalla")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0 ; i<7 ; i++){
  face_size[i] = random(0,400)
  face_x [i]= random(0,width)
  face_y [i] = random(0,height)
 }
}

function draw() {
  background(255);
  textSize(20)
  text("x:"+mouseX+" Y:"+mouseY,50,50)
  for (var j=0 ; j<7 ;j++){
  push()
  translate(face_x[j],face_y[j])
  //臉
  noStroke()
  fill("#386641")
  ellipse(0,0,face_size[j])

  //眼皮
  noStroke()
  fill("#386641")
  ellipse(-face_size[j]*3/8,-face_size[j]*7/16,face_size[j]*13/40)
  ellipse(face_size[j]*3/8,-face_size[j]*7/16,face_size[j]*13/40)

  //黃眼球
  noStroke
  fill("#fcbf49")
  ellipse(-face_size[j]*3/8,-face_size[j]*7/16,face_size[j]/4)
  ellipse(face_size[j]*3/8,-face_size[j]*7/16,face_size[j]/4)

  //黑眼球
  noStroke()
  fill(0)
  ellipse(-face_size[j]*3/8+map(mouseX,0,width,-10,10),-face_size[j]*7/16+map(mouseY,0,height,-10,10),face_size[j]*7/40)
  ellipse(face_size[j]*3/8+map(mouseX,0,width,-10,10),-face_size[j]*7/16+map(mouseY,0,height,-10,10),face_size[j]*7/40)
 
  //嘴巴
  fill("#d90429")
  ellipse(0,face_size[j]*3/20,face_size[j]*3/20,face_size[j]*7/20)

  //腮紅
  fill("#ffafcc")
  ellipse(-face_size[j]*3/8,-face_size[j]/10,face_size[j]*3/40,face_size[j]/40)
  ellipse(face_size[j]*3/8,-face_size[j]/10,face_size[j]*3/40,face_size[j]/40)

  //鼻子
  stroke(0)
  strokeWeight(5)
  line(face_size[j]/40,-face_size[j]*9/80,face_size[j]*3/80,-face_size[j]*7/80)
  line(-face_size[j]/40,-face_size[j]*9/80,-face_size[j]*3/80,-face_size[j]*7/80)
  pop()

  }
}

if(mouseIsPressed){
ellipse(0,60,60)
}
else {
ellipse(0,60,60,140)
}








