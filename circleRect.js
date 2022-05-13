class RectCircle {
    constructor (x, y, width, height, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getW() {
        return this.width;
    }
    getH() {
        return this.height;
    }
    getRadius() {
        return this.radius;
    }

    drawCircle(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    drawRect(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
    isCollisionRect(rect) {
        let circleX = this.x; let circleY = this.y;
        let rectTopLeftX = rect.getX(); let rectTopLeftY = rect.getY();
        let rectBottomRightX = rect.getX() + rect.getW();
        let rectBottomRightY = rect.getY() + rect.getH();
        if (circleX < rectTopLeftX){
            circleX = rectTopLeftX;
        }else if(circleX > rectBottomRightX){
            circleX = rectBottomRightX;
        }
        if (circleY < rectTopLeftY){
            circleY = rectTopLeftY;
        } else if(circleY > rectBottomRightY){
            circleY = rectBottomRightY;
        }
        let distanceX = this.x - circleX;
        let distanceY = this.y - circleY;
        return Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY,2)) <= this.radius;
        
    }
}