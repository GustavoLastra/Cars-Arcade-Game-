function Auto (width, height, src, x, y, p,color, cc, abgas) {
  var myGraph = new Graph(width,height, src, x, y);
  var myAbgas = new Abgas(50,25 ,abgas,myGraph.getPosX(),myGraph.getPosY());
  var myPlak = new Plakatte(60, 60,p,myGraph.getPosX(),myGraph.getPosY());
  this.color= color;
  this.correctcolor = cc;
  this.speedX = 0;
  this.speedY = 0;
  this.maxx=1100;
  this.beschleunigung = 0;
  this.beschleunigungSpeed = 0;

  this.getMyRight =function() {
    return myGraph.getMyRight();
  }

  this.getMyLeft =function() {
    return myGraph.getMyLeft();
  }

  this.getMyTop =function() {
    return myGraph.getMyTop();
  }

  this.getMyBottom =function() {
    return myGraph.getMyBottom();
  }

  this.getPosX = function () {
    return myGraph.getPosX();
  }

  this.getPosY = function () {
    return myGraph.getPosY();
  }

  this.update = function() {
  ctx = myGameArea.context;
  ctx.drawImage(myGraph.getMyImage(),myGraph.getPosX(),myGraph.getPosY(),myGraph.getWidth(), myGraph.getHeight());
  ctx.drawImage(myPlak.getMyImage(),myGraph.getPosX(),myGraph.getPosY(),60, 60);
  ctx.drawImage(myAbgas.getMyImage(),myGraph.getPosX()-50,myGraph.getPosY()+70,50,25);
  }

  this.newPos = function() {
      this.beschleunigungSpeed += this.beschleunigung;
      if(myGraph.getPosX()<=this.maxx){
      myGraph.setPosX(this.speedX + this.beschleunigungSpeed);
      }
  }

  this.getColor = function() {
    return this.color;
  }

  this.setColor = function(farbe) {
    this.color=farbe;
  }

  this.correctColor = function() {
    if (this.getColor()== cc){
      return 1;
    }else {
      return 0;
    }
  }

  this.setImage = function(select) {
    switch(select){
      case 1:
        myPlak.setMyImage("img/plakette4.png")
        break;
      case 2:
        myPlak.setMyImage("img/plakette3.png")
        break;
      case 3:
        myPlak.setMyImage("img/plakette2.png")
    }
  }
}
