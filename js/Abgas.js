function Abgas(width, height,src, x, y) {

    var myGraph = new Graph(width,height, src, x, y);

    this.getMyImage =function() {
      return myGraph.getMyImage();
    }

}
