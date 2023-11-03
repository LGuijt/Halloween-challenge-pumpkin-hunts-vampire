function setup() {
  createCanvas(500, 500);
  explosion = loadImage("assets/explode.jpg")
 
}

//variabelen
let x = 0
let y = 0
let vx = 0
let vy = 0
let direct = 0
let baseX = 400
let baseY = 100
let pumpkinX = 40
let pumpkinY = 140
let gameStarted = false;

function draw() {
  background(110);  
  textSize(40)
  fill('red')
  text('Garlic dressed as pumpkin', 10,50)
  text('Hunts a Vampire!', 100,450)
  vampire(false,false,false,false);
  pumpkin();
  gameEnd();
}

function keyPressed(){
  //beweging pompoen
  if(keyCode === UP_ARROW){
    y -= 20
    pumpkinY -= 20
    vampire(true, false, false, false)
  }

  if(keyCode === DOWN_ARROW){
    y += 20
    pumpkinY += 20
    vampire(false, true, false, false)
  }

  if(keyCode === LEFT_ARROW){
    x -= 20
    pumpkinX -= 20
    vampire(false,false,true, false)
  }

  if (keyCode === RIGHT_ARROW){
    x += 20;
    pumpkinX += 20;
    vampire(false,false,false,true)
  }
}

function pumpkin(){
  strokeWeight(3);

  // stem
  stroke(0, 160, 0);
  fill(0,200,0)
  quad(30 + x, 110 + y, 35 + x, 110 + y, 40 + x, 120 + y, 35 + x, 120 + y);

  // orange
  fill(255, 100, 0);
  stroke(0, 100);
  
  // pumpkin is made up of circles
  ellipse(40 + x, 140 + y, 50, 35);
  ellipse(40 + x, 140 + y, 40, 35);
  ellipse(40 + x, 140 + y, 25, 35);
  ellipse(40 + x, 140 + y, 10, 35);

  //yellow
  fill(256,256,0);
  stroke(0)

  //eyes
  arc(30 + x, 137 + y, 15, 15, 1, 3.5,CHORD);
  arc(50 + x,137 + y,15,15,-0.5,2,CHORD)
}

function vampire(a, b, c, d) {
  //beweging vampier
  if (a) {
    direct = Math.floor(random(0, 3));
    if (direct === 0) {
      if (baseX <= 450) {
        vx += 20;
        baseX += 20;
      } else {
        vx -= 20;
        baseX -= 20;
      }
    } else if (direct === 1) {
      if (baseX >= 50) {
        vx -= 20;
        baseX -= 20;
      } else {
        vx += 20;
        baseX -= 20;
      }
    } else if (direct === 2) {
      if (baseY >= 50) {
        vy -= 20;
        baseY -= 20;
      } else {
        vy += 20;
        baseY += 20
      }
    }
  } else if (b) {
    direct = Math.floor(random(0, 3));
    if (direct === 0) {
      if (baseX <= 450) {
        vx += 20;
        baseX += 20;
      } else {
        vx -= 20;
        baseX -= 20;
      }
    } else if (direct === 1) {
      if (baseX >= 50) {
        vx -= 20;
        baseX -= 20
      } else {
        vx += 20;
        baseX += 20;
      }
    } else if (direct === 2) {
      if (baseY <= 400) {
        vy += 20;
        baseY += 20;
      } else {
        vy -= 20;
        baseY -= 20;
      }
    }
  } else if (c) {
    direct = Math.floor(random(0, 3));
    if (direct === 0) {
      if (baseY <= 400) {
        vy += 20;
        baseY += 20;
      } else {
        vy -= 20;
        baseY -= 20;
      }
    } else if (direct === 1) {
      if (baseX >= 50) {
        vx -= 20;
        baseX -= 20;
      } else {
        vx += 20;
        baseX += 20;
      }
    } else if (direct === 2) {
      if (baseY >= 50) {
        vy -= 20;
        baseY -= 20;
      } else {
        vy += 20;
        baseY += 20;
      }
    }
  } else if (d) {
    direct = Math.floor(random(0, 3));
    if (direct === 0) {
      if (baseY <= 400) {
        vy += 20;
        baseY += 20;
      } else {
        vy -= 20;
        baseY += 20;
      }
    } else if (direct === 1) {
      if (baseX <= 450) {
        vx += 20;
        baseX += 20;
      } else {
        vx -= 20;
        baseX -= 20;
      }
    } else if (direct === 2) {
      if (baseY >= 50) {
        vy -= 20;
        baseY -= 20;
      } else {
        vy += 20;
        baseY += 20;
      }
    }
  }

  strokeWeight(2);
  //vampire look
  fill("red");
  triangle(380 + vx, 115 + vy, 400 + vx, 135 + vy, 420 + vx, 115 + vy);
  fill("beige");
  strokeWeight(1);
  rect(395 + vx, 110 + vy, 10, 30);
  circle(400 + vx, 100 + vy, 40);
  line(390 + vx, 110 + vy, 410 + vx, 110 + vy);
  line(388 + vx, 96 + vy, 398 + vx, 102 + vy);
  line(402 + vx, 102 + vy, 412 + vx, 96 + vy);
  fill("white");
  triangle(390 + vx, 110 + vy, 393 + vx, 116 + vy, 396 + vx, 110 + vy);
  triangle(405 + vx, 110 + vy, 408 + vx, 116 + vy, 411 + vx, 110 + vy);
  fill("black");
  strokeWeight(4);
  line(380 + vx, 85 + vy, 420 + vx, 85 + vy);
  rect(390 + vx, 60 + vy, 20, 21);
  triangle(374 + vx, 145 + vy, 400 + vx, 125 + vy, 426 + vx, 145 + vy);
  rect(370 + vx, 149 + vy, 60, 100);
}

function gameEnd() {
  //einde spel
  if (pumpkinX === baseX && pumpkinY === baseY) {
    image(explosion,0,0,500,500)
    fill('yellow')
    text('You Won!', 200,100)
  }
}