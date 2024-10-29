class Bishop extends Piece {
    constructor(hor_index, ver_index, isWhite, key) {
      super(hor_index, ver_index, "bishop", isWhite, key);
      
    }

    draw2(context2) {
      if (this.selected) {
        context2.fillStyle = '#ff0000';
      }
      else if (this.isWhite) {
        context2.fillStyle = '#ffffff';
      }
      else {
        context2.fillStyle = '#000000';
      }

      let x = this.hor_index * 30 + 37;
      let y = 300 - this.ver_index * 30 - 52;

      context2.fillRect(x + 1.5, y + 15, 12, 3); //foot
      
      context2.fillRect(x + 2.5, y + 13, 10, 3); //foot slope

      context2.fillRect(x + 3.5, y + 7, 7.5, 6); //body

      

      context2.fillRect(x + 2.5, y + 5, 6, 2);  //left part
      context2.fillRect(x + 2.5, y + 4, 6, 2);
      context2.fillRect(x + 3, y + 2, 3, 2);
      context2.fillRect(x + 3.5, y, 5.5, 2);

      context2.fillRect(x + 10, y + 5, 2.5, 2); //right part
      context2.fillRect(x + 10, y + 4, 2.5, 2); 
      context2.fillRect(x + 12, y + 2, 0.5, 2);
      context2.fillRect(x + 10, y, 2, 2);

      context2.fillRect(x + 5, y - 5, 5, 5);

    }
};