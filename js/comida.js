class Comida {
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
}