const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 701;
const CANVAS_FRAME = 25;
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.addEventListener('mousemove', mouseMoved, false);           //eventlistenercanvas
        this.canvas.addEventListener('click', mouseClicked, false);             //eventlistenercanvas
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, CANVAS_FRAME);

      },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
