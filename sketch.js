// Define the grid spacing
let grid = 20;

function setup() {
  createCanvas(600, 600); // Set a fixed size for the canvas
  noStroke();
}

function draw() {
  // Clear the screen
  background(255);

  // Loop through X & Y positions
  for (let x = -1; x < width / grid; x++) {
    for (let y = -1; y < height / grid; y++) {

      // Randomize color
      let r = random(180, 255);
      let g = random(50, 150);
      let b = random(100, 180);
      fill(r, g, b, 150);

      // Calculate grid position
      let rect_x = x * grid;
      let rect_y = y * grid;

      // Calculate distance to mouse and scale rectangle size
      let mouseDistance = dist(rect_x, rect_y, mouseX, mouseY);
      let rectSize = mouseDistance * 0.2;

      // Draw circles near the mouse, rectangles otherwise
      if (mouseDistance < 50) {
        ellipse(rect_x, rect_y, rectSize, rectSize);
      } else {
        rect(rect_x, rect_y, rectSize, rectSize);
      }
    }
  }
}
