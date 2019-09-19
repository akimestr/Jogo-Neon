class Cara {
    constructor(valorx, valory, raio, cor) {
        this.x = valorx;
        this.y = valory;
        this.r = raio;
        this.cor = cor;
    }

    desenha(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = this.cor;
        c.fill();
        c.stroke();
        c.closePath();

    }
    movimento(key) {

        if (key == 37 | key == 65) {
            if (this.x > this.r - 3) {
                this.x = this.x - 3;
            }
            else { this.x = this.r + 3 }
        }

        if (key == 38 | key == 87) {
            if (this.y > this.r - 3) {
                this.y = this.y - 3;
            }
            else {
                this.y > this.r + 3;
            }
        }
        if (key == 39 | key == 68) {
            if (this.x < 500 - this.r) {
                this.x = this.x + 3;
            }
            else { this.x = 500 - this.r }
        }

        if (key == 40 | key == 83) {
            if (this.y < 450 - this.r) {
                this.y = this.y + 3;
            }
            else {
                this.y = 450 - this.r;
            }
        }
    }
}
