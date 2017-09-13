function Graph (width, height,src, x, y) {
  this.width = width;
  this.height = height;
  this.image = new Image();
  this.image.src = src;
  this.x = x;
  this.y = y;
  this.myleft = this.x;
  this.myright = this.x + (this.width);
  this.mytop = this.y;
  this.mybottom = this.y + (this.height);

  this.getMyImage =function() {
    return this.image;
  }

  this.setMyImage = function(img) {
    this.image.src= img;
  }


  this.getMyRight =function() {
    return this.myright;
  }

  this.getMyLeft =function() {
    return this.myleft;
  }

  this.getMyTop =function() {
    return this.mytop;
  }

  this.getMyBottom =function() {
    return this.mybottom;
  }

  this.getPosX =function() {
    return this.x;
  }
  this.getPosY =function() {
    return this.y;
  }
  this.getWidth =function() {
    return this.width;
  }
  this.getHeight =function() {
    return this.height;
  }
  this.setPosX =function(accu) {
    this.x+= accu;
  }

  this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

  }
}
