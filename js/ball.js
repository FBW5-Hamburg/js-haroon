class Ball{

    constructor() {   // each class has the constructor
        this.r = 10; // diyra 
        this.reset();
    }
     
    update() {
        // if it hits the top or bottom change direction
        if (this.y < this.r || this.y > height - this.r) { // all ifo are for the ball when this les than 10 it mean tuched
            this.ySpeed = -this.ySpeed;                 // in the second if the ball going to down and yspeed is positive
        } 
         //if it goes to the end of the screen restart the game
         if (this.x < this.r || this.x > width + this.r) {
             this.reset();
         }
         
        this.x += this.xSpeed; // make the increment of speed
        this.y += this.ySpeed;
    }
     
    reset() {// method 
        this.x = width/2; // center position of ball
        this.y = height/2; // center position of ball
         
        this.xSpeed = random(3, 4);  // between 3 and 4 that is only for x speed
         
        // determines if it's going left or right
        let isLeft = random(1) > .5; // creating a number between 0 and 1 and muching with 0.5
        if (isLeft) { // its bigger than 0.5 its true when its smaller than 0.5 than its false.
            this.xSpeed = -this.xSpeed; // after creating the ball make the direction for the ball 
        } 
         
        this.ySpeed = random(-3, 3); // if xspeed will be true than the direction of ball is - 
    }
     
    display() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2); // ellipse make the ball using information by reset function 
    }
     
     
}