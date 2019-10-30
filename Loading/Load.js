var canvas = document.querySelector("canvas");
var myGamePiece;

function startGame() {
    //myGamePiece = new component(30, 200, "yellow", -5, 200);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
		this.canvas.margin = 0;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
//    clear : function() {
//        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//    }
}

//function component(width, height, color, x, y) {
//    this.width = width;
//    this.height = height;
//    this.x = x;
//    this.y = y;
//    this.speedX = 20;
//    this.update = function(){
//        ctx = myGameArea.context;
//        ctx.fillStyle = color;
//        ctx.fillRect(this.x, this.y, this.width, this.height);
//    }
//}
//
//this.hitBottom = function() {
//    var rockbottom = myGameArea.canvas.width - this.width;
//    if (this.x > rockbottom)
//    this.x = rockbottom;
//    }
//
//function updateGameArea() {
//    myGameArea.clear();
//    myGamePiece.x += 1;
//    myGamePiece.update();
//}