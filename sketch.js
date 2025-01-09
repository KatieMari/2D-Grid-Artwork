// Define the Grid Spacing Which Determines how Large Each Square is
let grid = 20;

function setup() {
  // Set a Fixed Canvas Size for the Artwork
  createCanvas(600, 600);

  strokeWeight(0.1);
}

function draw() {
  // Clear the Screen Every Frame to Avoid Overlapping Shapes
  background(255);

  // Loop Through X and Y Positions to Create the Grid
  for (let x = -1; x < width / grid; x++) {
    for (let y = -1; y < height / grid; y++) {

      // Randomly Generates RGB Values to Create Colourful Squares
      let r = random(180, 255);
      let g = random(50, 150);
      let b = random(100, 180);
      // Sets the Fill Colour with Some Transparency
      fill(r, g, b, 150);

      // Calculate the Position of each Rectangle in the Grid
      let rect_x = x * grid;
      let rect_y = y * grid;

      // Calculates the Distance from the Rectangle's Center to the Mouse
      let mouseDistance = dist(rect_x, rect_y, mouseX, mouseY);

      // Scale the Size of the Rectangle Based on the Mouse Distance
      let rectSize = mouseDistance * 0.2;

      // Draw an Ellipse Near the Mouse, Otherwise Draw Rectangles
      if (mouseDistance < 50) {
        ellipse(rect_x, rect_y, rectSize, rectSize);
      } else {
        rect(rect_x, rect_y, rectSize, rectSize);
      }
    }
  }
}
