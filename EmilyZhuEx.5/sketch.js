var x; // mouseX
var y; // mouseY
var n; //x value for monster 1
var c; //y value for monster 1
var a; //red value for monster 2
var b; // green value for monster 2
var d; // blue value for monster 2

function setup() {
  createCanvas(600, 700);
  background(80, 40, 70); //yahya
}

function draw() {
  x = mouseX //affects color of eyes and location of monster 2
  y = mouseY // affects color of eyes and location of monster 2
  
//mouse must be pressed once for monster to appear on the screen
  if (mouseIsPressed) { //if mouse is pressed, monster 1 will return to original location
    n = 400
    c = 400
    monster1();
  } else //allows you to move monster with the arrow keys
    background(80, 40, 70);

  if (keyIsDown(LEFT_ARROW))
    n -= 5;
  if (keyIsDown(RIGHT_ARROW))
    n += 5;
  if (keyIsDown(UP_ARROW))
    c -= 5;
  if (keyIsDown(DOWN_ARROW))
    c += 5;
  monster1();

  if (keyIsPressed) { //if space bar is pressed (and held), you can control the position of monster 2 with the mouse
    if (keyCode == 32) {
      background(80, 40, 70)
      monster2(mouseX, mouseY);
      a = 139 //red value for monster 2
      b = 14 //green value for monster 2
      d = 200 //blue value for monster 2
    }
  }
  if (keyIsPressed){ //if c is pressed, monster 2 will now be a blue color and can be controlled with the mouse
      if (keyCode == 99){
        background(80, 40, 70)
        monster2();
        a = 70; //red value for monster 2
        b = 150; //green value for monster 2
        d = 209; //blue value for monster 2
      }
  }
}


function monster1() {
  legs();
  horns();
  arms();
  body();
  eyes();
  mouth();
}

function eyes() {
  fill(x, 0, y);
  stroke(0); //yahya
  strokeWeight(4); //yahya
  ellipseMode(CENTER); //yahya
  ellipse(n, c - 70, 32, 30); //yahya
  ellipse(n + 70, c - 65, 32, 30); //yahya
  ellipse(n - 70, c - 63, 32, 30); //yahya

  //eyebrows

  line(n - 20, c - 100, n + 20, c - 100); //yahya
  line(n - 90, c - 100, n - 60, c - 90); //yahya
  line(n + 90, c - 100, n + 60, c - 90); //yahya
}

function mouth() {
  //mouth
  fill(0, 50, 0); //yahya
  triangle(n - 100, c + 50, n, c + 100, n + 100, c + 50); //yahya

  //teeth
  noStroke();
  fill(255);
  triangle(n - 53, c + 50, n - 43, c + 65, n - 33, c + 50);
  triangle(n - 23, c + 50, n - 13, c + 65, n - 3, c + 50);
  triangle(n + 7, c + 50, n + 17, c + 65, n + 27, c + 50);
  triangle(n + 37, c + 50, n + 47, c + 65, n + 57, c + 50);
}

function body() {
  // Body
  noStroke();
  fill(215, 193, 255);
  ellipse(n, c, 360, 360);
}

function legs() {
  //legs

  strokeWeight(20); //yahya
  stroke(30, 0, 40); //yahya
  line(n - 100, c + 160, n - 130, c + 250); //yahya
  line(n - 60, c + 160, n - 70, c + 250); //yahya
  line(n + 100, c + 160, n + 130, c + 250); //yahya
  line(n + 60, c + 160, n + 70, c + 250); //yahya

  // feet
  strokeWeight(8); //yahya
  fill(139, 14, 200); //yahya
  stroke(10, 0, 80); //yahya
  ellipse(n - 70, c + 260, 38, 25); //yahya
  ellipse(n - 130, c + 260, 38, 25); //yahya
  ellipse(n + 130, c + 260, 38, 25); //yahya
  ellipse(n + 70, c + 260, 38, 25); //yahya
}

function horns() {
  //top horn
  noStroke();
  fill(255, 246, 215);
  triangle(n - 8, c - 180, n + 2, c - 230, n + 12, c - 180);

  //left horn
  noStroke();
  fill(255, 246, 215);
  triangle(n - 48, c - 150, n - 42, c - 210, n - 28, c - 160);

  //right horn
  noStroke();
  fill(255, 246, 215);
  triangle(n + 32, c - 160, n + 47, c - 210, n + 52, c - 150);
}

function arms() {
  //left arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(n + 130, c + 70, 67, 200, 0, PI / 2, OPEN);

  //right arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(n - 130, c + 70, 67, 200, PI / 2, PI, OPEN);
}

function monster2() {

  //body
  //fill(139, 14, 200);
  fill(a, b, d); //yahya
  strokeWeight(10); //yahya
  stroke(10, 0, 80); //yahya
  rectMode(CENTER); //yahya
  rect(x, y, 330, 300); //yahya

  //eyes
  
  fill(233, 0, 0); //yahya
  stroke(0); //yahya
  strokeWeight(4); //yahya
  ellipseMode(CENTER); //yahya
  ellipse(x, y - 70, 32, 30); //yahya
  ellipse(x + 70, y - 65, 32, 30); //yahya
  ellipse(x - 70, y - 63, 32, 30); //yahya

  //eyebrows

  line(x - 20, y - 100, x + 20, y - 100); //yahya
  line(x - 90, y - 100, x - 60, y - 90); //yahya
  line(x + 90, y - 100, x + 60, y - 90); //yahya

  //horns

  fill(0, 50, 0); //yahya
  triangle(x - 100, y + 50, x, y + 100, x + 100, y + 50); //yahya

  //horns

  fill(150); //yahya
  triangle(x - 70, y - 155, x - 110, y - 155, x - 120, y - 240); //yahya
  triangle(x + 70, y - 155, x + 110, y - 155, x + 120, y - 240); //yahya

  //legs

  strokeWeight(20); //yahya
  stroke(30, 0, 40); //yahya
  line(x - 100, y + 160, x - 130, y + 250); //yahya
  line(x - 60, y + 160, x - 70, y + 250);//yahya
  line(x + 100, y + 160, x + 130, y + 250);//yahya
  line(x + 60, y + 160, x + 70, y + 250);//yahya

  //feet

  strokeWeight(8);//yahya
  fill(139, 14, 200); //yahya
  stroke(10, 0, 80); //yahya
  ellipse(x - 70, y + 260, 38, 25); //yahya
  ellipse(x - 130, y + 260, 38, 25); //yahya
  ellipse(x + 130, y + 260, 38, 25); //yahya
  ellipse(x + 70, y + 260, 38, 25); //yahya
}