function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    background(255)
  }
function draw() {
  ellipse(width / 3.5, height / 3, 100, 100);
  ellipse(width / 1.5, height / 3, 100, 100);
  line(width / 0.0001, height / 10, 0, 300);
  fill(255)
}

function preload() {
   
}

function take_snapshot(){
    save('Imagen')
}