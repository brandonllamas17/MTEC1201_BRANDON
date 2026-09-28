// Brandon L
// Tesseract
// The theme I am choosing to explore this semester is how three and four dimensional objects look when flattened onto a 2D canvas.
// I am interested in the idea of an invisible fourth axis and how it can only be seen through representation.  

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);

  // background circle
  noStroke();
  fill(120, 170, 230);
  ellipse(500, 500, 1000, 1000);

  // line settings
  stroke(0);
  noFill();

  // inner cube
  strokeWeight(2);

  // front face
  rect(375, 425, 200, 200);
  // back face
  rect(425, 375, 200, 200);
  // connecting lines
  line(375, 425, 425, 375);
  line(575, 425, 625, 375);
  line(575, 625, 625, 575);
  line(375, 625, 425, 575);

  // outer cube
  strokeWeight(4);

  // front face
  rect(188, 262, 550, 550);
  // back face
  strokeWeight(3);
  rect(263, 187, 550, 550);
  // connecting lines - in between
  strokeWeight(4);
  line(188, 262, 263, 187);
  line(738, 262, 813, 187);
  line(738, 812, 813, 737);
  line(188, 812, 263, 737);

  // connecting lines - outer to inner
  strokeWeight(3);
  line(188, 262, 375, 425); // front top-left
  line(738, 262, 575, 425); // front top-right
  line(738, 812, 575, 625); // front bottom-right
  line(188, 812, 375, 625); // front bottom-left

  strokeWeight(2);
  line(263, 187, 425, 375); // back top-left
  line(813, 187, 625, 375); // back top-right
  line(813, 737, 625, 575); // back bottom-right
  line(263, 737, 425, 575); // back bottom-left
}
