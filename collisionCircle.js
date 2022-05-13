class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getRadius() {
        return this.radius;
    }


    drawCircle(elementID){
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    isCollision(otherCircle) {
        let distX = Math.pow(this.x - otherCircle.getX(),2);
        let distY = Math.pow(this.y - otherCircle.getY(),2);
        let distXY = Math.sqrt(distX + distY);
        let rad = (this.radius + otherCircle.getRadius());
        return (distXY <= rad);
    }
}