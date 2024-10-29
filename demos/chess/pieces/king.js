class King extends Piece {
    constructor(hor_index, ver_index, isWhite, hasMoved, key) {
      super(hor_index, ver_index, "king", isWhite, key);
      
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

      context2.fillRect(x + 1, y + 13, 13, 5); //base

      context2.fillRect(x, y + 13, 15, 2); //ring 1

      context2.fillRect(x + 2, y + 10, 11, 5); //base 2

      context2.fillRect(x + 3, y + 2, 9, 11); //body

      context2.fillRect(x + 1, y + 2, 13, 1); //head

      context2.fillRect(x + 0.5, y - 1, 3, 3); //head left
      context2.fillRect(x + 6.5, y - 1, 2.5, 3); //head right
      context2.fillRect(x + 11.5, y - 1, 3, 3); //head right

      context2.fillRect(x + 1.5, y - 3, 12, 2); //head

      context2.fillRect(x + 7, y - 6, 2, 3);

      context2.fillRect(x + 5.5, y - 5, 5, 1);
    }
};