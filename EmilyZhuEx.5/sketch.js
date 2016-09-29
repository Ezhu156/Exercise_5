var x;
var y;
var n; //x value for arrow key controls
var c; //y value for arrow key controls
var r; //red value
var g; // green value
var b; // blue value

function setup() {
  createCanvas(1200, 800);
  background(80, 40, 70); //yahya
}

function draw() {
  scale(.7, .7);

  //keyboard monster 1= monster1 moves with arrow keys
  //keyboard monster 2= monster2 moves with arrow keys
  //mouse monster1= monster1 moves with mouse
  //mouse monster2= monster2 moves with mouse

  //mouse must be pressed once for monsters controlled by keyboard to appear on the screen
  if (mouseIsPressed) { //if mouse is pressed, keyboard monster 1+2 will return to original location
    n = 1000 //starting x location of keyboard monster 1+2
    c = 600 // starting y location of keyboard monster 1+2
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

  // keyboard monster1 moves with arrow keys
  r = 215;
  g = 193;
  b = 255;
  monster1(n, c, r, g, b); //keyboard monster1

  // mouse monster1 starts under mouse monster 2 and the farther the mouse goes to the right, the farther away
  // mouse monster 1 gets from mouse monster 2
  r = 203;
  g = 251;
  b = 255;
  monster1(200 + 2 * mouseX, 200 + mouseY, r, g, b); //mouse monster1

  // mouse monster2 moves with the mouse
  r = 70 //red value for monster 2
  g = 150 //green value for monster 2
  b = 200 //blue value for monster 2
  monster2(200 + mouseX, mouseY, r, g, b); //mouse monster2

  // keyboard monster2 moves in the opposited direction of keyboard monster1
  r = 139; //red value for keyboard monster 2
  g = 14; //green value for keyboard monster 2
  b = 200; //blue value for keyboard monster 2
  monster2(-n + 1500, c, r, g, b); //keyboard monster2

}
//morphed monster
function monster1(x, y, r, g, b) {
  legs(x, y, r, g, b);
  horns(x, y, r, g, b);
  arms(x, y, r, g, b);
  body(x, y, r, g, b);
  eyes(x, y, r, g, b);
  mouth(x, y, r, g, b);
}

function eyes(x, y, r, g, b) {
  fill(g, b, r);
  strokeWeight(4);
  stroke(0); //yahya
  ellipse(x, y - 70, 32, 30); //yahya
  ellipse(x + 70, y - 65, 32, 30); //yahya
  ellipse(x - 70, y - 63, 32, 30); //yahya

  //eyebrows

  line(x - 20, y - 100, x + 20, y - 100); //yahya
  line(x - 90, y - 100, x - 60, y - 90); //yahya
  line(x + 90, y - 100, x + 60, y - 90); //yahya
}

function mouth(x, y, r, g, b) {
  //mouth
  stroke(0);
  strokeWeight(4);
  fill(0, 50, 0); //yahya
  triangle(x - 100, y + 50, x, y + 100, x + 100, y + 50); //yahya

  //teeth
  noStroke();
  fill(255);
  triangle(x - 53, y + 51, x - 43, y + 66, x - 33, y + 51);
  triangle(x - 23, y + 51, x - 13, y + 66, x - 3, y + 51);
  triangle(x + 7, y + 51, x + 17, y + 66, x + 27, y + 51);
  triangle(x + 37, y + 51, x + 47, y + 66, x + 57, y + 51);
}

function body(x, y, r, g, b) {
  // Body
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 360, 360);
}

function legs(x, y, r, g, b) {
  //legs

  strokeWeight(20); //yahya
  stroke(30, 0, 40); //yahya
  line(x - 100, y + 160, x - 130, y + 250); //yahya
  line(x - 60, y + 160, x - 70, y + 250); //yahya
  line(x + 100, y + 160, x + 130, y + 250); //yahya
  line(x + 60, y + 160, x + 70, y + 250); //yahya

  // feet
  strokeWeight(8); //yahya
  fill(139, 14, 200); //yahya
  stroke(10, 0, 80); //yahya
  ellipse(x - 70, y + 260, 38, 25); //yahya
  ellipse(x - 130, y + 260, 38, 25); //yahya
  ellipse(x + 130, y + 260, 38, 25); //yahya
  ellipse(x + 70, y + 260, 38, 25); //yahya
}

function horns(x, y, r, g, b) {
  //top horn, left horn, right horn
  noStroke();
  fill(255, 246, 215);
  triangle(x - 8, y - 180, x + 2, y - 230, x + 12, y - 180);
  triangle(x - 48, y - 150, x - 42, y - 210, x - 28, y - 160);
  triangle(x + 32, y - 160, x + 47, y - 210, x + 52, y - 150);
}

function arms(x, y, r, g, b) {
  //left arm, right arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(x + 130, y + 70, 67, 200, 0, PI / 2, OPEN);
  arc(x - 130, y + 70, 67, 200, PI / 2, PI, OPEN);
}

function monster2(x, y, r, g, b) {

  //body
  //fill(139, 14, 200);
  fill(r, g, b); //yahya
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
  line(x - 60, y + 160, x - 70, y + 250); //yahya
  line(x + 100, y + 160, x + 130, y + 250); //yahya
  line(x + 60, y + 160, x + 70, y + 250); //yahya

  //feet

  strokeWeight(8); //yahya
  fill(139, 14, 200); //yahya
  stroke(10, 0, 80); //yahya
  ellipse(x - 70, y + 260, 38, 25); //yahya
  ellipse(x - 130, y + 260, 38, 25); //yahya
  ellipse(x + 130, y + 260, 38, 25); //yahya
  ellipse(x + 70, y + 260, 38, 25); //yahya
}
