class Area {
	constructor(valorx, valory, altura, largura, cor) {
		this.x = valorx;
		this.y = valory;
		this.a = altura;
		this.l = largura;
		this.cor = cor;
	}

	desenha(c) {
		c.beginPath();
		c.rect(this.x, this.y, this.a, this.l);
		c.fillStyle = this.cor;
		c.fill();
		c.stroke();
		c.closePath();

	}
}