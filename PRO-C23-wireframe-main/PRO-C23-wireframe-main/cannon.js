class Cannon{
    constructor(x, y, w, h, angle){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.angle = angle;
    }

    show(){
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.35){
            this.angle +=0.02;
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -1.45){
            this.angle -=0.02;
        }

        fill("#676e6a");

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        pop();
        arc(this.x - 40, this.y + 90, 140, 200, PI, TWO_PI);
        noFill();
    }
}