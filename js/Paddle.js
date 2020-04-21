class Paddle {  // why we have create a class because we can use it many times
 
    constructor(x) {  // make object to set the property
        this.x = x;  // x left space and y from top from border 
        this.y = height / 2; // height is height of display window
        this.height = 80; // paddle
        this.width = 20; // paddle
        this.isUp = false; // to make paddle stable
        this.isDown = false;
    }
     
     // y = height and x = width
    display() { // method 
        fill(255); // color white
        rect(this.x, this.y, this.width, this.height); // to make the paddle format
    }

    // add these little buggers
    // up() {
    //     this.y -= 2; // speed of paddle from y side // this mean object of each object
    // }
     
    // down() {
    //     this.y += 2;// speed of paddle from y side to push the paddle to down to make space
    // }
     
    up() {
        if (this.y > 0) {// if w has space make it -2 to reduce the space till reach 0 
            this.y -= 4;
        }
    }
     
    down() {
        if (this.y < height - this.height) {// height canvas 351 height paddle = 80 = 271 351-80 = 271 this.height= 80 

            this.y += 4; // distance get increase iam going dow and there would be more space from top y
        }
    }

    update() {
        if (this.isUp) {
          this.up();
        } else if (this.isDown) {
          this.down();
        }
      }

 
}