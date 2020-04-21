
let playerPaddle;
let aiPaddle;// artificial intelligent 
let ball; // define the ball

function setup() { // from p5.js
    createCanvas(624, 351);// createCanvas p5.js
    playerPaddle = new Paddle(26);// to make the distance from the left and 26 instead of x and h w is coming from paddle.js
    aiPaddle = new Paddle(width - 48);// width 624-48 = 576  from let side // 20 from w+26 dis = 48
    ball = new Ball(); // create the ball object
}
   
  function draw() {// from p5.js
    background(0,0,255);//createCanvas p5.js color blue 
    playerPaddle.display();// method coming from paddle.js calling the rectangle
    aiPaddle.display(); 

    playerPaddle.update(); // add this
    aiPaddle.update();     // and this
       
    processAI();   // andddd thiss

      
    stroke(255, 0, 0);// gives a red stroke
    line(width/2, 0, width/2, height); // draws a line between two points line(x,y,x1,y1)
    stroke(255); // gives a white stroke
    line(width/2-2, 0, width/2-2, height); // draws a line between two points line(x,y,x1,y1)
    stroke(255); // gives a white stroke
    line(width/2+2, 0, width/2+2, height); // draws a line between two points line(x,y,x1,y1)
  


function processAI() {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2; // start from middle of paddle and how the distance from top
       
    if (middleOfPaddle > ball.y) {
      aiPaddle.isUp = true;
      aiPaddle.isDown = false;
    } else {
      aiPaddle.isDown = true;
      aiPaddle.isUp = false;
   
    }
  }

//     // make the player move according to the flag 
//   if (playerPaddle.isUp) { // property which was false and true // call if the paddle is true 
//     playerPaddle.up(); // then call the function which is after pressing of the keyup or keydown and me status would be true // 
//   } else if (playerPaddle.isDown) {
//     playerPaddle.down();
//   }
  ball.update(); // call the update function within ball
  ball.display(); // call the display function within ball
}
  




  function keyPressed() {
    if (keyCode == UP_ARROW) {// UP_ARROW is the code of keyUp
        playerPaddle.isUp = true;
    } else if (keyCode == DOWN_ARROW) { // UP_ARROW is the code of keydown
        playerPaddle.isDown = true;
    }
}
 
function keyReleased() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = false; // when you leave the paddle than will be stope the paddle.
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}

