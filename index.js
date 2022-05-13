class Rect {
    constructor(x, y, width, height, color = "blue") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
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

    drawRect(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.lineJoin = "round";
        ctx.fill();
        
    }
    isCollision(otherRect) {
        let distX = (this.x + this.width / 2) - (otherRect.getX() + otherRect.getW()/2);
        if (distX < 0) {
            distX = -distX;
        }
        let distY = (this.y + this.height / 2) - (otherRect.getY() + otherRect.getH()/2);
        distY = Math.abs(distY);
        let distW = (this.width + otherRect.getW()) / 2;
        let distH = (this.height + otherRect.getH()) / 2;
        return (distX <= distW && distY < distH);
    }
}

