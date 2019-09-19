class Inimigos {
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
	moveLeft(width, height, speed) {
		this.x -= speed;
		if (this.x < 0) {
			this.x = width;
			this.y = Math.random() * (height - this.a);
		}
	}
	moveD(width, height, speed) {
		this.x -= speed;
		this.y -= speed;

		if (this.x < 0 && this.y < 0) {
			this.x = width;
			this.y = height;


			this.y = Math.random() * (height - this.a);
		}
	}

	moveH(width, height, speed) {
		this.y -= speed;

		if (this.y < 0) {
			this.y = height;


			this.x = Math.random() * (height - this.a);
		}
	}
	//movimento(c){
	//inimigo1.y++;
	//inimigo2.x++;
	//}

}