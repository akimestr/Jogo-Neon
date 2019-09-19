var co = document.getElementById('desenho');
var c = co.getContext('2d');
var width = document.getElementById('desenho').width;
var height = document.getElementById('desenho').height;

var key = 0;

window.addEventListener('keydown', function (e) {
    key = e.which;
    //console.log(key);
});
window.addEventListener('keyup', function (e) {
    key = 0;
});
var area = new Area(0, 0, 500, 450, "black");

var inimigo1 = new Inimigos(150, 50, 50, 50, "purple");

var inimigo2 = new Inimigos(50, 80, 50, 50, "#39ff14");

var inimigo3 = new Inimigos(70, 100, 50, 50, "#f3f315");

var cara = new Cara(150, 150, 35, "#ff0099");

var comida = new Comida(Math.random()*width, Math.random()*height, 10, "#ff0099");
//var comida = new Comida(70, 90, 20, 20, "red");



var life = 3;

var score = 0;

function desenhaa() {
    area.desenha(c);

    inimigo1.desenha(c);

    inimigo2.desenha(c);

    inimigo3.desenha(c);

    comida.desenha(c);

    inimigo1.moveLeft(500, 450, 3);

    inimigo2.moveD(500, 450, 3);

    inimigo3.moveH(500, 450, 3);


    printscore();
    printlife();
    colidecc(cara, comida);
    colide(cara, inimigo1);
    colide(cara, inimigo2);
    colide(cara, inimigo3);


    cara.desenha(c);

    cara.movimento(key);

    requestAnimationFrame(desenhaa);
}




function colide(cara, Inimigos) {
    var x1 = cara.x;
    var x2 = Inimigos.x;
    var r1 = cara.r;
    var a = Inimigos.a/4;
    var l = Inimigos.l/4;
    var y1 = cara.y;
    var y2 = Inimigos.y;
      //  console.log(l+a);

    if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + l+a) ** 2) {
        Inimigos.x=Math.random()*width;
        Inimigos.y=Math.random()*height;

        if (life==1) {
            alert("Game over");

            var msg = "Game Over :" + life;
            c.fillStyle = "red";
            c.font = "20px sans-serif";
            var texto = height /4 - c.measureText(msg).width/2;
            c.fillText(msg, texto, height);
             
        }else{

            life--; 

        }
        
        return true;
    } else {
        return false;
    }

}

function colidecc(cara, comida) {
    var x1 = cara.x;
    var x2 = comida.x;
    var r1 = cara.r;
    var r2 = comida.r;
    var y1 = cara.y;
    var y2 = comida.y;

    if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2) {
        console.log("x1:" + x1 + "\ny1:" + y1 + "\nx2:" + x2 + "\ny2:" + y2 + "\nr2:" + r2);
        comida.x=Math.random()*width;
        comida.y=Math.random()*height;
        score++;
        return true;
    } else {
        return false;
    }
}


function printlife() {
    var msg = "Vidas :" + life;
    c.fillStyle = "white";
    c.font = "20px sans-serif";
    var texto = height /4 - c.measureText(msg).width/2;
    c.fillText(msg, texto, height);
}

function printscore() {
    var msg = "Pedacinhos:" + score;
    c.fillStyle = "white";
    c.font = "20px sans-serif";
    var texto = height / 2 - c.measureText(msg).width / 2;
    c.fillText(msg, texto, height);
}
desenhaa();