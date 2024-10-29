class Pawn extends Piece {
    constructor(hor_index, ver_index, isWhite, doubleStepped, key) {
      super(hor_index, ver_index, "pawn", isWhite, key);
      
      this.doubleStepped = doubleStepped;
    }

    draw2(context) {
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

      context2.fillRect(x + 2.5, y + 5, 10, 2);  //left part
      context2.fillRect(x + 2.5, y + 4, 10, 2);
      context2.fillRect(x + 3, y + 2, 9, 2);
      context2.fillRect(x + 3.5, y, 8, 2);
      context2.fillRect(x + 4.5, y - 2, 6, 2);
    }
};