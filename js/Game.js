const MAX_B=0.01;
const MIN_B=0.005;
const MAX_Y=600;
const MIN_Y=350;
const MAX_X=20;
const MIN_X=800;
var mycara;
var mycarb;
var mycarc;
var mycard;
var mytree;
var trees = [];
var everyBottom= [];
var everybody= [];
var result= [];
var ntrees = 4;
var posY;
var posX;
var actualax;
var actualay;
var actualbx;
var actualby;
var actualcx;
var actualcy;
var actualdx;
var actualdy;
var oncea;
var onceb;
var oncec;
var onced;
var oncefinal=1;
var myScore = new Score("30px", "Consolas", "black", 280, 40);
var myTotal = new Score("30px", "Consolas", "black", 480, 40);
var reset=0;

function startGame() {
      oncea=1;
      onceb=1;
      oncec=1;
      onced=1;
      myTotal.score+= myScore.tempScore;
      //myOver.score+= 0;
      myScore.tempScore=0;
      myTotal.text="Score: " + myTotal.score;
      //myOver.text="GAME OVER";

      for (var i = 0; i < ntrees; i++) {
        posY= Math.random() * (MAX_Y - MIN_Y) + MIN_Y;
        posX= Math.random() * (MAX_X - MIN_X) + MIN_X;
        trees.push(new Tree(100, 100, "img/busch.png", posX, posY));
      }
      //console.log("Creando carros");
      mycara= new Auto(100, 100, "img/carwhite.png",-50,310,"img/plakette2.png","red","green","img/abgas3.png");
      mycarb= new Auto(100, 100, "img/carblue.png",-50,400,"img/plakette3.png","yellow","yellow","img/abgas30.png");
      mycarc= new Auto(100, 100, "img/carpink.png",-50,500,"img/plakette4.png","green","red","img/abgas31.png");
      mycard= new Auto(100, 100, "img/caryellow.png",-50,600,"img/plakette2.png","red","green","img/abgas3.png");


      mycara.beschleunigung= Math.random() * (MAX_B - MIN_B) + MIN_B;
      mycarb.beschleunigung= Math.random() * (MAX_B - MIN_B) + MIN_B;
      mycarc.beschleunigung= Math.random() * (MAX_B - MIN_B) + MIN_B;
      mycard.beschleunigung= Math.random() * (MAX_B - MIN_B) + MIN_B;
      myGameArea.start();
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.frameNo += 1;
    mycara.newPos();
    mycarb.newPos();
    mycarc.newPos();
    mycard.newPos();
    everybody = [mycara, mycarb, mycarc,mycard, trees[0], trees[1], trees[2], trees[3]];
    everyBottom = [mycara.getMyBottom(), mycarb.getMyBottom(), mycarc.getMyBottom(),mycard.getMyBottom(), trees[0].getMyBottom(), trees[1].getMyBottom(), trees[2].getMyBottom(), trees[3].getMyBottom()];
    bubbleSort(everyBottom);
    for (var j = 0; j < 8; j++){
      for (var k = 0; k < 8; k++){
        if (everyBottom[j] == everybody[k].getMyBottom()){
          result[j] = everybody[k];
        }
      }
    }
    for (var l=0; l<8; l++){
      result[l].update();
    }
    actualax = mycara.getPosX();
    actualay = mycara.getPosY();
    actualbx = mycarb.getPosX();
    actualby = mycarb.getPosY();
    actualcx = mycarc.getPosX();
    actualcy = mycarc.getPosY();
    actualdx = mycard.getPosX();
    actualdy = mycard.getPosY();
    if(mycara.getPosX()<1000){
      myScore.text="Correct: " + myScore.score;
    } else if (mycara.correctColor()&& oncea){
      oncea=0;
      myScore.tempScore += 1;
      myScore.text="Correct: " + myScore.score;
    }
    if(mycarb.getPosX()<1000){
      myScore.text="Correct: " + myScore.score;
    } else if (mycarb.correctColor()&& onceb){
      onceb=0;
      myScore.tempScore += 1;
      myScore.text="Correct: " + myScore.score;
    }
    if(mycarc.getPosX()<1000){
      myScore.text="Correct: " + myScore.score;
    } else if (mycarc.correctColor()&& oncec){
      oncec=0;
      myScore.tempScore += 1;
      myScore.text="Correct: " + myScore.score;
    }
    if(mycard.getPosX()<1000){
      myScore.text="Correct: " + myScore.score;
    } else if (mycard.correctColor()&& onced){
      onced=0;
      myScore.tempScore += 1;
      myScore.text="Correct: " + myScore.score;
    }
      myScore.score= myScore.tempScore;
      myScore.update();
      myTotal.update();
    if (myScore.tempScore==4){
      startGame()
    } else if((actualax>1000) && (actualbx>1000) && (actualcx>1000) && (actualdx>1000) && (oncefinal==1)) {
      oncefinal=0;
      myScore.text="Correct: " + myScore.score;
      myScore.update();
      myTotal.score+= myScore.tempScore;
      myTotal.text="Score: " + myTotal.score;
      myTotal.update();
      alert("GAME OVER! "+"Your total score is: "+ myTotal.score);
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    mycara.beschleunigung=n;
    mycarb.beschleunigung=n;
    mycarc.beschleunigung=n;
    mycard.beschleunigung=n;
}

function mouseMoved(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function mouseClicked(e) {
  var x= e.offsetX;
  var y= e.offsetY;
    whichCar(x,y);
}

function whichCar(x,y) {
  var actualrigtha= actualax + mycara.getMyRight();
  var actuallefta= actualay + mycara.getMyLeft();
  if (x < actualrigtha && x > actualax && y > mycara.getMyTop() && y <mycara.getMyBottom()) {
      plakettewechseln(mycara);
  }
  var actualrigthb= actualbx + mycarb.getMyRight();
  var actualleftb= actualby + mycarb.getMyLeft();

  if (x < actualrigthb && x > actualbx && y > mycarb.getMyTop() && y <mycarb.getMyBottom()) {
      plakettewechseln(mycarb);
  }
  var actualrigthc= actualcx + mycarc.getMyRight();
  var actualleftc= actualcy + mycarc.getMyLeft();

  if (x < actualrigthc && x > actualcx && y > mycarc.getMyTop() && y <mycarc.getMyBottom()) {
      plakettewechseln(mycarc);
  }
  var actualrigthd= actualdx + mycard.getMyRight();
  var actualleftd= actualdy + mycard.getMyLeft();
  if (x < actualrigthd && x > actualdx && y > mycard.getMyTop() && y <mycard.getMyBottom()) {
      plakettewechseln(mycard);
  }
}

function plakettewechseln(thisCar) {
  if (thisCar.getColor()=="red"){
    thisCar.setImage(1);
    thisCar.setColor("green");
  } else if (thisCar.getColor()=="green"){
    thisCar.setImage(2);
    thisCar.setColor("yellow");
  } else if (thisCar.getColor()=="yellow") {
    thisCar.setImage(3);
    thisCar.setColor("red");
  }
}

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
