class Rook extends Piece {
    constructor(hor_index, ver_index, isWhite, hasMoved, key) {
      super(hor_index, ver_index, "rook", isWhite, key);
      
      this.hasMoved = hasMoved;
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

      context2.fillRect(x + 1, y + 13, 13, 5);

      context2.fillRect(x + 2, y + 10, 11, 5);

      context2.fillRect(x + 3, y + 2, 9, 11);

      context2.fillRect(x, y + 2, 12, 3);

      context2.fillRect(x, y - 3, 3, 8);
      context2.fillRect(x + 5, y - 3, 2, 8);
      context2.fillRect(x + 8, y - 3, 2, 8);
      context2.fillRect(x + 12, y - 3, 3, 8);    
    }
};