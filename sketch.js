function setup() {
    createCanvas(1000, 1000);
    background("yellow");
  }
  function draw() {
    stroke("purple");
  fill("blue");
    
    if(mouseIsPressed)  {
      rect(mouseX, mouseY, 30, 30)
      
    }
  }