class Piece {
    constructor(hor_index, ver_index, piecename, isWhite, key) {
      this.hor_index = hor_index;
      this.ver_index = ver_index;
      this.piecename = piecename;
      this.isWhite = isWhite;
      this.key = key;

      this.selected = false;
    }
};