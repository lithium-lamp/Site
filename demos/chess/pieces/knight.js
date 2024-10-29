class Knight extends Piece {
    constructor(hor_index, ver_index, isWhite, key) {
      super(hor_index, ver_index, "knight", isWhite, key);
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
      let y = 300 - this.ver_index * 30 - 61;




      // Draw the body
      context2.fillRect(x + 3, y + 17, 10, 10); // Body

      // Draw the base
      context2.fillRect(x + 2, y + 24, 12, 3); // Base

      context2.fillRect(x + 5, y + 15, 8, 3); // Body

      context2.fillRect(x + 7, y + 13, 8, 6); // Body

      context2.fillRect(x + 6, y + 10, 8, 6); // Body

      context2.fillRect(x + 4, y + 7, 8, 6); // Body

      // Draw the mane (top part of the knight's head)
      context2.fillRect(x + 2, y + 7, 6, 3); // Left mane
      context2.fillRect(x + 7, y + 5, 3, 3); // Center mane
    }
};