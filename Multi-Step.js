let colours, clr, c, steps;

function normaliseColours(colours) {
  let normalised = [...Array(steps)].map(() => Array(3).fill(""));
  for(let i = 0; i < steps; ++i) {
    for(let j = 0; j < 3; ++j) {
      normalised[i][j] = colours[i][j] / 255;
    }
  }
  return normalised;
}

function lerpC(colourA, colourB, value) {
  const lerpedValues = [
    colourA[0] + (colourB[0] - colourA[0]) * value,
    colourA[1] + (colourB[1] - colourA[1]) * value,
    colourA[2] + (colourB[2] - colourA[2]) * value
  ];
  return lerpedValues;
}

function setup() {
  noLoop();
  let listColours = [];
  steps = parseInt(prompt("Enter amount of colours:"));
  colours = [...Array(steps)].map(() => Array(3).fill(""));
  
  for(let i = 0; i < steps; ++i) {
    clr = prompt(`Enter colour ${i+1} in the format R, G, B:`);
    listColours.push(clr);
  }
  
  if (steps == 1) {
    listColours.push(clr);
    colours.push(["", "", ""]);
    ++steps;
  }
  
  for(let i = 0; i < listColours.length; ++i) {
    listColours[i] = listColours[i].replace(/ /g,'');
  }
  
  for(let i = 0; i < steps; ++i) {
    for(let j = 0; j < 3; ++j) {
      colours[i][j] = parseInt(listColours[i].split(",")[j]);
    }
  }
  colours = normaliseColours(colours);
  const canvasWidth = prompt("Enter canvas width in px:");
  const canvasHeight = prompt("Enter canvas height in px:");
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  let stepIndex, fraction;
  for(let i = 0; i < width; ++i) {
    stepIndex = floor(i / (width/(steps - 1)));
    fraction = (i % (width/(steps - 1))) / (width/(steps - 1));
    c = lerpC(colours[stepIndex], colours[stepIndex+1], fraction);
    for(let j = 0; j < height; ++j) {
      set(i, j, color(c[0]*255, c[1]*255, c[2]*255));
    }
  }
  updatePixels();
}
