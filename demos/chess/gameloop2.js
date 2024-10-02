"use strict";

let canvas2;
let context2;

//window.onload = init2;

window.addEventListener('load', init2);


let wr1, wk1, wb1, wq, wk, wb2, wk2, wr2,
    wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8;

let br1, bk1, bb1, bq, bk, bb2, bk2, br2,
    bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8;

    wr1 = new Rook(0, 0, true, false, 0);
    wk1 = new Knight(1, 0, true, 1);
    wb1 = new Bishop(2, 0, true, 2);
    wq = new Queen(3, 0, true, 3);
    wk = new King(4, 0, true, false, 4);
    wb2 = new Bishop(5, 0, true, 5);
    wk2 = new Knight(6, 0, true, 6);
    wr2 = new Rook(7, 0, true, false, 7);
    wp1 = new Pawn(0, 1, true, false, 8);
    wp2 = new Pawn(1, 1, true, false, 9);
    wp3 = new Pawn(2, 1, true, false, 10);
    wp4 = new Pawn(3, 1, true, false, 11);
    wp5 = new Pawn(4, 1, true, false, 12);
    wp6 = new Pawn(5, 1, true, false, 13);
    wp7 = new Pawn(6, 1, true, false, 14);
    wp8 = new Pawn(7, 1, true, false, 15);

    br1 = new Rook(0, 7, false, false, 16);
    bk1 = new Knight(1, 7, false, 17);
    bb1 = new Bishop(2, 7, false, 18);
    bq = new Queen(3, 7, false, 19);
    bk = new King(4, 7, false, false, 20);
    bb2 = new Bishop(5, 7, false, 21);
    bk2 = new Knight(6, 7, false, 22);
    br2 = new Rook(7, 7, false, false, 23);
    bp1 = new Pawn(0, 6, false, false, 24);
    bp2 = new Pawn(1, 6, false, false, 25);
    bp3 = new Pawn(2, 6, false, false, 26);
    bp4 = new Pawn(3, 6, false, false, 27);
    bp5 = new Pawn(4, 6, false, false, 28);
    bp6 = new Pawn(5, 6, false, false, 29);
    bp7 = new Pawn(6, 6, false, false, 30);
    bp8 = new Pawn(7, 6, false, false, 31);

let whitepieces = [
    wr1, wk1, wb1, wq, wk, wb2, wk2, wr2,
    wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8 
];
let blackpieces = [
    br1, bk1, bb1, bq, bk, bb2, bk2, br2,
    bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8 
];

let selectedkey = -1;

function init2(){
    canvas2 = document.getElementById('demo2');
    context2 = canvas2.getContext('2d');

    canvas2.addEventListener('mousedown', function(event) {
        let xpos = Math.round((event.offsetX + 45) / 30) - 3;
        let ypos = Math.round((300 - 45 - event.offsetY) / 30);

        if (selectedkey == -1) {
            whitepieces.forEach((piece) => {
                if (xpos < piece.hor_index || xpos > piece.hor_index) {
                    return;
                }
    
                if (ypos < piece.ver_index || ypos > piece.ver_index) {
                    return;
                }
    
                piece.selected = true;
                selectedkey = piece.key;
            });
    
            blackpieces.forEach((piece) => {
                if (xpos < piece.hor_index || xpos > piece.hor_index) {
                    return;
                }
    
                if (ypos < piece.ver_index || ypos > piece.ver_index) {
                    return;
                }
    
                piece.selected = true;
                selectedkey = piece.key;
            });
        }
        else if (selectedkey < 16) {
            whitepieces[selectedkey].hor_index = xpos;
            whitepieces[selectedkey].ver_index = ypos;
            whitepieces[selectedkey].selected = false;

            selectedkey = -1;
        }
        else {
            blackpieces[selectedkey - 16].hor_index = xpos;
            blackpieces[selectedkey - 16].ver_index = ypos;
            blackpieces[selectedkey - 16].selected = false;

            selectedkey = -1;
        }
    });
    
    draw2();

    window.requestAnimationFrame(gameLoop2);
}

let secondsPassed2 = 0;
let oldTimeStamp2 = 0;
let fps2 = 240;

function gameLoop2(timeStamp) {
    secondsPassed2 = (timeStamp - oldTimeStamp2) / 1000;
    oldTimeStamp2 = timeStamp;

    fps2 = Math.round(1 / secondsPassed2);

    if (true) {
        draw2();
    }

    window.requestAnimationFrame(gameLoop2);
}

function drawBoard(){
    let bw = 240;
    let bh = 240;

    let p = 30;

    let instantStart = 1;

    for (var x = 30; x <= bw; x += 30) {
        for (var y = 30; y <= bh; y += 30) {
            if (((y / 30) % 2) == instantStart) {
                context2.fillStyle = "#e89468";
                context2.fillRect(x, y, 30, 30);
            }
            else {
                context2.fillStyle = "#bf693d";
                context2.fillRect(x, y, 30, 30);
            }
        }

        if (instantStart == 1)
            instantStart = 0;
        else
            instantStart = 1;
    }

    for (var x = 0; x <= bw; x += 240/8) {
        context2.moveTo(0.5 + x + p, p);
        context2.lineTo(0.5 + x + p, bh + p);
        
    }

    for (var x = 0; x <= bh; x += 240/8) {
        context2.moveTo(p, 0.5 + x + p);
        context2.lineTo(bw + p, 0.5 + x + p);
    }

    context2.strokeStyle = "black";
    context2.stroke();
}

function draw2(){
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    
    drawBoard();

    whitepieces.forEach((piece) => {
        piece.draw2(context2);
    });
    
    blackpieces.forEach((piece) => {
        piece.draw2(context2);
    });
    
}