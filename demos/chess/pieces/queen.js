class Queen extends Piece {
    constructor(hor_index, ver_index, isWhite) {
      super(hor_index, ver_index, "queen", isWhite);
      

    }

    draw2(context) {
      context2.beginPath();

      context2.arc(this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 45, 15, 0, 2 * Math.PI);

      if (this.isWhite) {
        context2.fillStyle = "#ffffff";
        context2.strokeStyle = "#000000";
        
        context2.fill();
        context2.stroke();

        context2.font = 'bold 14pt Calibri';
        context2.textAlign = 'center';
        context2.fillStyle = '#000000';

        context2.fillText('Q', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }
      else {
        context2.fillStyle = "#000000";
        context2.strokeStyle = "#ffffff";
        
        context2.fill();
        context2.stroke();

        context2.font = 'bold 14pt Calibri';
        context2.textAlign = 'center';
        context2.fillStyle = '#ffffff';

        context2.fillText('Q', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }
    }
};