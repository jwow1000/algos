// rotate a 3x3 grid 90 degrees in place

function setup() {
    createCanvas(400, 400);
  }
  class Pixel {
    constructor(x, y, val) {
      this.x = x;
      this.y = y;
      this.val = val;
      this.col = [0,0,0];
    }
    rotate90() {
      const x = this.x;
      const y = this.y;
      let absX = Math.abs(y);
      let absY = Math.abs(x);
      // quad 1 invert y
      if( x >= 0 && y >= 0) {
        absY = absY * -1;
      }
      // quad 2 invert both
      if(x >= 0 && y < 0) {
        absY = absY * -1;
        absX = absX * -1;
      }
      // quad 3 invert x
      if(x < 0 && y < 0) {
        absX = absX * -1;
      }
      // quad 4 both positive
      if(x < 0 && y >= 0) {
        
      }
      this.x = absX;
      this.y = absY;
    }
  }
  
  const matrix = {};
  const gridX = 3;
  const gridY = 3;
  // generate the objects
  for (let i = 0; i < gridX; i++) {
    for (let j = 0; j < gridY; j++) {
      const value = i * gridX + j;
      const obj = new Pixel(j - 1, 1 - i, value);
      obj.col = [(value*20)%255, 100, 90];
      matrix[value] = obj;
    }
  }
  
  function printMtx( mtx ) {
    for (const property in mtx) {
      const point = mtx[property];
      const xPos = point.x + 1;
      const yPos = 1 - point.y;
      color(point.col[0], point.col[1], point.col[2]);
      fill(point.col[0], point.col[1], point.col[2]);
      rect((xPos*60)+50, (yPos*60)+50, 50, 50);
    }
  }
  
  function draw() {
    background(220);
    printMtx( matrix);
    
  }
  
  function mousePressed() {
    // 90 degree all pixels
    for (const property in matrix) {
      matrix[property].rotate90();
    }
  }