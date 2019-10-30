console.log("hola, si ves esto en la consola es que el navegador ha detectado el archivo");

var myGamePiece;
var myGamePiece1;
var myObstacle;

function startGame() {
    myGamePiece = new component(60, 60, "img/hamster.png", 225, 225, "image");
    myGamePiece1 = new component(60, 60, "img/hamster2.png", 200, 225, "image");
    myObstacle = new component(60, 60, "red", 250, 100);
    myObstacle1 = new component(60, 60, "green", 500, 250);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
      stop : function() {
    clearInterval(this.interval);
  }
}

function component(width, height, color, x, y, type) {

    this.type = type;
    if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        //ctx.fillStyle = color;

        ctx.restore();
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
    this.crashWith = function(otherobj) {
  var myleft = this.x - (this.width / 2);
  var myright = this.x + (this.width / 2);
  var mytop = this.y - (this.height / 2);
  var mybottom = this.y + (this.height / 2);
  var otherleft = otherobj.x - (otherobj.width / 2);
  var otherright = otherobj.x + (otherobj.width / 2);
  var othertop = otherobj.y - (otherobj.height / 2)
  var otherbottom = otherobj.y + (otherobj.height / 2);
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright))
    {
      crash = false;
    }
    return crash;
  }


}

function updateGameArea() {

 if (myGamePiece.crashWith(myObstacle)||myGamePiece1.crashWith(myObstacle1)) {
    myGameArea.stop();
  } else {
    myGameArea.clear();
    myObstacle.update();
    myObstacle1.update();
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 0;
  }



    if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speed= 4;
     if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.moveAngle = -2; }
    if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.moveAngle = 2; }
    }
    if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speed= -2;
     if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.moveAngle = 2; }
    if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.moveAngle = -2; }
    }
    myGamePiece.newPos();
    myGamePiece.update();

    myGamePiece1.moveAngle = 0;
    myGamePiece1.speed = 0;


    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece1.speed= 4;
     if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece1.moveAngle = -2; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece1.moveAngle = 2; }
    }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece1.speed= -2;
     if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece1.moveAngle = 2; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece1.moveAngle = -2; }
    }
    myGamePiece1.newPos();
    myGamePiece1.update();
}
