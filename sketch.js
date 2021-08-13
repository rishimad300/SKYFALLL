var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		fill('green  ');
		background(20,20,60,60);
		textAlign(CENTER);
		text('SkyFall', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
	background(0)
  text("Score = " + score, 30,20)
  ellipse(x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.25
    score+= 10 
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
        fill('red');
		background(20,20,60,60);  
  
		textAlign(CENTER);
		text('GAME OVER TRY AGAIN', width / 2, height / 2)
  	text("Points Earned: " + score , width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
